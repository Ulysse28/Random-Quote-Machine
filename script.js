/**
 * Random Quote Machine
 * JavaScript File
 * 11/09/2021
 * By Ulysse Valdenaire
 */
 let quote;
 let arrayQuote;

 $(document).ready(function(){
    getQuote();
    $('#new-quote').click(displayQuote);  
});

function getQuote(){
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      console.log(value.quotes[0].author);
      quote = value.quotes[0].quote
      console.log(quote);
      arrayQuote = value.quotes;
      console.log(arrayQuote);
      displayQuote();
    })
    .catch(function(err) {
      // Une erreur est survenue
    });
   
}

function getRandomQuote(quotes){
     let randomQuoteIndex = Math.floor(Math.random()*quotes.length);
     return quotes[randomQuoteIndex];
}

function displayQuote(){
    console.log(arrayQuote);
    let randomQuote = getRandomQuote(arrayQuote);
    console.log(randomQuote.quote);
    $('#text').text(randomQuote.quote);
    $('#author').text(randomQuote.author);
    console.log("qfd");
    console.log(arrayQuote.length);
}



