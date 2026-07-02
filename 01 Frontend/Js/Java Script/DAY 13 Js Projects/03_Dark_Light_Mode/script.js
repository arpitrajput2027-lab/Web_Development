const btn = document.getElementById("mode")

function mode_dl(e){
    if(btn.style.backgroundColor == "black"){
        btn.textContent = "Dark Mode";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        btn.textContent = "Light Mode";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        document.querySelector("body").style.backgroundColor = "white";
    }
}

btn.addEventListener('click',mode_dl);