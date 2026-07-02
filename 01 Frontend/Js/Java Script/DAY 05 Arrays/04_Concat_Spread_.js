let arr1 = [1,2,3];
let arr2 = [4,5,6,7];
let arr3 = [8,9,0];
// Concatination of Arrays
// let arr4 = arr1.concat(arr2,arr3);
let arr4 = [arr1 ,arr2 ,arr3];
console.log(arr4);

// Spread Operator
let arr5 =[...arr1,...arr2,...arr3];
// console.log(arr5);



// Array to Strings
let name1 = ["Arpit","Varun","Bhavneesh","Bhavay","Aryan"];

// console.log(name.toString());
// console.log(name.join("  "));
// console.log(name1.indexOf("Aryan")); //4
// console.log(name1.lastIndexOf("Varun")); //1
// console.log(name1.includes("Varun")); //true


// Sort
// console.log(name1.sort());  //[ 'Arpit', 'Aryan', 'Bhavay', 'Bhavneesh', 'Varun' ]

// console.log(name1.reverse());


// Issue During Sorting Number Array

 let num = [12,98,23,0,8,23,103];
 // name1.sort();  // Sorted According to String (ASCII)
 // Solution 
num.sort((a,b)=>a-b);  // -ve -> a,b otherwise b,a
 num.sort((a,b)=>b-a); //decending order
//  console.log(num);