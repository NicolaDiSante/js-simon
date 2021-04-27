


// CREO VARIABILI GLOBALI DA POTER UTILIZZARE SEMPRE
// Creo gli array vuoti da poter riempire in seguito
// creo un limite massimo di numeri da produrre
// creo una variabile per l'attesa dei secondi

var arrRandom, arrUser, arrResult;
var limit = 5;
var secAttesa = 2;


$(document).ready(function(){

  // INIZIALIZZO L'APPLICAZIONE
  reset();

  // FACCIO GENERARE L'ARRAY RANDOM CON UN CICLO WHILE
  // FINO A QUANDO L'ARRAY RANDOM NON RAGGIUNGE LA DIMENSIONE LIMIT DEVO CONTINUARE A BUTTARE DENTRO NUMERI
  
 
 
  //CREO 3 OPZIONI PER TUTTI I CLICK SUI BOTTONI
  //INIZIO DEL GIOCO

  $('#start').click(function(){

    while(arrRandom.length < limit){
      var nr = getNumberGenerator(1, 100);
      // Se il numero non è presente lo inserisco nell'array
      //Se non è vero che arrRandom include nr allora lo mando dentro all'arrayRandom 
      if(!arrRandom.includes(nr)) arrRandom.push(nr);
    } 

    //MOSTRO AL DISPLAY I NUMERI RANDOM PER TOT SECONDI
    printDisplay("I numeri generati sono: " + arrRandom.toString());
    $('#start').hide();


    //TERMINO LA VISUALIZZAZIONE DOPO I SECONDI E INIZIA IL GIOCO
    // APPARE LA SCRITTA DI INSERIMENTO NUMERI
    // FACCIO APPARIRE LA MIA CONSOLE
    setTimeout(function(){
      printDisplay('Inserisci ' + limit + ' numeri.');
      $('#console').show();
    }, secAttesa * 1000);
    
  });


  // INSERISCO I NUMERI
  $('#send-number').click(function(){


    // sul click di send number devo leggere il valore dell'input
    // Devo inserire suddetto valore dentro all'array user
    
    if(arrUser.length < limit){

      if(arrUser.includes($('input').val())) {
        printDisplay("Attenzione, numero già inserito!");
      }else{
        arrUser.push($('input').val());
        printDisplay("I numeri inseriti sono: " + arrUser.toString());
      }

    }
    if(arrUser.length === limit){

       //faccio un ciclo for of su arr user per prelevare num
       for(var num of arrUser){
        //usa sempre typeOf() per capire di cosa stai parlando
        // se num è incluso in arrRandom pushalo dentro ad arrResult
        if(arrRandom.includes(parseInt(num))){
          arrResult.push(num)
        }
      }

      //Quando ho inserito tutti i numeri aspetto 1 secondo e faccio sparire la console
      // Per mostrare anche l'ultimo numero inserito aspetto tot secondi a scrivere Risultato in elaborazione
      // Dopo 2 secondi da Risultato in elabroazione mostro Il risultato è: 

      setTimeout(function(){

        printDisplay("Risultato in elaborazione . . . .");
        $('#console').hide();

      }, 1000);

      setTimeout(function(){

        
        if(arrResult.length == 0){
          printDisplay("Il risultato è: 0");
        }else{
          printDisplay("Hai indovinato questi numeri: " + arrResult.toString());
        }
        $('#restart').show();

      }, 2000);
      
    }
    
    $('input').val(" ");
    $('input').focus();


  });



  $('#restart').click(function(){
    reset();
  });


});


//Creo una funzoone che resetti tutto
// Ci metto dentro gli array vuoti in modo da poter gestire sempre il punto di partenza
// Di conseguenza azzero tutti i dati e visualizzo la situazione di inizio

function reset(){
  limit = parseInt(prompt('scegli quanti numeri inserire'));
  arrRandom = [];
  arrUser = [];
  arrResult = [];
  printDisplay('Per iniziare a giocare clicca su VIA!');
  $('#display').show();
  $('#start').show();
  $('#restart').hide();
  $('#console').hide();
}

//Creo una funzione che scriva
// Stamperà un testo nel display

function printDisplay(text){
  $('#display').text(text);
}


//Creo generatore di numeri random
//Accetta i parametri minimo e max
function getNumberGenerator(min, max){
  return Math.floor(Math.random() * (max - min) + 1 + min);
}