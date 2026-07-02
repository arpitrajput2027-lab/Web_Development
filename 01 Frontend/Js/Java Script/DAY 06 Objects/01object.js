// CRUD Operation
// CRUD -->> Create Read Update Delete


// Create
const user ={
    name: "Arpit Rajput",
    age:19,
    cgpa:8.445,
    class:"B1"
}

// Read
console.log(user);   // display the Object 
console.log(user.cgpa)  // Access the Particular key

// Update
user.rollNumber = 2421106;  
user.age = 20;
console.log(user);  // Display Updated Object

// Delete

delete user.class;
console.log(user);   // class key DELETED
