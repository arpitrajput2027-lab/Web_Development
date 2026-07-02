
import React from 'react'
import axios from 'axios'
import { useState } from 'react'



function App() {

let [name, setName] = useState(null)
let [age, setAge] = useState(null)
let [state, setState] = useState(null)

async function postResponse() {
axios.post('http://localhost:8000/',{
name : name,
age : age,
state : state
})
.then((res)=>{
    console.log(res)
    console.log(res.data)
    console.log(res.data.data)
})
.catch((error)=>{
    console.error("Error:", error)
})
}


async function getResponse() {
axios.get('http://localhost:8000/')
.then((res)=>{
  console.log(res.data)
})
.catch((error)=>{
  console.error("Error:", error)
})
}

  return (
    <div>
        <button onClick={()=>getResponse()}>Connection Check</button> <br/><br/>
        <div><input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} /></div> <br/>
        <div><input type="text" placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)} /></div> <br/>
        <div><input type="text" placeholder='Enter State' value={state} onChange={(e)=>setState(e.target.value)} /></div> <br/>
        <button onClick={()=>postResponse()}>Send</button>
    
    </div>
  )
}

export default App


