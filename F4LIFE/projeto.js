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
  console.log("sfr")
}

function buscar(event) {
  const cidade = document.getElementById("cidade")
  const quartos = document.getElementById("quartos")
  cidade.value = 0
  quartos.value = 0
}