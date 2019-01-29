//Like een verhaal

// Roep de button aan waarvan ik de class wil veranderen
var hartje = document.querySelectorAll('article > button');
//test
console.log("hartje?",hartje)

//Verander alle Classes van de button
for (var i = 0; i < hartje.length; i++) {
    hartje[i].addEventListener("click", function() {  this.classList.toggle('hartje2');
    });
}

