import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const { ACCESS_TOKEN, REFRESH_TOKEN } = process.env;

export const jwtCreate = (userId) => {
    const accessToken = jwt.sign({userId}, ACCESS_TOKEN, {
        expiresIn:"15m"
    })
    const refreshToken = jwt.sign({userId}, REFRESH_TOKEN, {
        expiresIn:"7d"
    })

    return { accessToken ,refreshToken}
}