import express from "express"
import authRoute from "./authRoute.js"
import productRoute from "./productRoute.js"
import userRoute from "./userRoute.js"
import paymentRoute from "./paymentRoute.js"

const router = express.Router()

router.use("/auth",authRoute)
router.use("/product", productRoute)
router.use("/user", userRoute)
router.use("/payments",paymentRoute)

export default router