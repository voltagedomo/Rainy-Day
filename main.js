// Rainy Day

// Setting up canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = innerWidth;
cnv.height = innerHeight;

// Global Variables
let rainDrop = document.getElementById("rainDrop");
let rainAmount = 2;
let rainX = 0;
let rainY = -8;
let frameCount = 0;
// Initialize random number for rainX
rainX1 = Math.floor(Math.random() * innerWidth);
rainX2 = Math.floor(Math.random() * innerWidth);

// Not allowing rainAmount to go below 0
if (rainAmount <= 0) {
    rainAmount = 2;
}

// Event Listeners
window.addEventListener("load", rain);
document.addEventListener("keydown", keydownHandler);

// Loop program to rainAmount
for (currentRain = 0; currentRain <= 98; currentRain++) {
    rain();
    console.log(currentRain);
}

// Main program: rain
requestAnimationFrame(rain);
function rain() {
    // insert droplets at the top of the screen
    ctx.drawImage(rainDrop, rainX1, rainY, 50, 25);
    ctx.drawImage(rainDrop, rainX2, rainY, 50, 25);
    
    // update y value to make rain fall
    rainY += 3;

    // if rain falls below screen reset at the top
    if (rainY >= 913) {
        rainY = -8
        // Create random number for rainX if it falls out of screen
        rainX1 = Math.floor(Math.random() * innerWidth);
        rainX2 = Math.floor(Math.random() * innerWidth);
    }

    requestAnimationFrame(rain);
    
}

function keydownHandler(event) {
    console.log(event.code);
    
    if (event.code == "ArrowUp") {
        rainAmount++;
        console.log(rainAmount);
    } else if (event.code == "ArrowDown") {
        rainAmount--;
        console.log(rainAmount);
    }
}
console.log(rainAmount);


// function keydownHandler(event) {
//     // console.log(event.code); // Shows pressed keys

//     if (event.code == "Space") {
//         // Draw Background
//         ctx.fillStyle = "white";
//         ctx.fillRect(0, 0, cnv.width, cnv.height)
//     } else if (event.code == "ArrowUp") {
//         size++;
//     } else if (event.code == "ArrowDown") {
//         size--;
//         if (size < 0) {
//             size = 0;
//         }
//     } else if (event.code == "Digit1") {
//         penColor = "red";
//     } else if (event.code == "Digit2") {
//         penColor = "green";
//     } else if (event.code == "Digit3") {
//         penColor = "blue";
//     }
// }