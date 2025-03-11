// muestra mensaje en consola
console.log("hola a todos");

// declaracion de variables
let nombre = "Carlos"
let edad = 30

// muestro las variables
console.log("Mi nombre es: ", nombre);
console.log("Tengo: ", edad, "años");

nombre = "Julio"
edad = 45

console.log("Mi nombre es: ", nombre);
console.log("Tengo: ", edad, "años");

let ciudad = "Caracas"
console.log("Vivo en: ", ciudad);

/*
let: se utiliza para declarar variables que pueden ser reasignadas.
const: se utiliza para declarar variables que no pueden ser reasignadas.
var: se utiliza para declarar variables que pueden ser reasignadas, pero no es recomendado utilizar esta forma en la mayoría de los casos.


Tipos de datos

En JavaScript, hay varios tipos de datos que se pueden utilizar. Algunos de los tipos de datos más comunes son:

string: una cadena de texto, como "Hola, mundo!".
number: un número, como 30.
boolean: un valor booleano, como true o false.
array: un arreglo de valores, como [1, 2, 3].
object: un objeto que contiene propiedades y valores, como { nombre: "Julio", edad: 30 }.

Operadores

En JavaScript, hay varios operadores que se pueden utilizar para realizar operaciones con valores. Algunos de los operadores más comunes son:

+: suma dos valores.
-: resta dos valores.
*: multiplica dos valores.
/: divide dos valores.
==: compara si dos valores son iguales.
!=: compara si dos valores no son iguales.
===: compara si dos valores son iguales y del mismo tipo.
!==: compara si dos valores no son iguales y del mismo tipo.
*/
let suma = 10 + 20;
let resta = 30 - 10;
let multiplicacion = 5 * 6;
let division = 100 / 5;
let comparacionIgual = 10 == 10;
let comparacionNoIgual = 10 != 20;
let comparacionIgualTipo = 10 === "10";
let comparacionNoIgualTipo = 10 !== "10";

/*
Condicionales

En JavaScript, los condicionales se utilizan para tomar decisiones basadas en condiciones. Algunos de los condicionales más comunes son:

if: se utiliza para ejecutar un bloque de código si una condición es verdadera.
else: se utiliza para ejecutar un bloque de código si una condición es falsa.
switch: se utiliza para ejecutar un bloque de código basado en el valor de una variable.

Bucles

En JavaScript, los bucles se utilizan para ejecutar un bloque de código repetidamente. Algunos de los bucles más comunes son:

for: se utiliza para ejecutar un bloque de código un número determinado de veces.
while: se utiliza para ejecutar un bloque de código mientras una condición sea verdadera.
do-while: se utiliza para ejecutar un bloque de código al menos una vez y luego repetirlo mientras una condición sea verdadera.

Funciones

En JavaScript, las funciones se utilizan para agrupar un bloque de código que se puede ejecutar varias veces. Las funciones pueden tomar argumentos y devolver valores.
*/

if (edad >= 18) {
    console.log("Eres mayor de edad");

} else {
    console.log("Eres menor de edad");
}


//El else if es una sentencia que permite evaluar una condición adicional si la condición principal es falsa.
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 16) {
    console.log("Eres menor de edad, pero puedes conducir");
} else {
    console.log("Eres menor de edad");
}

let i = 0
while (i < 5) {
    console.log("El valor de i es: ", i);
    i++;
}

// El bucle do while es una sentencia que permite ejecutar un bloque de código al menos una vez y luego repetirlo mientras una condición sea verdadera.
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

//El switch es una sentencia que permite evaluar una expresión y ejecutar un bloque de código correspondiente a un valor específico.
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    default:
        console.log("Hoy no es lunes ni martes");
}


//El bucle for es una sentencia que permite ejecutar un bloque de código un número determinado de veces.

//Bucle for tradicional: Este es el bucle for más común y se utiliza para ejecutar un bloque de código un número determinado de veces.
for (let k = 0; k < 5; k++) {
    console.log(k);
}

//Bucle for...in: Este bucle se utiliza para iterar sobre las propiedades de un objeto.
let persona1 = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
for (let propiedad in persona1) {
    console.log(propiedad + ": " + persona1[propiedad]);
}

//Bucle for...of: Este bucle se utiliza para iterar sobre los elementos de un arreglo o un objeto iterable.
let frutas = ["manzana", "pera", "plátano"];
for (let fruta of frutas) {
    console.log(fruta);
}

// Bucle for...await: Este bucle se utiliza para iterar sobre los elementos de un arreglo o un objeto iterable de manera asíncrona.

async function ejemplo() {
    const iterable = [
        new Promise((resolve) => setTimeout(() => resolve("uva"), 1000)),
        new Promise((resolve) => setTimeout(() => resolve("mora"), 2000)),
        new Promise((resolve) => setTimeout(() => resolve("banana"), 3000)),
    ];

    for await (const fruta of iterable) {
        console.log(fruta);
    }
}

ejemplo();

//Bucle for...each: Este bucle se utiliza para iterar sobre los elementos de un arreglo o un objeto iterable de manera asíncrona.
let frutas1 = ["mango", "fresa", "durazno"];
frutas1.forEach((fruta1) => {
    console.log(fruta1);
});

/*
Métodos

En JavaScript, los métodos se utilizan para agregar funcionalidad a los objetos. Los métodos son funciones que se pueden llamar en un objeto.
*/
let persona = {
    nombre: "Julio",
    edad: 30,
    saludar: function () {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años");
    }
};
persona.saludar();