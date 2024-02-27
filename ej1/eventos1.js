// Llamar al boton 
const boton = document.querySelector("button")
const cajaColores = document.getElementById("cajaColores")
const texto = document.querySelector("h1")

// funcion para que cambie de color (class blue) y cambie el texto a azul
function cambiarColor() {
    cajaColores.classList.add('bg-blue-600')
    texto.innerHTML = 'AZUL'
}

// al hacer click en el boton "change", el background color del cuadrado debe cambiar a AZUL
boton.addEventListener("click", cambiarColor)







