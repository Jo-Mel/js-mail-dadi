// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var mailingList = ['prova@gmail.com', 'example@gmail.com', 'nome.cognome@gmail.it', 'example-insert@gmail.com'];
var mailAdd = prompt('Inserisci qui la tua mail');

for (var i = 0; i < mailingList.length; i++) {
    if (mailAdd == mailingList[i]) {
        alert ('sei già registrato, vai avanti');
        break;
    }
    
    else {
        alert ('Non sei registrato. Fai il Sign In per accedere ai contenuti');
    }
}