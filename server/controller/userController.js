import pool from "../database/connectDatabase.js"




export const getUser = async (req, res, next) => {
    const { id } = req.params
    
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id])
    res.status(200).json({
        data:user.rows[0]
    })
    
}
export const getAllUser = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users")
        res.status(200).json({
            data:users.rows
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
export const updateUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
export const deleteUser = async (req, res) => {
    const {id} = req.params
    try {
        await pool.query("DELETE FROM users WHERE id=$1", [id])
        res.status(201).json({
            message:"Delete was successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}