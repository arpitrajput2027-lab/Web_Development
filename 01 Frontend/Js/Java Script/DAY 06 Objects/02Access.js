const user ={
    name: "Arpit Rajput",
    age:19,
    cgpa:8.445,
    class:"B1",
   "Home Town" : "Uttar Pradesh"
}

console.log(user["name"]);
console.log(user["Home Town"])



// user and userX are Pointing to Same Objects
const userX = user;
userX.name = "Antima Rajput";
console.log(user);


// How to access key
console.log(Object.keys(user));

// How to access key Value
console.log(Object.values(user));


// How to access key & key Values Both
console.log(Object.entries(user));


for(let keys in user){
    console.log(keys , user[keys]);
}


// Recommenedewd Method --> for FOR LOOP

// for(let keys of Object.keys(user)){
//     console.log(keys);
// }

const temp = Object.keys(user);
console.log(temp);
for(let keys of temp){
    console.log(keys);
}

// Values
for(let values of Object.values(user)){
    console.log(values);
}
// Values & Key Both
for(let values of Object.entries(user)){
    console.log(values);
}