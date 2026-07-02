//Typrcasting
let z ="25";
let x = Number(z);
console.log(typeof z ,typeof x , x*2,z*2);


let m = 10;
let n ="10";
console.log(m==n);   // value
console.log(m===n);  // value + datatype  --> Firstly Compare the DT then Compare b/w Values


// String to Number
let p ="12mc";
let q = Number(p);
console.log(typeof q,q);  // q -> NaN

// Number to String
let a =120;
let b = String(a);
console.log(typeof b ,b);  


// Boolean to Number
console.log(Number(true));   // 1
console.log(Number(false));  // 0
console.log(Number(null));   // 0
console.log(Number(undefined));   // NaN



// Issue in CS
let s = 0.2;
let t = 0.1;
let sum = s+t;
console.log(sum , sum==0.3); // false