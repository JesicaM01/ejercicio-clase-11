// Ejercicio 10: Adivina el número

// 1. La computadora piensa un número al azar entre 1 y 10.
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// 2. Uso un robot que cuenta 3 intentos.
for (let i = 1; i <= 3; i++) {
  let intento = prompt("Adivina el número entre 1 y 10. Te quedan " + (4 - i) + " intentos.");
  intento = parseInt(intento);

  // 3. Reviso si la persona adivinó.
  if (intento === numeroSecreto) {
    alert("¡Felicidades! Adivinaste el número en el intento " + i + ".");
    break; // Esto detiene el juego.
  } else if (i < 3) {
    alert("Incorrecto. ¡Intenta de nuevo!");
  }
}

// 4. Si el juego termina y no adivinó, muestro el número secreto.
if (intento !== numeroSecreto) {
  alert("¡Se te acabaron los intentos! El número secreto era: " + numeroSecreto);
}