var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Profile = require("./Profile");
var VerifyToken = require("../auth/VerifyToken");
var ObjectId = require("mongoose").Types.ObjectId;

// Returns profile of currently logged in user
router.get("/", VerifyToken, (req, res) => {
  Profile.findOne({ linkedUser: req.userId }, function (err, profile) {
    if (err)
      return res.status(500).send("There was a problem finding the profile.");
    res.status(200).send({ name: profile.name, surname: profile.surname, city: profile.city });
  });
});

// Returns profile of a given user id
router.get("/:id", VerifyToken, (req, res) => {
  if (!req.params.id || !ObjectId.isValid(req.params.id)) {
    return res.status(404).send({ error: "problems with provided id" });
  }

  Profile.findOne({ linkedUser: ObjectId(req.params.id) }, function (err, profile) {
    if (err) {
      return res.status(500).send({ error: "no profile found for id" });
    }
    res.status(200).send({ name: profile.name, surname: profile.surname, city: profile.city });
  });
});



// Updates profile
router.put("/", VerifyToken, async (req, res) => {
    const filter = { linkedUser: req.userId };
    const update = req.body;
    await Profile.findOneAndUpdate(filter, update, {
        new: true
      }).then((profile) => {
        if(!profile) return res.status(404).send("No profile found.");
        res.status(200).send({profile, message: "Profile updated!"});
      }).catch((err) => {
        if (err) return res.status(500).send("There was a problem updating the profile:" + err);
    });
});

module.exports = router;
