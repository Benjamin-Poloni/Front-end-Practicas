
export const cards = []
import { cardGenerator } from "./eventCardGenerator.js";

document.addEventListener('DOMContentLoaded', ()=>{
const addCardButton = document.getElementById("addCardButton")

let nombre
let place
let fecha


addCardButton.addEventListener('click', ()=>{
    nombre = document.getElementById("cardName").value
    place = document.getElementById("cardLocation").value
    fecha = document.getElementById("cardTime").value
    

    const cardElement = {
        nombre :    nombre,
        place :  place,
        fecha :      fecha
    }

    cards.push(cardElement)
    cardGenerator()
    console.log(cards)
    
    
});
});





