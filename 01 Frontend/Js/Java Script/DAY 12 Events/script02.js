const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click' , (e)=>{
    console.log(e.target) // e contains all meta info of corresponding info
    console.log("Grand Parent Clicked.")
    grandparent.style.backgroundColor = "red";
},true)

// const parent = document.getElementById("parent");
// parent.addEventListener('click' , ()=>{
//     console.log("Parent Clicked.")
//     parent.style.backgroundColor = "pink";
// },true)

// const child = document.getElementById("child");
// child.addEventListener('click' , ()=>{
//     console.log("Child Clicked.")
//     child.style.backgroundColor = "black";
// },true)