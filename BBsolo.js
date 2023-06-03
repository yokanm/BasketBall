let homeCl= document.getElementById("home-cl")
let guestCl= document.getElementById("guest-cl")

let homeScore=0
let guestScore =0
/* HOME SCORE BOARD*/
function home1(){
    homeScore +=1
    homeCl.textContent= homeScore
}

function home2(){
    homeScore+=2
    homeCl.textContent= homeScore
}

function home3(){
    homeScore+=3
    homeCl.textContent= homeScore
}

/* GUEST SCORE BOARD*/
function away1(){
    guestScore +=1
    guestCl.textContent= guestScore
}

function away2(){
    guestScore +=2
    guestCl.textContent= guestScore
}

function away3(){
    guestScore +=3
    guestCl.textContent= guestScore
}