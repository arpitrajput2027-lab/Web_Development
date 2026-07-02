const display_timer = document.getElementById("time");

setInterval(() => {
    const current_time = Date.now()
    const birthday_time = new Date(2026, 8, 1).getTime();

    let timer = birthday_time - current_time;

    let day = Math.floor(timer / (1000 * 60 * 60 * 24));
    timer %= (1000 * 60 * 60 * 24);

    let hour = Math.floor(timer / (1000 * 60 * 60));
    timer %= (1000 * 60 * 60);

    let minute = Math.floor(timer / (1000 * 60));
    timer %= (1000 * 60);

    let second = Math.floor(timer / (1000));
    timer %= (1000);

    let millisecond = timer;
    
    display_timer.textContent = ` ${day} DAY : ${hour} HOUR : ${minute} Minute : ${second} Seconds : ${millisecond} MiliSecond `;
}, 1);

//     display_timer.textContent =
//     `${day} DAY ${String(hour).padStart(2,"0")} : 
//      ${String(minute).padStart(2,"0")} : 
//      ${String(second).padStart(2,"0")} :
//      ${String(millisecond).padStart(3,"0")}`;

// }, 10);