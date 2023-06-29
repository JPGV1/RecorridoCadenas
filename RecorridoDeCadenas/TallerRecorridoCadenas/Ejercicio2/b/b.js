function ContieneO() {
  let cadena = "Somos SENA";
  let contador = 0;
  for (let index = 0; index < cadena.length; index++) {
    if (cadena[index] == "o") {
      contador++;
    }
  }
  console.log(
    "La cadena " + cadena + " contiene la letra o " + contador + " veces."
  );
}
