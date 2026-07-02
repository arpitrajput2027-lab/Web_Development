// Non-Primitive Data Types : object , array , function

// array
let detail =[20 , "Arpit" ,"3rd Sem", 2421106];
console.log(detail);


// object
let user = {
    name : "Arpit",
    rollNo : 2421106,
    current_Status : "Unmarried",
    age : 20,
  }
console.log(user);


// funtion
 let name = function greet(){
    console.log("Good Morning , Sir");
}
// greet();
console.log(name);
name();


console.log(typeof user,typeof detail , typeof name);
