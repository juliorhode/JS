/*
Funciones

Una función es un bloque de código que se puede ejecutar múltiples veces desde diferentes partes de un programa. Las funciones son útiles para organizar y reutilizar código. En JavaScript, las funciones se definen con la palabra clave function.

Tipos de funciones

Hay varios tipos de funciones en JavaScript:

Funciones declaradas: Son funciones que se declaran utilizando la palabra clave function.
Funciones expresadas: Son funciones que se expresan como una expresión y se asignan a una variable.
Funciones anónimas: Son funciones que no tienen un nombre y se utilizan como argumentos de otras funciones o como valores de retorno de otras funciones.
Funciones de flecha: Son funciones que se declaran utilizando la sintaxis de flecha (=>).
*/

// Sintaxis de funciones
function nombreFuncion(parametros) {
    // Código de la función
}
/*
nombreDeLaFuncion: es el nombre de la función.
parametros: es la lista de parámetros que se pasan a la función.
código de la función: es el código que se ejecuta cuando se llama a la función.
*/

// Funcion declarada
function suma(a, b) {
    return a + b;
}
// Funcion expresada
const resta = function (a, b) {
    return a - b;
};
// Funcion anonima
const multiplicacion = (a, b) => a * b;
// Funcion de flecha
const division = (a, b) => a / b;

// Llamando a las funciones
console.log(suma(2, 3)); // 5
console.log(resta(5, 2)); // 3
console.log(multiplicacion(2, 3)); // 6
console.log(division(6, 3)); // 2

// El orden de montado en memoria de un script de JavaScript 
/*
1) Carga del script: El navegador carga el script de JavaScript en la memoria.
2) Análisis sintáctico: El motor de JavaScript analiza el script para identificar la estructura del código y detectar errores sintácticos.
3) Creación del árbol de sintaxis abstracto (AST): El motor de JavaScript crea un árbol de sintaxis abstracto (AST) que representa la estructura del código.
4) Creación de los objetos de función: El motor de JavaScript crea objetos de función para cada función declarada en el script.
5) Creación de los objetos de variable: El motor de JavaScript crea objetos de variable para cada variable declarada en el script.
6) Creación del ámbito de la función: El motor de JavaScript crea un ámbito de función para cada función declarada en el script.
7) Creación del ámbito de la variable: El motor de JavaScript crea un ámbito de variable para cada variable declarada en el script.
8) Asignación de valores: El motor de JavaScript asigna valores a las variables y funciones declaradas en el script.
9) Ejecución del código: El motor de JavaScript ejecuta el código del script en el orden en que se declara.

En cuanto al orden de montado en memoria de los diferentes elementos del script, es el siguiente:

Variables: Las variables se montan en memoria en el orden en que se declaran.
Funciones: Las funciones se montan en memoria en el orden en que se declaran.
Objetos: Los objetos se montan en memoria en el orden en que se declaran.
Arreglos: Los arreglos se montan en memoria en el orden en que se declaran.
Cadenas: Las cadenas se montan en memoria en el orden en que se declaran.
Números: Los números se montan en memoria en el orden en que se declaran.
Booleanos: Los booleanos se montan en memoria en el orden en que se declaran.
Null: El valor null se monta en memoria en el orden en que se declara.
Undefined: El valor undefined se monta en memoria en el orden en que se declara.
Es importante destacar que el orden de montado en memoria puede variar dependiendo del motor de JavaScript y del navegador que se esté utilizando.

En resumen, el orden de montado en memoria de un script de JavaScript es el siguiente:

Variables
Funciones
Objetos
Arreglos
Cadenas
Números
Booleanos
Null
Undefined
*/

// Funciones con parámetros por defecto
// Las funciones pueden tener parámetros por defecto que se utilizan si no se proporcionan valores para esos parámetros.
function saludo(nombre = "Julio") {
    console.log(`Hola, ${nombre}!`);
}
saludo(); // Hola, Julio!
saludo("María"); // Hola, María!

