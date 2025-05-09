import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import indexRoute from "./routes/indexRoute.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api",indexRoute)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Sunucu ${port} çalışmaya başladı.`)
})




