import express from "express"
import { forgetPassword, getUserDetails, loginUser, resetPassword, setUserDetails, uploadPhoto } from "../controllers/userController.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()

router.route("/").get(isAuthenticated, getUserDetails)
router.route("/register").post(setUserDetails)
router.route("/login").post(loginUser)
router.route("/forget").post(forgetPassword)
router.route('/resetPassword/:token').post(resetPassword)
router.route("/upload_avatar").put(isAuthenticated, uploadPhoto)

export default router