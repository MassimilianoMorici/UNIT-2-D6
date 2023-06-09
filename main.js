//cambio titolo
const vecchioNome = `MAX Shop`
const modH1 = function() {
let nuovoNome = document.querySelector(`h1`)
nuovoNome.innerText === vecchioNome ? nuovoNome.innerText = `SHOP Max` : nuovoNome.innerText = vecchioNome

}

//cambio background
const cambiaBackground = function() {
    let body = document.querySelector(`body`)
    body.classList.contains(`gray`) ? body.classList.remove(`gray`).add(`white`) : body.classList.add(`gray`)
    
}

//cambio indirizzo
const vecchioIndirizzo = `Via Torino 23, Torino`
const cambiaIndirizzo = function() {
    let nuovoIndirizzo = document.getElementById(`indirizzo`)
    nuovoIndirizzo.innerText === vecchioIndirizzo ? nuovoIndirizzo.innerText = `Via Roma 32, Roma` : nuovoIndirizzo.innerText = vecchioIndirizzo
}

//cambio link 

/*   CON ----> FOR OF
const cambiaLink = function() {
    let links = document.querySelectorAll(`a`)
    for (link of links) {
        link.classList.add(`amazonLink`)
    }
}
*/
// CON ----> FOR EACH
const cambiaLink = function() {
    let links = document.querySelectorAll(`a`)
    links.forEach(elemento => {
        elemento.classList.toggle(`amazonLink`)
    });
}


//cambio img
const cambiaImg = function() {
    let immagine = document.querySelectorAll(`img`)
    immagine.forEach(elemento => {
        elemento.classList.toggle(`invisibile`)
    });
}

//cambio colore prezzo

const getRandomColor = function(){
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    return `rgb(${red},${green},${blue})`
}

const cambiaColore = function() {
    let prezzo = document.getElementsByClassName(`price`)
    for (price of prezzo) {
        price.style.color = getRandomColor()
    } 
} 

// HO PROVATO AD USARE IL FOR EACH MA NON FUNZIONA....forse perchè si occuperà automaticamente di terminare il ciclo quando tutti gli elementi sono stati processati ???? 
