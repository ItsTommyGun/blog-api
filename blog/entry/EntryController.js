var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var VerifyToken = require("../../auth/VerifyToken");
const Entry = require("./Entry");

router.post("/", VerifyToken, function (req, res) {
  Entry.create({
    title: req.body.title,
    content: req.body.content,
    linkedUser: req.userId,
  })
    .then((response) => {
      return res.status(200).send({ message: "Entry successfully saved." });
    })
    .catch((err) => {
      return res.status(500).send({ message: "hat nicht geklappt " + err });
    });
});

router.get("/", function (req, res) {
  Entry.find()
    .lean()
    .exec()
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: "there was an error fetching the entries " + err });
    });
});

module.exports = router;
