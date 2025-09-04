// Ejercicio 8: Encuentra los múltiplos de un número

// Le pido al usuario que escriba un número.
let numero = prompt("Escribe un número para encontrar sus múltiplos:");

// Convierto lo que me dieron a un número de verdad.
numero = parseInt(numero);

// Ahora voy a buscar los múltiplos desde el 1 hasta el 100.
console.log("Los múltiplos de " + numero + " son:");

// Uso un "robot" que cuenta del 1 al 100.
for (let i = 1; i <= 100; i++) {
  // Reviso si el número actual es un múltiplo.
  // Si el número actual dividido por el que me dieron no tiene nada que sobra (el residuo es 0), es un múltiplo.
  if (i % numero === 0) {
    // Si es un múltiplo, lo muestro en la consola.
    console.log(i);
  }
}