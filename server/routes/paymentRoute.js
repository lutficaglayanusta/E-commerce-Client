import express from "express"
import {
  protectRoute
} from "../middleware/authMiddleWare.js";
import { checkoutSuccess, createCheckOutSession } from "../controller/paymentController.js";

const router = express.Router()


export default router