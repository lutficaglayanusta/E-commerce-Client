import express from "express"
import categoryRoute from "./categoryRoute.js"


const router = express.Router()

router.use("/category",categoryRoute)


export default router