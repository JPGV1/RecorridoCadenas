/*function CuantasPalabras() {
  let cadena = " Javascript es genial.";
  let contador = 0;

  for (let index = 0; index < cadena.length; index++) {
    if (cadena[index] == " ") {
      contador++;
    }
  }
  console.log("Hay " + contador + " palabras.");
}
*/
let cadena = "Javascript es genial";
let contador = 0;
let esPalabra = false;

for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] !== " " && !esPalabra) {
    esPalabra = true;
    contador++;
  } else if (cadena[i] === " " && esPalabra) {
    esPalabra = false;
  }
}

console.log("La cadena está compuesta por " + contador + " palabra(s).");