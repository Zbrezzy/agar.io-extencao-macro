// ==UserScript==
// @name         Agar.io Macro - Eject/Split
// @version      0.1
// @description  Um macro para agar.io, para dar mais agilidade na hora de jogar.
// @author       ksx1777
// @match        http://agar.io/*
// @match        https://agar.io/*
// @grant        none
// ==/UserScript==

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);

var ejectMass = false;
var speed = 25; //ms

/* ASCII KEYs */
const W = 87;
const X = 88;
const C = 67;
const V = 86;
const SPACEBAR = 32;

function keydown(event) {
    if (event.keyCode == W && ejectMass === false) {
        ejectMass = true;
        setTimeout(eject, speed);
    } if (event.keyCode == X) {
        split();
        setTimeout(split, speed);
    } if (event.keyCode == C) {
        split();
        setTimeout(split, speed);
        setTimeout(split, speed*2);
    } if (event.keyCode == V) {
        split();
        setTimeout(split, speed);
        setTimeout(split, speed*2);
        setTimeout(split, speed*3);
     }

}

function keyup(event) {
    if (event.keyCode == W) {
        ejectMass = false;
    }
}

function eject() {
    if (ejectMass) {
        window.onkeydown({keyCode: W});
        window.onkeyup({keyCode: W});
        setTimeout(eject, speed);
    }
}

function split() {
    $("body").trigger($.Event("keydown", { keyCode: SPACEBAR}));
    $("body").trigger($.Event("keyup", { keyCode: SPACEBAR})); 
}
