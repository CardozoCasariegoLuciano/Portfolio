// Que es el DOM?
// El DOM (Document Object Model) es una representación jerárquica y estructurada de un documento HTML
// y todas sus etiquetas
// Imagen de referencia  https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Schaubilder/representacion-grafica-de-un-dom-tree.png

// Ejemplo de manipulación del DOM
const listaDeNombres = ["Rogelio", "Eduardo", "Rodolfo"]; //Creo una lista de nombres

//selecciono los elementos del HTML que voy a usar, por su atributo id (ver el index.html)
const nombre = document.getElementById("nombre");
const btn_nombre = document.getElementById("btn_nombre");
const btn_color = document.getElementById("btn_color");


let nombreActual = 0;
nombre.innerHTML = `${listaDeNombres[nombreActual]}`; //a la etiqueta con id nombre (que es un span) le agrego un HTML a su interior
                                                      //en este caso es el elemento de la lista "listaDeNombres" que este en la
                                                      // posición "nombreActual" que en este punto es 0 (por la linea anterior)

// agrego un eventListener del tipo "click" a la etiqueta con id btn_nombre
// el tipo click de eventListener se ejecuta cada vez que el usuario hace click
// en el elemento html
btn_nombre.addEventListener("click", function () { //Esta funcion lo unico que hace es recorrer la listaDeNombres y muestra el proximo nombre
    nombreActual++;                                // Si llega al final vuelve desde el principio (por la logica del IF)
    if (nombreActual >= listaDeNombres.length) {
    nombreActual = 0;
  }
  nombre.innerHTML = `${listaDeNombres[nombreActual]}`;
});

//Mismo eventListener pero para la etiqueta con id btn_color
btn_color.addEventListener("click", function () {
  nombre.classList.toggle("color"); //quita o pone la clase css "color" dependiendo si ya la tenia o no (ver en stypes.css para ver esa clase)
});

//TAREA 1:
// Agregar otra lista con apellidos
// Agregar otro botton que al hacerle click cambie el apellido (mismo funcionamiento que con los nombres)
// El boton de color tiene que modificar tanto al nombre como al apellido

//se espera poder probar las distintas combinaciones de nombres y apellidos



//Contador
const label_valor = document.getElementById("valor");

let valor = 0;
label_valor.innerHTML = valor;

// en estos casos se usan otro tipo de eventListener
// solo creo las funciones que se van a ejecutar, y en el HTML en la etiqueta que me
// interese le agrego el atributo onclick="miFuncion()" para que se ejecute al hacerle click
function sumar() {
  valor++;
  label_valor.innerHTML = valor;
}

function restar() {
  valor--;
  label_valor.innerHTML = valor;
}
//hay muchos tipos de eventos, todos los que se te ocurran (googlealos)


//TAREA 1:
// limitar el contador para que solo baje hasta 0 y que solo suba hasta 15

//TAREA 2:
// Hacer que el contador aumente de 5 en 5 y decremente de 3 en 3 USANDO PARAMETROS



