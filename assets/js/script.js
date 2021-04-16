/* **Consegna**
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
**BONUS: (da fare solo se funziona tutto il resto)**
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */
var numero_limite;
var limite = difficolta(numero_limite);
var numeri_bomba = 16;
var tentativi = limite - numeri_bomba;
var arrNumeriGiocatore = [];
var arrBombeCpu = generatore_bombe(numeri_bomba, limite);
var punti_numero = 10;
var vittoriaSconfitta = false;

console.log("Numeri bomba: " + arrBombeCpu);

while(vittoriaSconfitta === false){
  
  var numeri_utente = parseInt(prompt("scegli un numero"));

  if(arrNumeriGiocatore.includes(numeri_utente) === true){
    alert("ATTENZIONE! il numero è già statoinserito");
  }else if(arrBombeCpu.includes(numeri_utente) === true){
    alert("HAI PERSO!\nHai trvato una bomba il tuo gioco è finito!");
    console.log("HAI PERSO!")
    console.log("Hai fatto n." + (arrNumeriGiocatore.length + 1) + " tentativi \nIl numero bomba trovato è " + numeri_utente + "\nIl tuo punteggio è " + (arrNumeriGiocatore.length * punti_numero));
    vittoriaSconfitta = true;
  }else if(numeri_utente > limite){
    alert("ATTENZIONE! il numero inserito è supoeriore al numero limite");
  }else if(numeri_utente < 1){
    alert("ATTENZONE! il numero inserito è minore di 1");
  }else if(isNaN(numeri_utente) === true){
    alert("ATTENZONE! non hai inserito un numero");
  }else{
    arrNumeriGiocatore.push(numeri_utente);
    if(arrNumeriGiocatore.length === tentativi){
      alert("HAI VINTO!!!");
      console.log((arrNumeriGiocatore.length* punti_numero) + " è il tuo punteggio")
      vittoriaSconfitta = true;
    }
  }
}


//FUNZIONI
function difficolta (num_limit){
  var richiesta = prompt("scegli la difficoltà facile, media ,difficile");

  while(richiesta == "facile" || richiesta =="media" || richiesta == "difficile"){
    
    if(richiesta == "facile"){
      return num_limit= 100;
    }else if (richiesta == "media"){
      return num_limit= 80;
    }else if(richiesta == "difficile"){
      return num_limit= 50
    }else{
      alert("ATTENZIONE! Non hai inserito correttamente la difficoltà")
    }
  }
}

function generatore_bombe (num, max){
  var arrbombe = [];
  while(arrbombe.length < num){
   var gen_bombe = random(max) ;
   if(arrbombe.includes(gen_bombe) === false){
    arrbombe.push(gen_bombe);
   }
  }
  return arrbombe;
}

function random (max){
  return Math.ceil(Math.random() * max);
}

