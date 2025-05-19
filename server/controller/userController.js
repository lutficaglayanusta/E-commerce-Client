import pool from "../database/connectDatabase.js"

export const getUser = async (req, res, next) => {
    const { id } = req.params
    
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id])
    res.status(200).json({
        data:user.rows[0]
    })
    
}