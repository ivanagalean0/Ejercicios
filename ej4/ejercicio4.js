const montoLocalIngresado = document.getElementById("montoLocal")
const resultadoDolares = document.getElementById("resultadoEnDolares")
const botonConvertir = document.querySelector("button")
const botonBorrar = document.getElementById("btnBorrar")

// funcion para que calcule el monto y el valor del dólar
function CalculoConversor(){
    const montoLocal = parseFloat(montoLocalIngresado.value)
    const tasaDeCambio = 500
    const montoEnDolares = montoLocal / tasaDeCambio
    resultadoDolares.textContent = `${montoEnDolares} DÓLARES.`
}
//cuando clickea el boton convert se muestra el resultado en el span
botonConvertir.addEventListener("click", CalculoConversor)

//cuando clickea el boton borrar, se debe borrar todo
botonBorrar.addEventListener("click", () => {
    montoLocalIngresado.remove(montoLocalIngresado.value)
    resultadoDolares.remove(resultadoDolares.value)
})


