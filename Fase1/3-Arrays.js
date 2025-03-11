/* 
Arrays

En JavaScript, un array es una colección de valores que se pueden acceder utilizando un índice. Los arrays se pueden crear utilizando la sintaxis de array literal o utilizando la función Array().

Métodos de arrays

En JavaScript, los arrays tienen métodos que se pueden utilizar para manipular y acceder a sus valores. Algunos de los métodos más comunes de los arrays son push(), pop(), shift(), unshift(), slice(), splice(), concat(), join(), reverse(), sort(), filter(), map(), reduce(), y forEach().

Índices de arrays
Los índices de los arrays comienzan en 0 y se pueden utilizar para acceder a los valores de un array. Los índices de los arrays también pueden ser negativos, lo que significa que se pueden acceder a los valores del array desde el final del array hacia el principio.

Métodos de alto orden (en inglés, "higher-order functions"), que son funciones que toman otras funciones como argumentos o devuelven funciones como resultado. Como por ejemplo: map(), filter(), reduce(), etc. Por otro lado, los metodos de bajo orden son aquellos que no toman funciones como argumentos o no devuelven funciones como resultado. Como por ejemplo: push(), pop(), shift(), unshift(), slice(), splice(), concat(), join(), reverse(), sort(), etc.


*/

const colores = ["rojo", "azul", "verde"];
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);

// En JavaScript, se pueden utilizar bucles para iterar sobre arrays. Hay varias formas de hacerlo, pero aquí te muestro algunas de las más comunes:

// For: Este bucle itera sobre los elementos de un arreglo.
console.log("Bucle for tradicional");
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}

// For...of: Este bucle itera sobre los elementos de un arreglo.
console.log("Bucle for...of");
for (const color of colores) {
    console.log(color);
}

// Array.prototype.forEach(): Este método itera sobre los elementos de un arreglo y ejecuta una función para cada elemento.
console.log("Array.prototype.forEach()");
colores.forEach((color) => {
    console.log(color);
})


// Array.prototype.map(): Este método devuelve un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original.
console.log("Array.prototype.map()");
const coloresMayusculas = colores.map((color) => color.toUpperCase())
console.log(coloresMayusculas);

// Array.prototype.filter(): Este método devuelve un nuevo arreglo con los elementos que cumplen con una condición.
console.log("Array.prototype.filter()");
const colorEmpiezaConR = colores.filter((color) => color.startsWith("r"))
console.log(colorEmpiezaConR);

// Array.prototype.reduce(): Este método devuelve un valor que es el resultado de aplicar una función a cada elemento del arreglo.
console.log("Array.prototype.reduce()");
const cantidadColores = colores.reduce((contador, color) => contador + 1, 0) 
console.log(cantidadColores);

// Array.prototype.some(): Este método devuelve un booleano que indica si al menos un elemento del arreglo cumple con una condición.
console.log("Array.prototype.some()");
const hayColorRojo = colores.some((color) => color.startsWith("r"))
console.log(hayColorRojo);

// Array.prototype.every(): Este método devuelve un booleano que indica si todos los elementos del arreglo cumplen con una condición.
console.log("Array.prototype.every()");
const todosColoresEmpiezanConR = colores.every((color) => color.startsWith("r"))
console.log(todosColoresEmpiezanConR);

// Array.prototype.find(): Este método devuelve el primer elemento del arreglo que cumple con una condición.
console.log("Array.prototype.find()");
const primerColorRojo = colores.find((color) => color.startsWith("r"))
console.log(primerColorRojo);

// Array.prototype.findIndex(): Este método devuelve el índice del primer elemento del arreglo que cumple con una condición.
console.log("Array.prototype.findIndex()");
const indicePrimerColorRojo = colores.findIndex((color) => color.startsWith("r"))
console.log(indicePrimerColorRojo);

// Array.prototype.includes(): Este método devuelve un booleano que indica si un elemento está presente en el arreglo.
console.log("Array.prototype.includes()");
const incluyeColorRojo = colores.includes("rojo") 
console.log(incluyeColorRojo);

// Array.prototype.indexOf(): Este método devuelve el índice de un elemento en el arreglo.
console.log("Array.prototype.indexOf()");
const indiceColorRojo = colores.indexOf("rojo") // Devuelve el índice del elemento "rojo"
console.log(indiceColorRojo);

// Array.prototype.lastIndexOf(): Este método devuelve el último índice de un elemento en el arreglo.
console.log("Array.prototype.lastIndexOf()");
const ultimoIndiceColorRojo = colores.lastIndexOf("azul") // Devuelve el índice del último elemento "azul"
console.log(ultimoIndiceColorRojo);

// Array.prototype.join(): Este método devuelve una cadena que contiene los elementos del arreglo separados por un separador.
console.log("Array.prototype.join()");
const coloresSeparadosPorComa = colores.join(", ") 
console.log(coloresSeparadosPorComa);

// Array.prototype.slice(): Este método devuelve una parte del arreglo.
console.log("Array.prototype.slice()");
const coloresCopia = colores.slice(0, 2) // Devuelve los elementos en los índices 0 y 1
console.log(coloresCopia);

