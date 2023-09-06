/*this file contains all routes like registerUser,login,getAlluser,profile,deleteProfile,updateProfile*/

const express = require('express');
const { registerUser, loginUser, getAllUser, getSingleUser, deleteUser, updateUser } = require('../controller/userController');
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/getAllUser").get(getAllUser);
router.route("/profile/:id").get(getSingleUser);
router.route("/deleteProfile/:id").delete(deleteUser);
router.route("/updateProfile/:id").put(updateUser);
module.exports = router;
