// Getting Element of HTML
const heading = document.getElementById("heading01")
const venom = document.getElementById("venom01")
console.log(heading)

// Craeting New Element
const newElement = document.createElement("h2")
newElement.id = "newEle";
newElement.style.backgroundColor = "Yellow";
newElement.textContent = "This Is Created NEW Content Using DOM Js";
newElement.classList.add("hello");
newElement.classList.add("class02");

console.log(newElement);
console.log(newElement.getAttribute("id"))
console.log(newElement.getAttribute("class"))

venom.after(newElement);

// adding in List

const unOrderedList = document.getElementById("listing")
const list01 = document.createElement("li")
list01.textContent = "MILK";

const list02 = document.createElement("li")
list02.textContent = "Butter";

const list03 = document.createElement("li")
list03.textContent = "Paneer";


// MILK ke baad  --> Cream
const list04 = document.createElement("li")
list04.textContent = "Cream";

unOrderedList.append(list01);
unOrderedList.prepend(list02);
unOrderedList.append(list03);
list01.after(list04);

// unOrderedList.children[1].after(list03);

// Practical use 


json_arr = ["DSA","Web Dev","AI ML","Data Science","Gen AI"];

const tech_list = document.getElementById("tech");
const fragment = document.createDocumentFragment()

for(let tech_stack of json_arr){
    const list_tech = document.createElement("li")
    list_tech.textContent = tech_stack;
    fragment.append(list_tech)
    
}

tech_list.append(fragment)


// -->> How to Remove Any Element

// const rem_element = document.getElementById("newEle")
// rem_element.remove()