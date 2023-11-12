const router = require("express").Router();
const controller = require("./users.controller");
const { guard } = require('../../helper');
const multerSetting = require("../../helper/multer").userImageUpload;

/*
 *  Register New User
 */
router.post(
    "/register",
    multerSetting,
    controller.register
);

/*
 *  Login
 */
router.post(
    "/login",
    controller.login
);

/*
 *  Resend verification Link
 */
router.post(
    "/resend-verification-link",
    controller.resendVerificationLink
);

/*
 *  Verify User Account
 */
router.post(
    "/verify-user",
    controller.verifyUser
);

/*
 *  Forgot Password
 */
router.post(
    "/forgot-password",
    controller.forgotPassword
);

/*
 *  Reset Password
 */
router.post(
    "/reset-password",
    controller.resetPassword
);

/*
 *  Update Profile
 */
router.put(
    "/update",
    multerSetting,
    guard.isAuthorized(['admin', 'organizer', 'player']),
    controller.update
);
  


/**
 * Delete Profile
 */
 router.delete(
    "/delete/:id",
    guard.isAuthorized(['admin']),
    controller.delete
);
/*
 *  Change Password
 */
router.post(
    "/change-password",
    guard.isAuthorized(['admin', 'organizer', 'player']),
    controller.changePassword
);

/*
 *  Get Profile
 */
router.get(
    "/get-profile",
    guard.isAuthorized(['admin', 'organizer', 'player']),
    controller.get
);

/*
 *  Get user by id
 */
router.get(
    "/get/:id",
    guard.isAuthorized(['admin', 'organizer', 'player']),
    controller.getUserById
);


/*
 *  logout
 */
router.post(
    "/logout",
    guard.isAuthorized(['admin', 'organizer', 'player']),
    controller.logout
);

module.exports = router;