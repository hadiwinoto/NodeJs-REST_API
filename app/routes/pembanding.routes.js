const { authJwt } = require("../middleware");
const controller = require("../controllers/pembanding.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/pembanding/findall",[authJwt.verifyToken],controller.findAll);
  app.get("/api/pembanding/findone/:id",[authJwt.verifyToken],controller.findOne);
  app.post("/api/pembanding/create",[authJwt.verifyToken],controller.create);
  // app.post("/api/pembanding/create",[authJwt.verifyToken],controller.findAll);
};