// Entry File

import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 8000
app.use(express.json())
app.use(cors({
    "origin": 'http://localhost:5173',
}))

app.get("/",(req , res)=>{
    res.json({name:"Arpit Rajput Lodhi" ,age :21})
})

app.listen(PORT,()=>{
    console.log("Server is running on port 8000")
})