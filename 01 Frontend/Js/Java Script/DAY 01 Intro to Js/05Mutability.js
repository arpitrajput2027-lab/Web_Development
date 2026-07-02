// Primitive Data Type are Immutable 

let name ="Arpit";
name[0] ="K";
// name ="Nisha";
console.log(name[0] , name);

// Non-Primitive Data Type are Mutable 

let arr =[1,2.3,"Arpit",2421106];
arr.push(90);
arr[2] ="Nisha";
console.log(arr);


let obj ={
    name:"Nisha",
    age:20,
}
obj.name ="Antima";
console.log(obj , obj.name);