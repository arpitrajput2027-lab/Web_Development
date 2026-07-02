// Custom MiddleWare , Status Code , HTTP Headers
import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 8000

// built-in middleware to parse incoming JSON requests  -->>
app.use(express.json())   

// Third-party middleware to enable Cross-Origin Resource Sharing (CORS) -->>
app.use(cors({            
    "origin": 'http://localhost:5173',
}))

// Custom middleware for checking Password -->>
let password = "arpit2006"
app.use((req, res, next) => {
    if (req.body.password === password) {
        next()
    } else {
        res.status(401).json({ message: "Unauthorized: Invalid password" })
    }
})

app.get("/",(req , res)=>{
    // use below header by comment out custom middleware from browser (other wise it also work from thunder client)

    // console.log(req.headers) // Log the request headers
    // console.log(req.get('User-Agent')) // Log the user-agent header

    res.set('x-My-Custom-Header', 'Arpit Rajput Lodhi') // Set a custom response header
    res.removeHeader("x-powered-by") // Remove header from response
    res.status(200).json({name:"Arpit Rajput Lodhi" ,age :21})
})

app.post("/",(req , res)=>{
    console.log(req.body)
    res.status(201).json({message:"Data received successfully" ,data:req.body})
})

app.listen(PORT,()=>{
    console.log("Server is running on port 8000")
})