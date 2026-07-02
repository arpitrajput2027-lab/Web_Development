// Object ke ander Funtion
const user ={
    name: "Arpit Rajput",
    age:19,
    cgpa:8.445,
    class:"B1",
    greeting: function(){
        console.log(`Funtion in The Object. Cretaed by ${user.name}`);
        console.log(`Funtion in The Object. Cretaed by ${this.name}`);

        return 10;
    }
}

// user.greeting();
const val = user.greeting();
console.log(val);


// Object ke ander Object
const student ={
    name: "Arpit Rajput",
    age:19,
    cgpa:8.445,
    academic :{
        cgpa: 9.998,
        course : "B.Tech",
        Duration : "4 Years",
        Year : "2024 - 2028"
    }
}
console.log("Nested Objects : " , student);

console.log(student.academic); // academic object
console.log(student.academic.Year); // 2024 - 2028



// const studentX = student;  // Pointing to Same Object
const studentX = {...student};  // Pointing to different Object  -->> Shallow Copy

// NOTE : Nested Object par spread operator kaam nhi krta hai

// studentX.name = "Nisha Rajput";
// studentX.academic.Year = "2023 - 2027";
// console.log(student);  
// console.log(studentX);


// Solution for Nested Object -- > > Deep Copy
const studentY = structuredClone(student);  // Pointing to different Object  -->> Deep Copy
// Now ,Totally Independent Objects:
studentY.academic.Year = "2022 - 2026";
console.log(student);  
console.log(studentY);