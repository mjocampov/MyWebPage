"use strict";

window.onload = function() {
  document.getElementById("contactme").style.display = "none";
};

function aparecer() {
  var bloque = document.getElementById("contactme");
  if (bloque.style.display == "none") {
    bloque.style.display = "block";
  } else {
    bloque.style.display = "none";
  }
};

function randomplease() {
  var aleat=Math.floor(Math.random() * 3);
  if (aleat==0) {
    window.open('https://twitter.com/Francis02847171', '_blank');
  }
  else if (aleat==1) {
    window.open('https://www.facebook.com/mkllister', '_blank');
  }
  else{
    window.open('https://www.instagram.com/franciscomcallister/', '_blank');
  }
};
