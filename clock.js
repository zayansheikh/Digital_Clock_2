let currentTime;
let date;
let time;
// const option = {weekday:'long', year:"numeric", month:"long", day:"long"};

setInterval(() => {
    currentTime = new Date();
    date = currentTime.toLocaleDateString();
    time = currentTime.getHours() + ":" +currentTime.getMinutes()+ ":" +currentTime.getSeconds();
    document.getElementById('span').innerHTML = time + " on " + date;
}, 1000);
