import React from 'react'
import axios from 'axios'

// async function getResponse() {
//     const response = await fetch('http://localhost:8000/')
//     // console.log(response)
//     const data = await response.json()
//     console.log(data)
// }


async function getResponse() {
  // try {
  //   const response = await fetch('http://localhost:8000/')
  //   const data = await response.json()
  //   console.log(data)

  // } catch(error) {
  //       console.error("Error:", error)
  //   }


// axios automatically parses the JSON response, so we don't need to call .json() like we do with fetch. We can just access the data directly from the response object.
axios.get('http://localhost:8000/')
.then((res)=>{
  console.log(res)
  console.log(res.data)
  console.log(res.data.name)
})
.catch((error)=>{
  console.error("Error:", error)
})

}




const App = () => {
  return (
    <div>
      <button onClick={()=>getResponse()}>Send</button>
    </div>
  )}


export default App