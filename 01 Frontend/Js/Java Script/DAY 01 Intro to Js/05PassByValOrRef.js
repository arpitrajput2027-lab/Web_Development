// Primitive Data Type are Pass By Value

let a = 10;
let b = a;
b = 20;
console.log(a ,b);


// Non-Primitive Data Type are Pass By Reference

let obj ={
    name:"Nisha",
    age:20,
}
let obj02 = obj;
obj02.name = "riya";
console.log(obj , obj.name);