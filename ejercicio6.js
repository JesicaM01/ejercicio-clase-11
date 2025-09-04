// Ejercicio 6: La tabla de multiplicar

// Le pido a la persona que escriba un número.
let numero = prompt("Escribe un número para ver su tabla:");

// Convierto lo que me dieron a un número de verdad.
numero = parseInt(numero);

// Ahora voy a crear la tabla usando un "robot" que cuenta.
// Empiezo en 1 y cuento hasta 10.
for (let i = 1; i <= 10; i++) {
  // En cada vuelta, hago la multiplicación.
  let resultado = numero * i;

  // Muestro el resultado en una lista para que se vea.
  // Por ejemplo, "5 x 3 = 15"
  console.log(numero + " x " + i + " = " + resultado);
}