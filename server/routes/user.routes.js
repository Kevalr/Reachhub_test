const { authJwt } = require("../middleware");
const controller = require("../controller/user.controller.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/topplayerslist",
    [authJwt.verifyToken],
    controller.topPlayersList
  );
  app.post(
    "/api/playerratingshistory",
    [authJwt.verifyToken],
    controller.playerRatingsHistory
  );
};