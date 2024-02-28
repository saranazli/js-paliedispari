
/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

1. inizio con pari o dispari
2. creo una variabile in cui salvo l'input html
3. creo una variabile in cui salvo il valore dell'input
4. creo una variabile dove salvo il div in cui stamperò il numero pc
5. estraggo un numero random tramite funzione
6. salvo la funzione del numero random pc dentro la variabile in cui ho preso il div
7. stampo in html la variabile che contiene il div e il numero random
8. creo una variabile dove salvo il div in cui andrà il risultato della somma
9. con funzione controllo se è pari o dispari la somma 
10. con if metto le condizioni per vincere
11. stampo il vincitore
*/

const numUser = document.getElementById('num-user');
const userChoice = document.getElementById('user-choice');
const numPc = document.querySelector('.num-pc');
const esitoFinale = document.querySelector('.esito-finale');
const TakeUserN = document.querySelector ('.take');

function numeroPc (min, max) {

 return Math.ceil(Math.random () * 5 );

};

TakeUserN.addEventListener('click', function() {

  const numeroUser = parseInt(numUser.value);
  console.log(numeroUser);

  const userPoD = userChoice.value;
  
});

const numeroRanPC = numeroPc (1, 5);

  function somma (numeroUser, numeroPc) {

  somma = numeroUser +  numeroPc;


};
