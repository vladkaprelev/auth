const Router = require("express");
const authRouter = new Router();
const controller = require("../controller/authController");
const { check } = require("express-validator");
const roleMiddleware = require("../middleware/roleMiddleware");
authRouter.post(
  "/registration",
  [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check(
      "password",
      "Пароль должен быть больше 4 и меньше 10 символов"
    ).isLength({
      min: 4,
      max: 10,
    }),
  ],
  controller.registration
);
authRouter.post("/login", controller.login);
authRouter.get("/users", roleMiddleware(["admin"]), controller.getUsers);

module.exports = authRouter;
