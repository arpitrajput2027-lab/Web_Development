// Method - 01 
function sum(n1,n2){
    console.log(" Sum is : ", n1+n2);
}
sum(2,3);


// Method - 02
const addNum = function(num1,num2){
    console.log("Sum is :" , num1 + num2);
}
addNum(9,6);


// Method - 03  - Arrow Funtion

// 01
const product = (num1,num2)=>{
    console.log("Product  is :" , num1 * num2);
}
// 02
// agar keval kuch return karna ho to ..Direct ese bhi likh sakte hai -->>
const product1 = (n1,n2)=> n1*n2;  

// 03
const square = num=> num*num;  // if only 1 parameter -->> remove ( )


product(6,4);
console.log(product1(6,9));
console.log(square(6));

// Object return from the Funtion -->> Object ko () mein bnd krna 
const userInfo = () => ({name :"Nisha", rollN : 2421106});
console.log(userInfo());


// Method - 03  - Immediate Invoke Funtion Expression

(function greeting(){
    console.log("Hi,This is Immediate Invoke Funtion Expression which invoke Automatically.");
})();
