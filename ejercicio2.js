// Ejercicio 2: Semáforo inteligente

// Le pido a la persona que escriba un color del semáforo.
let color = prompt("Escribe un color del semáforo: rojo, amarillo o verde.");

// Convierto el texto a minúsculas para que siempre funcione bien.
color = color.toLowerCase();

// Uso la estructura "switch" para decidir qué mensaje dar.
switch (color) {
  case "rojo":
    alert("Alto, no puedes avanzar.");
    break;

  case "amarillo":
    alert("Precaución, prepárate para avanzar.");
    break;

  case "verde":
    alert("Avanza con seguridad.");
    break;

  default:
    alert("Color no reconocido, tienes que escribir rojo, amarillo o verde.");
}