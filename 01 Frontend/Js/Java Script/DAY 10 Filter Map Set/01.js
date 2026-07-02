const arr = [ 21, 4.6, "Arpit"];


// For Each
arr.forEach((number ,index , arr)=>{
    console.log(number,index,arr);
})


// Filter

const arr2 = [2,54,24,76,23,75,24,15,27];
const filtered_arr = arr2.filter((number) => number>60)
console.log(filtered_arr)



// Mapping

const arr3 = [2,5,7,1,9];
const mapped_arr = arr3.map((number) => number*2)
console.log(mapped_arr)


// Set -->> Unique Value

const arr4 = [12, 43, 112 ,10, 12, 21,433,43,10,];

const arr5 = new Set(arr4);
console.log(arr5)