let color = prompt("Ingresa un color de semáforo: rojo, amarillo o verde.");

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
    alert("Color no reconocido, ingresa rojo, amarillo o verde.");
}