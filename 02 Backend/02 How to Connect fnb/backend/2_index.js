// Post data from frontend to backend using axios and express js
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

app.post("/",(req , res)=>{
    console.log(req.body)
    res.json({message:"Data received successfully" ,data:req.body})
})

app.listen(PORT,()=>{
    console.log("Server is running on port 8000")
})