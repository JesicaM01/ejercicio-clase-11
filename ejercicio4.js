// Ejercicio 4: ¿Es par o impar?

// Le pido un número a la persona y lo guardo.
let numero = prompt("Escribe un número para saber si es par o impar:");

// Convierto el texto que me dieron a un número de verdad.
numero = parseInt(numero);

// Ahora reviso si el número se puede dividir en dos de forma exacta.
// El símbolo % se llama "módulo" y me da lo que sobra de una división.
// Si el número % 2 da 0, significa que no sobró nada, por lo que es un número par.
if (numero % 2 === 0) {
  alert("El número " + numero + " es un número par. Los números pares son aquellos que se pueden dividir por 2 de manera exacta.");
} else {
  alert("El número " + numero + " es un número impar. Los números impares son aquellos que al dividirlos por 2, siempre tienen un residuo de 1.");
}""