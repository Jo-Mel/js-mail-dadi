// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// var mailAdd = prompt('Inserisci qui la tua mail');
// var mailingList = ['prova@gmail.com', 'example@gmail.com', 'nome.cognome@gmail.it', 'example-insert@gmail.com'];
// var trovata = false;


// for (var i = 0; i < mailingList.length; i++) {
//     if (mailAdd == mailingList[i]) {
//         trovata = true;
//         break;
//     }
// }

// if (trovata == true) {
//     alert ('Mail riconosciuta. Vai avanti');
// } else {
//     alert ('Mail non trovata');
// }


// Gioco dei dadi

// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var mioDado = Math.floor((Math.random()*6) + 1);
var dadoPc = Math.floor((Math.random()*6) + 1);
var risultato;

if (mioDado > dadoPc) {
    risultato = 'Hai vinto!';
} else if (mioDado < dadoPc) {
    risultato = 'Hai perso :(';
} else {
    risultato = 'Pareggio';
}

document.getElementById('winner').innerHTML = risultato;
document.getElementById('player').innerHTML = 'Il tuo numero ' + mioDado;
document.getElementById('pc').innerHTML = 'Numero pc ' + dadoPc;
