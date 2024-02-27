const boton = document.querySelector("button")
const cajaColores = document.getElementById("cajaColores")
const texto = document.querySelector("h1")

// guardar el input en una variable 
const IngresoDeTexto = document.getElementById("ingresarTexto")

// funcion para que el texto que ingreso se muestre en la caja
function mostrarTexto(){
    texto.textContent = IngresoDeTexto.value
}

IngresoDeTexto.addEventListener("input", mostrarTexto)

//agregar otro  evento para que cuando haga click en el boton, se borre el texto
function borrarTexto(){
    texto.remove(IngresoDeTexto.value)
}
boton.addEventListener("click", borrarTexto)

