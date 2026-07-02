let btn = document.querySelector("#mode");
let currMode = "light";

btn.addEventListener("click", () =>{
  if(currMode == "light"){
    currMode = "Dark";
    document.querySelector("body").style.backgroundColor = "Black";
  }
  else {
        currMode = "light"
        document.querySelector("body").style.backgroundColor = "White";

  }
  console.log(currMode)
});
