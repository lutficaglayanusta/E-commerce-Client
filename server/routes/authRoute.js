import express from "express"
import { logIn, logOut, refreshToken, signUp } from "../controller/authController.js"


const router = express.Router()

router.post("/signup",signUp)
router.post("/login",logIn)
router.get("/logout", logOut)
router.post("/refresh-token",refreshToken)


export default router