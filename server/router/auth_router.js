const express = require("express")
const router = express.Router();
const userControl = require("../controllers/auth_controller");
const {signupSchemaValidate,loginSchemaValidate} = require("../validation/validate");
const validate = require("../middleware/auth_middleware")
const userMiddleware = require("../middleware/user_middleware");


router.route("/signup").post(validate(signupSchemaValidate),userControl.signup)
router.route("/login").post(validate(loginSchemaValidate),userControl.login)
router.route("/contact").post(userControl.ContactForm)
router.route("/user").get(userMiddleware,userControl.user)
router.route("/service").get(userControl.service);

module.exports = router;