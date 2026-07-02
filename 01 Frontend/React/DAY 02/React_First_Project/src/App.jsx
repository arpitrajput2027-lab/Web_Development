import { useState } from "react";

function App(){
  // let count =0;
  // function incrementCount(){
  //   count++;
  //   console.log(count)
  // }
let [count , setCount] = useState(0);

function incrementCount(){
  count++;
  setCount(count);
}
  return(

    <>
    <p>Counter :{count}</p>
    <button onClick={incrementCount}>Increment : {count}</button>
    </>
  )
}
export default App;