const pesoIngresado = document.getElementById("peso")
const alturaIngresada = document.getElementById("altura")
const resultadoIMC = document.getElementById("resultado")
const botonCalculate = document.getElementById("btnCalcular")

// funcion para hacer el cálculo según los datos ingresados
function calcularIMC() {
    const peso = Math.round(pesoIngresado.value) 
    const altura = Math.round(alturaIngresada.value) / 100
    const imc = (peso / Math.pow(altura, 2))
    resultadoIMC.textContent = imc.toFixed(2)
}
// cuando haga click en el boton calculate, el resultado del calculo IMC se debe mostrar en el span
botonCalculate.addEventListener("click", calcularIMC)

