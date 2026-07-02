import express from "express"
import mongoose from "mongoose"
import User from "./models/user.model.js"
import connectDB from "./config/db.js"
import userRouter from "./routes/user.routes.js"


const app = express()
app.use("/api_readyIndex",userRouter)
const PORT = process.env.PORT || 5000
app.use(express.json())

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})
