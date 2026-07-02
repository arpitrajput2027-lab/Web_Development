import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
const mongoDBURL = process.env.MONGODB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDBURL)
        console.log("Connected to MongoDB")
    }
    catch (error) {
        console.log(" Error connecting to MongoDB:", error)
    }
}

export default connectDB