function counter(){
     let count = 0;
    function increment(){
        count++;
        return count;
    }
    return increment;
}

// console.log(count); -->> NOT accessed

const counter_seq = counter();
console.log(counter_seq())   // --->> Able to Funtional VAr
