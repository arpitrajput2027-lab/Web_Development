const clock = document.getElementById("time");
setInterval(() => {
    const time = new Date();
    clock.textContent = time.toLocaleTimeString();
}, 1000)

// const time = new Date();
// const clock = document.getElementById("time");
// clock.textContent = time.toLocaleTimeString();