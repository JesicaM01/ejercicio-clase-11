// Ejercicio 3: ¿Sabes contar?

// Pido a la persona que escriba un número positivo.
let numeroFinal = prompt("Escribe un número positivo, por favor:");

// Convierto lo que me dio la persona a un número de verdad.
numeroFinal = parseFloat(numeroFinal);

// Ahora voy a contar.
// Empiezo en 1 (let i = 1;).
// Sigo contando mientras mi número sea menor o igual al número que me dieron (i <= numeroFinal;).
// En cada vuelta, le sumo 1 a mi número (i++).
for (let i = 1; i <= numeroFinal; i++) {
  // Muestro el número actual en la consola.
  console.log(i);
}