// function onClickingH1(){
//     const ele = document.getElementById("first_box");
//     ele.textContent = "Founder of Svedaz and CTO of EIDOZx";
//     ele.style.backgroundColor = "Pink";

// }

// const ele = document.getElementById("first_box");
// ele.onclick = function onClickingH1(){
//     ele.textContent = "Founder of Svedaz and CTO of EIDOZx";
//     ele.style.backgroundColor = "Pink";
// }


// ele.addEventListener('click' , ()=>{
//     ele.textContent = "Founder of Svedaz and CTO of EIDOZx";
// })
// ele.addEventListener('click' , ()=>{
//     ele.style.backgroundColor = "Pink";
// })


// const child1 = document.getElementById("child1")

// child1.addEventListener('click',()=>{
//     child1.style.backgroundColor = 'red';
//     child1.textContent = "I am Clicked";
// })


// -->> Apply on Each Box

const parent_div = document.getElementById("parent")
console.log(parent_div)
console.log(parent_div.childNodes)
console.log(parent_div.children)


// for(let box of parent_div.children){
//     console.log(box);
//     box.addEventListener('click', ()=>{
//         box.textContent = "I am Clicked";
//     })    

// }

function handleClicked(e){
    e.target.textContent ="Hi, I am clicked";
    console.log(e.target);
    parent_div.removeEventListener('click',handleClicked)

}
parent_div.addEventListener('click',handleClicked)
