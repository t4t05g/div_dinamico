function divAparece() {
    var visible = document.querySelectorAll(".divAparece");
  
    for (var i = 0; i < visible.length; i++) {
      var altoVentana = window.innerHeight;
      var bordeTop = visible[i].getBoundingClientRect().top;
      var elementoVisible = 150;
  
      if (bordeTop < altoVentana - elementoVisible) {
        visible[i].classList.add("active");
      } else {
        visible[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", divAparece);