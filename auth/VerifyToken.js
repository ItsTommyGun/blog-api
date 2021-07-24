var jwt = require("jsonwebtoken");
var config = require("../config");

function verifyToken(req, res, next) {
  // check for bearer token and remove "bearer" part
  var token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  token = token.replace(/^Bearer\s+/, "");
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({
          auth: false,
          authStatus: "failed",
          message: "Failed to authenticate token.",
          err: err,
        });

    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
