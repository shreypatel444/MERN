const express = require("express");
const router = express.Router();
const adminData = require("../controllers/admin_controller");
const adminMiddleware = require("../middleware/Admin_middleware");
const validate = require("../middleware/user_middleware");

router.route("/user").get(validate, adminMiddleware, adminData.getAllUsers);
router
  .route("/contact")
  .get(validate, adminMiddleware, adminData.getAllContacts);
router
  .route("/user/delete/:id")
  .delete(validate, adminMiddleware, adminData.deleteUserById);
router
  .route("/user/:id")
  .get(validate, adminMiddleware, adminData.getUserById);
router
  .route("/contact/delete/:id")
  .delete(validate, adminMiddleware, adminData.deleteContactById);
router
  .route("/user/update/:id")
  .patch(validate, adminMiddleware, adminData.updateUserById);

module.exports = router;
