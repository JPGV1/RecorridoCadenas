function IncluyeE() {
  let cadena = "Somos SENA";

  for (let index = 0; index < cadena.length; index++) {
    if (cadena[index].includes("E") || cadena[index].includes("e")) {
      console.log("la cadena " + cadena + " incluye la letra e.");
    }
  }
}
