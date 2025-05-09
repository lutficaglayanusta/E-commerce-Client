import pool from "../database/connectDatabase.js";

export const createCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const category = await pool.query(
      "INSERT INTO category (name,description) VALUES ($1,$2) RETURNING *",
      [name, description]
      );
      res.status(200).json({
          success: true,
          category:category.rows
      })
  } catch (e) {
    console.error("Error Message:", e.message);
  }
};
