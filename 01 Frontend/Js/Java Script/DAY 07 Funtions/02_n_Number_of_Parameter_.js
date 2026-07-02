
// function sum(n1 , n2 ,n3 =0,n4 =0){
//     console.log(" Sum is : ", n1+n2+n3+n4);
// }
// sum(2,3);
// sum(2,8,6);
// sum(2,9,7,8);

// n Number of Parameter Pass Karne ke Liye :
// Rest Operator -->>>
function sum(...num){
    let sum =0;
    for(let n of num){
        sum+=n;
    }
    console.log(" Sum is : ", sum);
}
sum(2,3);
sum(2,8,6);
sum(2,9,7,8);
