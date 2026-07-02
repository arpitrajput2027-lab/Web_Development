const student={
    name: "Nisha Rajput",
    age:19,
    rollN:2421106,
    HomeTown : "Uttar Pradesh"
}
// Destructuring

// const name = student.name;
// const age = student.age;

const {name: userName,age:userAge } = student;

// console.log(name,age);
console.log(userName,userAge);


// Same with Array :
const arr = [10 , 20, 30, 40];
const [first,second] = arr;
console.log(first,second);