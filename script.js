// Al nostro via il computer genera 5 numeri
// Vengono mostrati per 5 secondi
// L'utente deve indovinare i 5 numeri
// C'è un attesa di 5 secondi perchè il computer sta analizzando mostrando "CALCOLO IN CORSO"
// Vengono mostrati i numeri indovinati

$(document).ready(function(){

  reset();

  //array vuoto da riempire con i numeri random generati dal programma
  var arrRandom = [];
  var arrUserNumbers = [];
  var arrResult = [];

  $('#btn-start').click(function(){

    $(this).hide();
    
    while(arrRandom.length < 5){
      arrRandom.push(numberGenerator(1, 100));
    }
    
    console.log(arrRandom);

    printOutput(arrRandom.toString(), "h1");

    setTimeout(function(){

      printOutput("Indovina i 5 numeri!", "h1");
      $("#console").show();

      $('#btn-send').click(function(){
        
        arrUserNumbers.push($('#input').val());
        $('#input').val("");

        if(arrUserNumbers.length === 5){
          
        }
      })

      
  
    }, 1000);

    
    


  })



})


function reset(){
  printOutput("Sei pronto? Clicca sul via", "h1");
  $('#btn-start').show();
  $('#console').hide();
};

function printOutput(text, target){
  $(target).text(text);
}

function numberGenerator(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}