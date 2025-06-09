import express from "express"
import { deleteUser, getAllUser, getUser, updateUser } from "../controller/userController.js"
import { adminMiddleAcsess, protectRoute } from "../middleware/authMiddleWare.js"

const router = express.Router()

router.get("/:id", protectRoute,adminMiddleAcsess,getUser)
router.get("/", protectRoute,adminMiddleAcsess,getAllUser)
router.delete("/:id",protectRoute,adminMiddleAcsess, deleteUser)
router.put("/:id",protectRoute,adminMiddleAcsess,updateUser)

export default router