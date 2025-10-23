import express from "express"
import { forgetPassword, getUserDetails, loginUser, resetPassword, setUserDetails } from "../controllers/userController.js"

const router = express.Router()

router.route("/").get(getUserDetails)
router.route("/register").post(setUserDetails)
router.route("/login").get(loginUser)
router.route("/forget").post(forgetPassword)
router.route('/resetPassword/:token').post(resetPassword)

export default router