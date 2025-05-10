import { jwtCreate } from "../utils/generatorJwt.js"

export const sendJwtClient = (userId, res) => {
    const { accessToken, refreshToken } = jwtCreate(userId)
    
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
}