// esto es un comentario en una linea
/**
 * en este taller se espera fundamentar conocimientos basicos sobre javascript y tenerlos claros para el futuro
 */
// ejercicio 5

let miNumero = 10;
console.log(miNumero);
// ejercicio 6

let miBooleano =(true);
console.log(typeof miBooleano);
// ejercicio 7

let miCadena = ("hola mundo".length)
console.log(miCadena)

// ejercicio 8

let miArray = [`moto`, 10, [1,2,3,4]];
console.log(miArray[2]);

// ejercicio 9

let nombre = `maicol`;
let edad = 18;
let apellido = `tabares`;

let miObjeto = {};
console.log(miObjeto);

// ejercicio 10

let nombreUsuario = prompt(`¿cual es tu nombre?`);
alert(`Hola ${nombreUsuario} bienvenido!`);

// ejercicio 11

let likeJavaScript = confirm("te gusta JavaScript?");
console.log(`Su respuesta: ${likeJavaScript}`);
if (likeJavaScript) {
console.log("Eso es genial, ¡JavaScript es muy divertido!");
} else {
console.log("Está bien, ¡tal vez te guste en el futuro!");
}

// seccion 4 ejercicio 9

console.warn("Esto es solo una práctica");

// seccion 4 ejercicio 10

console.error("Se ha producido un error al intentar ejecutar la operación");

// seccion 4 ejercicio 11

let numbers = [1, 2, 3, 4, 5];
console.table(numbers);