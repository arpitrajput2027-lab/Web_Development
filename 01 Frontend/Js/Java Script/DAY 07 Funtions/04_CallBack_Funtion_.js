
function intro(){
    console.log("Hi , I am Apit Verma..")
}

function greeting(callback){
    console.log("Good Morning , Everyone..");
    callback();
    console.log("I am from Uttar Pradesh , Lucknow..")
}

greeting(intro);