// Funciones con parámetros rest
// Las funciones pueden tener parámetros rest que permiten pasar un número variable de argumentos a la función.

// ...numeros es una forma de recopilar todos los parámetros adicionales que se pasan a una función en un arreglo. Es como si estuvieras diciendo: "Recopila todos los números que se pasen a esta función y ponlos en un arreglo llamado numeros". Puedes utilizarlo para recopilar cualquier tipo de parámetros adicionales que se pasen a una función, no solo arreglos. Por ejemplo, puedes utilizarlo para recopilar números, cadenas, objetos, etc.

function suma(...numeros) {
    let total = 0
    for (const numero of numeros) {
        total += numero;
    }
    return total
}
console.log(suma(1, 2, 3, 4, 5)); // 15


// En este ejemplo, ...args recopila todos los parámetros adicionales que se pasan a la función imprimir en un arreglo llamado args.
function imprimir(...args) {
    console.log(args);
}
imprimir(1, 2, 3, "hola", { nombre: "Julio" }); // [1, 2, 3, "hola", {nombre: "Julio"}]

// Funciones con parámetros spread
// Las funciones pueden tener parámetros spread que permiten pasar un arreglo como argumento a la función.
function resta1(a, b, c) {
    return a - b - c;
}
const numeros = [10, 5, 2];
console.log(resta1(...numeros)); // 3

// Funciones recursivas
// Una función recursiva es una función que se llama a sí misma para resolver un problema de manera iterativa.
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // 120

// Funciones de orden superior con funciones de flecha
// Una función de orden superior con funciones de flecha es una función que toma una función de flecha como parámetro o devuelve una función de flecha como resultado.Las funciones de orden superior con funciones de flecha son útiles para crear funciones más complejas y flexibles.
const sumas = (a, b) => a + b;
function operacion(a, b, fn) {
    return fn(a, b);
}
console.log(operacion(2, 3, sumas)); // 5

// Funciones anidadas
// Las funciones anidadas son funciones que se definen dentro de otras funciones y pueden acceder a las variables de la función externa.
function externa() {
    let mensaje = "Hola, mundo!";
    function interna() {
        console.log(mensaje);
    }
    interna();
}
externa(); // Hola, mundo!

// Funciones con parámetros de tipo
// Las funciones pueden tener parámetros de tipo que se utilizan para especificar el tipo de dato que se espera para cada parámetro.
// las anotaciones de tipo solo se pueden usar en los archivos TypeScript.
/* function suma(a: number, b: number): number {
    return a + b;
}
console.log(suma(2, 3)); // 5 */

// Funciones asíncronas
// Las funciones asíncronas son funciones que devuelven una promesa y permiten realizar operaciones asíncronas en JavaScript. Son funciones que se ejecutan de manera asíncrona, lo que significa que no bloquean la ejecución del código mientras se están ejecutando.
async function obtenerDatos() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const datos = await respuesta.json()
    return datos
}
obtenerDatos().then(datos => console.log(datos));

// Funciones generadoras
// Las funciones generadoras son funciones que pueden pausar su ejecución y devolver un valor en cada pausa. Para crear una función generadora, se utiliza la palabra clave function seguida de un asterisco (*). Son funciones que se pueden utilizar para generar secuencias de valores de manera eficiente.
function* generaNumeros() {
    for (let i = 0; i < 5; i++) {
        yield i;
    }
}

const generador = generaNumeros();
console.log(generador.next().value); // 0
console.log(generador.next().value); // 1
console.log(generador.next().value); // 2
console.log(generador.next().value); // 3
console.log(generador.next().value); // 5
console.log(generador.next().value); // undefined porque ya no hay más valores para generar. El maximo valor es  (i<5) y ya se ha generado 5 veces
console.log(generador.next().value); // undefined porque ya no hay más valores para generar . El maximo valor es  (i<5) y ya se ha generado 5 veces


