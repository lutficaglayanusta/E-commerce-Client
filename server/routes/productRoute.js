import express from "express"
import { createProduct, deleteProduct, getAllProduct, getOneProduct, updateProduct,getCategory } from "../controller/productController.js"
import { adminMiddleAcsess, protectRoute } from "../middleware/authMiddleWare.js"


const router = express.Router()

router.get("/", getAllProduct)
router.get("/:category",getCategory)
router.post("/", protectRoute ,adminMiddleAcsess,createProduct)
router.put("/:id", protectRoute,adminMiddleAcsess,updateProduct)
router.delete("/:id",protectRoute,adminMiddleAcsess,deleteProduct)
router.get("/:id",getOneProduct)




export default router