let arr = [23,32,45,64]; 

let arr2 = arr;
arr2.push(26);  // also change in Original Array --> Pass by referencef
console.log(arr);
//Slice
console.log(arr.slice(1,3)); // 1 to 2

// Splice --> removed from Array
console.log(arr.splice(1,3,"Add this part")); // 1 to 3
console.log(arr);  // After splicing spliced part removed