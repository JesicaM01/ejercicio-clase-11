// Ejercicio 5: Encuentra los números pares entre dos valores

// Pido dos números a la persona, uno para empezar y otro para terminar.
let inicio = prompt("Escribe un número para empezar:");
let fin = prompt("Escribe un número para terminar:");

// Convierto lo que me dieron a números de verdad.
inicio = parseInt(inicio);
fin = parseInt(fin);

// Primero, reviso si el número de inicio es más grande que el de fin.
if (inicio > fin) {
  alert("Los números no son válidos. El primer número debe ser menor que el segundo.");
} else {
  // Si los números son correctos, empiezo a buscar los pares.
  // Muestro un mensaje en la consola para avisar que voy a empezar.
  console.log("Estos son los números pares:");

  // Uso un "robot" que va a ir número por número.
  // Empieza en el 'inicio' y se detiene cuando llega al 'fin'.
  for (let i = inicio; i <= fin; i++) {
    // Reviso si el número actual es par. Si el número dividido por 2 no tiene nada que sobra (el residuo es 0), es par.
    if (i % 2 === 0) {
      // Si es par, lo muestro en la consola.
      console.log(i);
    }
  }
}