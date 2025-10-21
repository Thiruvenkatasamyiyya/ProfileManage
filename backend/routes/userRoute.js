import express from "express"
import { getUserDetails, loginUser, setUserDetails } from "../controllers/userController.js"

const router = express.Router()

router.route("/").get(getUserDetails)
router.route("/register").post(setUserDetails)
router.route("/login").get(loginUser)

export default router