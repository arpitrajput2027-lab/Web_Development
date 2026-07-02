
import express from 'express'
const app = express()
const PORT = 8000
app.use(express.json())
// app.[httpMethod]("route",callback)

app.get("/", (req, res) => {
    res.send("This is Home Page")
})
app.get("/about", (req, res) => {
    res.send("This is About Page")
})

// HTML and Json DATA
app.get("/html", (req, res) => {
    res.send("<h1>Hello, World!</h1>")
})
app.get("/json", (req, res) => {
    res.json({
        "name": "Ali",
        "age": 21,
        "city": "Lahore",
    })
})

// Post Method 
app.post("/login", (req, res) => {
    let body = req.body
    console.log(body)
    res.send("This is Login Page")
})


app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`)
})