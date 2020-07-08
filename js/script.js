// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var mailAdd = prompt('Inserisci qui la tua mail');
var mailingList = ['prova@gmail.com', 'example@gmail.com', 'nome.cognome@gmail.it', 'example-insert@gmail.com'];
var trovata = false;


for (var i = 0; i < mailingList.length; i++) {
    if (mailAdd == mailingList[i]) {
        trovata = true;
        break;
    }
}

if (trovata == true) {
    alert ('Mail riconosciuta. Vai avanti');
} else {
    alert ('Mail non trovata');
}