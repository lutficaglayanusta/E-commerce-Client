import pool from "../database/connectDatabase.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendJwtClient } from "../helper/tokenHelper.js";

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (user.rows.length > 0) {
    return res.status(400).json({
      message: "User already exits",
    });
  }

  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        next(err);
      } else {
        const users = await pool.query(
          "INSERT INTO users (name,email,password) VALUES($1,$2,$3) RETURNING *",
          [name, email, hash]
        );

        sendJwtClient(users.rows[0].user_id, res);

        res.status(201).json({
          success: true,
          data: users.rows[0],
        });
      }
    });
  } catch (error) {
     res.status(500).json({
      message: error.message,
    });
  }
};
export const logIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
   return res.status(400).json({
      message: "Please check the credientials",
    });
  }

  try {
    const users = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (users.rows.length === 0) {
     return res.status(401).json({
        message: "User is not exits",
      });
    }

    bcrypt.compare(password, users.rows[0].password, (err, result) => {
      if (result) {
        sendJwtClient(users.rows[0].user_id, res);
        res.status(200).json({
          success: true,
          data: users.rows[0],
        });
      } else {
        res.status(401).json({
          message: "Invalid email or password",
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export const logOut = async (req, res, next) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.status(201).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
export const refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      res.status(401).json({
        message: "No refresh token provided",
      });
    }
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);

    const accessToken = jwt.sign(
      { userId: decoded.user_id },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });
    res.status(201).json({
      message: "Token refreshed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};