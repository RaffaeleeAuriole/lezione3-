//game - start of section
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let timer = document.querySelector("#tempo");

function getRandomInt(min = 2000, max = 3000) {
    let number = Math.random();
    number = number * (max - min) + min;
    return Math.floor(number);
}

let redDelay = getRandomInt(1000, 3000);
let greenDelay = getRandomInt(2000, 3000);

function changeLights(lightIds, color) {
    lightIds.forEach(id => {
        let light = document.getElementById(id);
        if (light) {
            light.classList.remove("gray");
            light.classList.add(color);
        }
    });
}

let start;

function startGame() {
    let redLights1 = ["luce1", "luce2", "luce3", "luce4", "luce5"];
    let redLights2 = ["luce6", "luce7", "luce8", "luce9", "luce10"];
    let redLights3 = ["luce11", "luce12", "luce13", "luce14", "luce15"];
    let greenLights = ["luce16", "luce17", "luce18", "luce19", "luce20"];

    startBtn.classList.add("hidden")
    stopBtn.classList.remove("hidden")

    setTimeout(() => {
        changeLights(redLights1, "red");
    }, redDelay);

    setTimeout(() => {
        changeLights(redLights2, "red");
    }, redDelay * 2);

    setTimeout(() => {
        changeLights(redLights3, "red");
    }, redDelay * 3);

    setTimeout(() => {
        changeLights(greenLights, "green");
        start = new Date();
    }, greenDelay * 4);
}

function calcTimeDiff(){
    let end = new Date();

    let diff = end - start;

    if (diff <= 0) {
        console.log('You clicked too soon');

    }
    else if (diff > 0){
        timer.innerHTML = diff + "ms";
        timer.classList.remove("timer-hidden")

    }
}

startBtn.addEventListener("click", startGame);
stopBtn.addEventListener("click", calcTimeDiff);