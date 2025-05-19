import express from "express"
import authRoute from "./authRoute.js"
import productRoute from "./productRoute.js"
import userRoute from "./userRoute.js"

const router = express.Router()

router.use("/auth",authRoute)
router.use("/product", productRoute)
router.use("/user",userRoute)

export default router