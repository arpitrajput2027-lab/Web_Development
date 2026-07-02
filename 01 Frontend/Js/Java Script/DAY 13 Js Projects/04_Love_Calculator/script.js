const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const boy = document.getElementById("Boy");
    const girl = document.getElementById("Girl");
    // console.log(boy.value + girl.value)
    const soulmates = boy.value + girl.value;
    let love_probabality = 0;

    for(let i=0;i<soulmates.length;i++){
        love_probabality+= soulmates.charCodeAt(i);
        // console.log(love_probabality);
    }

    let final_love_result = ((love_probabality%101) + ((boy.value.length*girl.value.length)*soulmates.length*(Math.random())))%101;
    console.log(final_love_result);
    document.getElementById("result").textContent = `Result : ${final_love_result.toFixed(2)}%`;
})