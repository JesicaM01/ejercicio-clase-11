// Ejercicio 7: Calculadora simple

// Le pido a la persona los dos números y el signo de la operación.
let numero1 = prompt("Escribe el primer número:");
let operacion = prompt("Escribe la operación (+, -, *, /):");
let numero2 = prompt("Escribe el segundo número:");

// Convierto lo que me dieron a números de verdad, para que la calculadora funcione.
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let resultado;

// Uso la estructura "switch" para decidir qué hacer con la operación.
switch (operacion) {
  case "+":
    resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado);
    break;

  case "-":
    resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);
    break;

  case "*":
    resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: " + resultado);
    break;

  case "/":
    // Aquí reviso si la persona quiere dividir por cero, porque eso no se puede.
    if (numero2 === 0) {
      alert("No se puede dividir por cero.");
    } else {
      resultado = numero1 / numero2;
      alert("El resultado de la división es: " + resultado);
    }
    break;

  default:
    alert("Operación no válida. Tienes que usar +, -, * o /");
}