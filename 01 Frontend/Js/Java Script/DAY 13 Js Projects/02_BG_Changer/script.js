const parent = document.getElementById("parent")

parent.addEventListener('click' ,(e)=>{
    const child = e.target;
    console.log(child)
    document.querySelector("body").style.backgroundColor = child.id;
})