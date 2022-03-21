// Rainy Day

// Setting up canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = innerWidth;
cnv.height = innerHeight;

// Global Variables
let rainDrop = document.getElementById("rainDrop");
let rainAmount = 0;

// // Generate random x value for raindrops to spawn
// function generateRandom(min = 0, max = 400) {

//     // find diff
//     let difference = max - min;

//     // generate random number 
//     let rand = Math.random();

//     // multiply with difference 
//     rand = Math.floor( rand * difference);

//     // add with min value 
//     rand = rand + min;

//     return rand;
// }

// Main Program Rain
function rain() {
    //insert droplets at the top of the screen
    ctx.drawImage(rainDrop, 100, 100);
}