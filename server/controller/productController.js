import pool from "../database/connectDatabase.js"



export const createProduct = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const getAllProduct = async (req, res) => {
    try {
        const products = await pool.query("SELECT * FROM products")
        res.status(200).json({
            status: "success",
            data: {
                products: products.rows
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        })
    }
}
export const getOneProduct = async (req, res) => {
    const { id } = req.params
    
    try {
        const products = await pool.query("SELECT * FROM products WHERE id = $1", [id])
        res.status(200).json({
            status: "success",
            data: {
                products: products.rows
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        })
    }
}
export const updateProduct = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
export const deleteProduct = async (req, res) => {
    const {id} = req.params
    try {
        await pool.query("DELETE FROM products WHERE id = $1", [id])
        res.status(200).json({
            status: "success",
            message: "Product deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        })
    }
}