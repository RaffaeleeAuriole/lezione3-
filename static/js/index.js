// Select necessary elements
const startButton = document.querySelector("#button");
const tempoDisplay = document.querySelector("#tempo");
const risultatoDisplay = document.querySelector("#risultato");

let startTime, endTime;
let semaforoVerde = false;

// Select light elements individually
let l1 = document.querySelector("#luce1");
let l2 = document.querySelector("#luce2");
let l3 = document.querySelector("#luce3");
let l4 = document.querySelector("#luce4");
let l5 = document.querySelector("#luce5");
let l6 = document.querySelector("#luce6");
let l7 = document.querySelector("#luce7");
let l8 = document.querySelector("#luce8");
let l9 = document.querySelector("#luce9");
let l10 = document.querySelector("#luce10");
let l11 = document.querySelector("#luce11");
let l12 = document.querySelector("#luce12");
let l13 = document.querySelector("#luce13");
let l14 = document.querySelector("#luce14");
let l15 = document.querySelector("#luce15");
let l16 = document.querySelector("#luce16");
let l17 = document.querySelector("#luce17");
let l18 = document.querySelector("#luce18");
let l19 = document.querySelector("#luce19");
let l20 = document.querySelector("#luce20");

let LuciRosse1 = [l1, l2, l3, l4, l5];
let LuciRosse2 = [l6, l7, l8, l9, l10];
let LuciRosse3 = [l11, l12, l13, l14, l15];
let LuciVerdi = [l16, l17, l18, l19, l20];

// Function to turn on the red lights
function accendiLuciRosse() {
    for (let i = 0; i < LuciRosse1.length; i++) {
        setTimeout(function () {
            LuciRosse1[i].classList.remove("gray");
            LuciRosse1[i].classList.add("red");
        }, i * 1000);
    }
    for (let i = 0; i < LuciRosse2.length; i++) {
        setTimeout(function () {
            LuciRosse2[i].classList.remove("gray");
            LuciRosse2[i].classList.add("red");
        }, i * 2000);
    }
    for (let i = 0; i < LuciRosse3.length; i++) {
        setTimeout(function () {
            LuciRosse3[i].classList.remove("gray");
            LuciRosse3[i].classList.add("red");
        }, i * 3000);
    }
    for (let i = 0; i < LuciVerdi.length; i++) {
        setTimeout(function () {
            LuciVerdi[i].classList.remove("gray");
            LuciVerdi[i].classList.add("green");
        }, i * 4000);
    }
}

// Function to turn on the green light after a random delay
function accendiLuceVerde() {
    const tempoCasuale = Math.floor(Math.random() * 2000) + 1000; // Between 1 and 3 seconds

    setTimeout(function () {
        for (let i = 0; i < LuciRosse1.length; i++) {
            LuciRosse1[i].classList.remove("red");
            LuciRosse1[i].classList.add("gray");
        }
        for (let i = 0; i < LuciRosse2.length; i++) {
            LuciRosse2[i].classList.remove("red");
            LuciRosse2[i].classList.add("gray");
        }
        for (let i = 0; i < LuciRosse3.length; i++) {
            LuciRosse3[i].classList.remove("red");
            LuciRosse3[i].classList.add("gray");
        }

        LuciVerdi[0].classList.remove("gray");
        LuciVerdi[0].classList.add("green");

        semaforoVerde = true;
        startTime = new Date().getTime();
    }, tempoCasuale);
}

// Function to start the game
function startGame() {
    risultatoDisplay.innerHTML = "result: -,----";
    tempoDisplay.innerHTML = "0,0000";
    semaforoVerde = false;

    for (let i = 0; i < LuciRosse1.length; i++) {
        LuciRosse1[i].classList.remove("red", "green");
        LuciRosse1[i].classList.add("gray");
    }
    for (let i = 0; i < LuciRosse2.length; i++) {
        LuciRosse2[i].classList.remove("red", "green");
        LuciRosse2[i].classList.add("gray");
    }
    for (let i = 0; i < LuciRosse3.length; i++) {
        LuciRosse3[i].classList.remove("red", "green");
        LuciRosse3[i].classList.add("gray");
    }
    for (let i = 0; i < LuciVerdi.length; i++) {
        LuciVerdi[i].classList.remove("red", "green");
        LuciVerdi[i].classList.add("gray");
    }

    accendiLuciRosse();
    accendiLuceVerde();
}

// Function to record reaction time
function registraTempoDiReazione() {
    if (!startTime) {
        return; // Ignore clicks before the game starts
    }

    if (semaforoVerde) {
        endTime = new Date().getTime();
        const tempoDiReazione = (endTime - startTime) / 1000;
        const tempoReazioneString = (Math.floor(tempoDiReazione * 10000) / 10000).toString();
        let tempoReazioneDisplay = "";

        for (let i = 0; i < tempoReazioneString.length; i++) {
            if (tempoReazioneString[i] === '.') {
                tempoReazioneDisplay += ',';
            } else {
                tempoReazioneDisplay += tempoReazioneString[i];
            }
        }

        tempoDisplay.innerHTML = tempoReazioneDisplay;
        risultatoDisplay.innerHTML = `result: ${tempoReazioneDisplay} s`;
    } else {
        risultatoDisplay.innerHTML = "Partenza anticipata!";
    }
}

// Event listener for start button
startButton.addEventListener("click", startGame);

// Event listener to record reaction time
document.body.addEventListener("click", registraTempoDiReazione);
