function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function enviar(event) {
  const email = document.getElementById("email")
  const telefone = document.getElementById("telefone")
  email.value = ""
  telefone.value = ""
}

function buscar(event) {
  const cidade = document.getElementById("cidade")
  const quartos = document.getElementById("quartos")
  cidade.value = 0
  quartos.value = 0
}

function showMenu(){
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open")
    document.querySelector(".ICON").src="./imagens e icones/menu.svg";
  } else{
    menuMobile.classList.add("open");
    document.querySelector(".ICON").src="./imagens e icones/close.svg";
  }
}

//slider images of the left
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//slider images of the right
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x2 = document.getElementsByClassName("mySlides2");
  if (n > x2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x2.length} ;
  for (i = 0; i < x2.length; i++) {
    x2[i].style.display = "none";
  }
  x2[slideIndex2-1].style.display = "block";
}