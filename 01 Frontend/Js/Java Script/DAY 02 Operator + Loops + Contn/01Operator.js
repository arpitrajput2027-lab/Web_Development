// Arithmetic Operator
console.log("Sum        :",2+3);
console.log("Difference :",2-3);
console.log("Division   :",6/2);
console.log("Product    :",2*3);
console.log("Exponential:",2**3);
console.log("Modulus    :",10%3);


// Assignment Operator
let a = 10;
let b = 20;
a+=b  //a = a+b;
console.log("Value of a is :",a);


// Comparison Operator
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);  

let m = 10;
let n ="10";
console.log(m==n);   // value
console.log(m===n);  // value + datatype  --> Firstly Compare the DT then Compare b/w Values



// Logical Operator
console.log(true && true);   // true
console.log(true && false); // false    
console.log(false && false); // false
console.log(false && true);  // false

console.log(true || true);   // true
console.log(true || false); // true    
console.log(false || false); // false
console.log(false || true);  // true

let n1 = "";   // treat as true
let n2 = "Rohit";
console.log(n1 && n2);  // ""
console.log(n1 || n2);  // "Rohit"

let num1 = 0;
let num2 = 25;
console.log(num1 && num2);  // 0
console.log(num1 || num2);  // 25

// && : if the first value is falsy , it will return the first value
// if the first value true , it will return the second value


// || : if the first value is truthy , it will return the first value
// if the first value is falsy , it will return the second value

console.log(!true);   // false
console.log(2!=5 , 5!=5);  // true false