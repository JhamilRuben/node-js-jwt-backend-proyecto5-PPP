
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const controllerFormato = require("../controllers/formato.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);
  app.get(
    "/api/test/user",[authJwt.verifyToken],controller.userBoard);
    // Retrieve all Formatos
  // app.get(
  //   "/api/test/user/formatos",[authJwt.verifyToken],controllerFormato.userf);
  app.get(
    "/api/test/user/formatos",  // [authJwt.verifyToken],controllerFormato.findAll
  );
  /////////////////////////////////// app.use('/api/user', controller);
  app.get(
    "/api/test/mod",[authJwt.verifyToken, authJwt.isModerator],controller.moderatorBoard);
  app.get(
    "/api/test/admin",[authJwt.verifyToken, authJwt.isAdmin],controller.adminBoard);
};
