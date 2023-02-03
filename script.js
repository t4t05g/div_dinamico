window.addEventListener('scroll', aparece_div() );

var margenTop1 = 25;
var margenTop2 = 25;
var margenTop3 = 25;
var margenTop4 = 25;


function aparece_div() {
  
    divCapa = document.getElementById("div2");
    divCapa.style.marginTop = margenTop + "%";
}