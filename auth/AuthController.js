var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require("../user/User");
var VerifyToken = require("./VerifyToken");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var config = require("../config");
const Profile = require("../profile/Profile");

async function checkUserExistsByMail(req, res, next) {
  const userExists = await User.findOne(
    { email: req.body.email },
    function (err, user) {
      if (err) return res.status(500).send("Error on the server.");
    }
  );

  if (userExists) {
    return res.status(500).json({ message: "User already in database." });
  }

  next();
}

router.post("/register", checkUserExistsByMail, async function (req, res) {

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  var role = req.body.role.toUpperCase();

  const newUser = await User.create({
    email: req.body.email,
    password: hashedPassword,
    role: role
  }).then((user) => {
    return user.toObject();
  }).catch((err) => {
    return res
      .status(500)
      .send({message: "There was a problem registering the user:", error: err});
  });

  Profile.create({ linkedUser: newUser._id }, function (err, profile) {
    if (err)
      return res.status(500).send("There was a problem creating the profile.");

  });

  res.status(200).send({ message: "Worked!" });
});

router.get("/me", VerifyToken, function (req, res, next) {
  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err)
      return res
        .status(500)
        .json({ error: "There was a problem finding the user." });
    if (!user) return res.status(404).json({ error: "No user found." });

    res.status(200).send(user);
  });
});

router.post("/login", function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).json({ error: "Error on the server." });
    if (!user) return res.status(404).json({ error: "No user found." });

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id, role: user.role }, config.secret, {
      expiresIn: 86400, // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  });
});

// add the middleware function
router.use(function (user, req, res, next) {
  res.status(200).send(user);
});

// AuthController.js
router.get("/logout", function (req, res) {
  res.status(200).send({ auth: false, token: null });
});

// add this to the bottom of AuthController.js
module.exports = router;
