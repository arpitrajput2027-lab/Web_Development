let a =12;
const b = 34;


// Global Scope -->> Accesible to everywhere
// Functional -->> Accesible only in the Funtion
// Block Scope --> Accesible only to the Block


// * var -->> block se bhar bhi access , but funtional and global sahi 
console.log(a);

if(1){
    let c = 100;
    console.log(c);
}
// console.log(c);

function greet(){
        console.log("GM");
    }
greet();




// -->
 let global = 50;
  function greet02(){
    let global = 45;  // Overrides global var by blocked var
    console.log(global)
  }

  greet02();