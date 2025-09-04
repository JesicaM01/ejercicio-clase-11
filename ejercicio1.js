// Ejercicio 1: ¿Positivo, negativo o cero?

// Primero, le pido a la persona que escriba un número.
let numeroIngresado = prompt("Escribe un número para saber si es positivo, negativo o cero:");

// Convierto lo que me dio a un número de verdad.
let numero = parseFloat(numeroIngresado);

// Ahora reviso qué tipo de número es con un if y un else.
if (numero > 0) {
  alert("El número que escribiste es positivo.");
} else if (numero < 0) {
  alert("El número que escribiste es negativo.");
} else {
  alert("El número que escribiste es cero.");
}
