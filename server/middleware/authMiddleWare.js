import jwt from "jsonwebtoken";
import pool from "../database/connectDatabase.js";

export const protectRoute = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return res.status(401).json({
        message: "Unauthorized - No access token provided",
      });
    }
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
      const user = await pool.query("SELECT * FROM users WHERE user_id =$1", [decoded.userId]);
      if (!user) {
        return res.status(401).json({
          message: "User not found",
        });
      }
      req.user = user.rows[0];
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({
          message: "Unauthorized - Access token expire",
        });
      }
      throw error;
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized - Invalid access token",
    });
  }
};
export const adminMiddleAcsess = async (req, res, next) => {
    const {role} = req.user
    if(role !== "admin"){
        return res.status(403).json({
            message:"Forbidden - You do not have permission to access this resource"
        })
    }
    next()
};
