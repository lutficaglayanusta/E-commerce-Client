import express from "express"
import { createCategory } from "../controller/categoryController.js"


const router = express.Router()

router.post("/", createCategory)


export default router