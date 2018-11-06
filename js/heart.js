var hartje = document.getElementById('hartje');


hartje.onclick = function () {
    if (hartje.src.includes('/img/hart2.jpg')) {
        hartje.src = '../img/hartje22.gif';
    } else
    if (hartje.src.includes('/img/hartje22.gif')) {
        hartje.src = '../img/hartje23.gif';
    } else
    if (hartje.src.includes('/img/hartje23.gif')) {
        hartje.src = '../img/hartje22.gif';
    }
    if (hartje.src.includes('/img/hartgevuld.jpg')) {
        hartje.src = '../img/hartje23.gif';
    }
};
