// 1) null is loosely equal to undefined only
console.log(null==undefined);   // true
console.log(null===undefined);  // false
console.log(null==0);           // false
console.log(null=="");          // false
console.log(null==false);       // false
console.log(null==true);        // false
console.log(null==NaN);         // false

// >= , =< , > ,< ( null -> number(0)  , undefined -> Nan)

console.log(null>=0);         // true
console.log(null>0);          // false
console.log(null<=0);         // true
console.log(null<0);          // false
console.log(undefined>0);     // false
console.log(null< undefined);  // false

console.log("Rohit">"Mohit");    // true  (R>M)

// jab bhi number se koi String or Boolean compare karte hai
// to String or Boolean ko Number me convert kar dete hai
console.log(10<="10");    // true
console.log(10<=true);    // false
// agar koi bhi dataType apas mei compare honge ,to sabse pahle vo number mei convert honge
console.log(null<="");   // true  (null->0 , ""->0)



console.log(NaN==NaN);   // false
