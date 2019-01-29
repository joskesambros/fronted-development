// de A in de form aanroepen
var loading = document.querySelector('form>a');

//id aanroepen. ID gekozen omdat het 1 individueel object is op de website
var loaderding = document.querySelector('#loader');

// Transitie op de login form aanroepen
var LoginVormpie = document.querySelector('form');



//Volgende pagina aanroepen
function Nextpage(){
    window.location.href = 'index2.html';
}

// Wanneer er op de loading button geklikt is
loading.addEventListener("click", function(){

    //Verander de class van de a in de form
    this.classList.add('loginbutton2')

    //De loader aanroepen nadat er op de login button geklikt is
    loaderding.classList.add('loader');

    //Transitie die gebeurt nadat er geklikt is
    LoginVormpie.classList.add('transition2');

    //na 2 seconde veranderd de pagina naar de index2.html pagina
    window.setTimeout(Nextpage, 2000);
   });