// Array.prototype.splice(): Este método cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos.
console.log("Array.prototype.splice()");
const coloresEliminados = colores.splice(1, 1, "amarillo", "naranja") // Elimina el elemento en el índice 1 y agrega los elementos "amarillo" y "naranja"
console.log(colores);
console.log(coloresEliminados);

// Array.prototype.push(): Este método agrega uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo.
console.log("Array.prototype.push()");
const nuevaLongitud = colores.push("violeta") // Agrega el elemento "violeta" al final del arreglo
console.log(colores);
console.log(nuevaLongitud);

// Array.prototype.pop(): Este método elimina el último elemento de un arreglo y devuelve ese elemento.
console.log("Array.prototype.pop()");
const ultimoColor = colores.pop() // Elimina el último elemento del arreglo
console.log(colores);
console.log(ultimoColor);

// Array.prototype.shift(): Este método elimina el primer elemento de un arreglo y devuelve ese elemento.
console.log("Array.prototype.shift()");
const primerColor = colores.shift() // Elimina el primer elemento del arreglo
console.log(colores);
console.log(primerColor);   

// Array.prototype.unshift(): Este método agrega uno o más elementos al principio de un arreglo y devuelve la nueva longitud del arreglo.
console.log("Array.prototype.unshift()");
const nuevaLongitud2 = colores.unshift("blanco") // Agrega el elemento "blanco" al principio del arreglo
console.log(colores);
console.log(nuevaLongitud2);

// Array.prototype.reverse(): Este método invierte el orden de los elementos de un arreglo.
console.log("Array.prototype.reverse()");
const coloresInvertidos = colores.reverse()
console.log(coloresInvertidos);

// Array.prototype.sort(): Este método ordena los elementos de un arreglo.
console.log("Array.prototype.sort()");
const coloresOrdenados = colores.sort()
console.log(coloresOrdenados);

// Array.prototype.concat(): Este método combina dos o más arreglos.
console.log("Array.prototype.concat()");
const coloresYFrutas = colores.concat(["manzana", "pera", "uva"])
console.log(coloresYFrutas);





/*
const frutas = ["manzana", "pera", "uva"];
console.log(frutas.length);
console.log(frutas[frutas.length - 1]);
console.log(frutas[frutas.length - 2]);
console.log(frutas[frutas.length - 3]);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

frutas.push("naranja");
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.shift();
console.log(frutas);
frutas.unshift("fresa");
console.log(frutas);
console.log(frutas.slice(1, 3));
console.log(frutas.splice(1, 2));
console.log(frutas);
console.log(frutas.concat(colores));
console.log(frutas.join(", "));
console.log(frutas.reverse());
console.log(frutas.sort());
console.log(frutas.filter(x => x === "fresa"));
console.log(frutas.map(x => x.toUpperCase()));
console.log(frutas.reduce((x, y) => x + y));
frutas.forEach(x => console.log(x));
*/


/*
console.log("-----------------------------------------------------------");
let frutas1 = ["manzana", "pera", "uva"];
frutas1.forEach((x, i) => console.log(x, i));  // índices de los elementos del array
frutas1.forEach((x, i, arr) => console.log(x, i, arr));  // índices de los elementos del array y el array completo
frutas1.forEach((x, i, arr) => console.log(x, i, arr.length));  // índices de los elementos del array y la longitud del array
frutas1.forEach((x, i, arr) => console.log(x, i, arr.length, arr));  // índices de los elementos del array, la longitud del array y el array completo
frutas1.forEach((x, i, arr) => console.log(x, i, arr.length, arr, this));  // índices de los elementos del array, la longitud del array, el array completo y el objeto global this
frutas1.forEach((x, i, arr) => console.log(x, i, arr.length, arr, this, arguments));  // índices de los elementos del array, la longitud del array, el array completo, el objeto global this y los argumentos de la función
frutas1.forEach((x, i, arr) => console.log(x, i, arr.length, arr, this, arguments, arguments.length));  // índices de los elementos del array, la longitud del array, el array completo, el objeto global this, los argumentos de la función y la longitud de los argumentos de la función
frutas1.forEach((x, i, arr) => console.log(x, i, arr.length, arr, this, arguments, arguments.length, arguments.callee));  // índices de los elementos del array, la longitud del array, el array completo, el objeto global this, los argumentos de la función, la longitud de los argumentos de la función y la función que se está ejecutando
frutas1.forEach((x, i, arr) => console.log(x, i, arr.length, arr, this, arguments, arguments.length, arguments.callee, arguments.callee.name));  // índices de los elementos del array, la longitud del array, el array completo, el objeto global this, los argumentos de la función, la longitud de los argumentos de la función, la función que se está ejecutando y el nombre de la función que se está ejecutando
frutas1.forEach((x, i, arr) => console.log(x, i, arr.length, arr, this, arguments, arguments.length, arguments.callee, arguments.callee.name, arguments.callee.caller));  // índices de los elementos del array, la longitud del array, el array completo, el objeto global this, los argumentos de la función, la longitud de los argumentos de la función, la función que se está ejecutando, el nombre de la función que se está ejecutando y la función que llama a la función que se está ejecutando
*/

