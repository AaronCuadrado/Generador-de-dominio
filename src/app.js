// constantes con las opciones
const pronombre = ["mi", "tu", "su"];
const adjetivo = ["triste", "frustrante", "ridiculo"];
const sustantivo = ["vida", "suerte", "problema"];
const extensiones = [".com", ".es", ".net"];

// forin para generar TODOS los dominios
for (let i = 0; i < pronombre.length; i++) {
  for (let j = 0; j < adjetivo.length; j++) {
    for (let k = 0; k < sustantivo.length; k++) {
      for (let l = 0; l < extensiones.length; l++) {
        const dominio = `${pronombre[i]}${adjetivo[j]}${sustantivo[k]}${extensiones[l]}`;
        console.log(dominio);
      }
    }
  }
}
