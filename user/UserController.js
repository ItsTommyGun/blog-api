var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require("./User");
var VerifyToken = require("../auth/VerifyToken");
const { getRoleForUser } = require("./UserHelpers");
const Profile = require("../profile/Profile");

// CREATES A NEW USER
router.post("/", function (req, res) {
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    function (err, user) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      res.status(200).send(user);
    }
  );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get("/", function (req, res) {
  User.find({})
    .lean()
    .exec()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get("/:id", function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
});

// DELETES A USER FROM THE DATABASE
router.delete("/:id", VerifyToken, async function (req, res, next) {
  const userRole = await getRoleForUser(req.userId);
  if (userRole !== "ADMIN") {
    return res.status(403).send({ message: "You need admin privileges." });
  }

  if (!req.params.id || req.params.id == "undefined") {
    return res.status(500).send({ message: "Missing id" });
  }

  let messageQueue = "";

  await User.findByIdAndRemove(req.params.id)
    .lean()
    .exec()
    .then((user) => {
      if (!user) return res.status(404).send({ message: "No user found." });
      console.log(user);
      messageQueue += "User with mail " + user.email + " was deleted.";
    })
    .catch((err) => {
      return res
        .status(500)
        .send("There was a problem deleting the user:", err);
    });

  Profile.deleteOne({ linkedUser: req.params.id })
    .lean()
    .exec()
    .then(() => {
        messageQueue += " Profile removed.";
      return res.status(200).send({message: messageQueue });
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: "an error occured deleting the profile." });
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put("/:id", function (req, res) {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function (err, user) {
      if (err)
        return res.status(500).send("There was a problem updating the user.");
      res.status(200).send(user);
    }
  );
});

module.exports = router;
