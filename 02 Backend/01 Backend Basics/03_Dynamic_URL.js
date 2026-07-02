import express from 'express'
import { users } from './mockDATA.js'
const app = express()
const PORT = 8000

app.get("/",(req , res)=>{
    res.send("This is Home Page")
})

// console.log(users)
app.get("/users",(req , res)=>{
    res.json(users)
})


// Path Parameter : http://localhost:8000/users/1
app.get("/users/:id",(req , res)=>{
    let id = req.params.id
    let user = users.find((user)=> user.id == id)
    if(!user){
        res.status(404).json({message: "User not found"})
    }
    res.send(user)
})

// Query Parameter : http://localhost:8000/query?name=Arjun&age=24
app.get("/query",(req , res)=>{
    let data = req.query
    console.log(data)
    res.send(data)
})

app.listen(PORT,()=>{
    console.log("Server Started at PORT 8000")
})
