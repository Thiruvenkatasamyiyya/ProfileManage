import express from "express"
import { getUserDetails, setUserDetails } from "../controllers/userController.js"

const router = express.Router()

router.route("/").get(getUserDetails)
router.route("/register").post(setUserDetails)

export default router