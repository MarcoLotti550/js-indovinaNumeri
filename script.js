const numeriTotali = 5;
const numeriRandom = [];

while(numeriRandom.length < numeriTotali){
    const nuovoNumero = getrandomnumber(1,99);
    if (!numeriRandom.includes(nuovoNumero)) {
        numeriRandom.push(nuovoNumero);
    }

}

document.getElementById('visualizza').innerHTML = numeriRandom;

setTimeout(chediUtente, 2000);

setTimeout(cancellaNumeri, 2500);

function cancellaNumeri() {
    document.getElementById('visualizza').innerHTML = "";
}

function chediUtente() {

    const numeriUtente = [];

    while(numeriUtente.length < numeriTotali){
        const nuovoNumero = parseInt(prompt("inserisci il numero"));
        if(!numeriUtente.includes(nuovoNumero)){
            numeriUtente.push(nuovoNumero);
        }  
    }
}

function verificaNumeri(arrayUtente, arrayNumeri) {
    const numeriIndovinati = [];

    for (let i = 0; i < arrayUtente.length; i++) {
        if (arrayNumeri.includes(arrayUtente[i])) {
            numeriIndovinati.push(arrayUtente[i]);
        }
    }
    
    return numeriIndovinati;
}

function getrandomnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

