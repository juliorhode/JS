/*
Una función es un bloque de código que se puede ejecutar múltiples veces desde diferentes partes de un programa. Las funciones son útiles para organizar y reutilizar código, y para hacer que el código sea más fácil de leer y mantener.

Tipos de funciones

Hay varios tipos de funciones en JavaScript, incluyendo:

    Funciones declaradas: 
        se declaran utilizando la palabra clave function seguida del nombre de la función y los parámetros.

    Funciones expresadas: 
        se declaran utilizando la palabra clave function seguida de los parámetros y el cuerpo de la función, y se asignan a una variable.

    Funciones anónimas: 
        se declaran sin un nombre explícito y se pueden utilizar como argumentos para otras funciones o como valores de retorno.

    Funciones de flecha: 
        se declaran utilizando la sintaxis de flecha (=>) y son una forma más concisa de declarar funciones.

Parámetros y argumentos

Las funciones pueden tener parámetros y argumentos. Los parámetros son las variables que se declaran en la función y que se utilizan para recibir los valores que se pasan a la función. Los argumentos son los valores que se pasan a la función cuando se llama.


*/
// Función declarada
function suma(a, b) {
    return a + b;
}

// Función expresada
let resta = function (a, b) {
    return a - b;
};

// Función anónima
let multiplicacion = function (a, b) {
    return a * b;
};

// Función de flecha
let division = (a, b) => a / b;

// Ejemplo de parámetros y argumentos
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
// En este ejemplo, nombre es un parámetro de la función saludar, y "Juan" es un argumento que se pasa a la función cuando se llama.
saludar("Juan"); // Hola, Juan!

// Valor de retorno
// Las funciones pueden tener un valor de retorno, que es el valor que se devuelve cuando se llama a la función.
function suma1(a, b) {
    return a + b;
}

let resultado = suma1(2, 3);
console.log(resultado); // 5

/*
Scope y alcance

Las funciones tienen un scope y un alcance. El scope es el conjunto de variables y funciones que están disponibles dentro de la función. El alcance es el conjunto de variables y funciones que están disponibles fuera de la función.
*/
let x = 10;

function suma3(a, b) {
    let y = 20;
    return a + b + x + y;
}
// En este ejemplo, la variable x está disponible dentro y fuera de la función suma, mientras que la variable y solo está disponible dentro de la función.
console.log(suma3(2, 3)); // 35

/*
Recursividad

Las funciones pueden ser recursivas, lo que significa que se pueden llamar a sí mismas.
*/
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120

/*
Funciones con parámetros

Las funciones pueden tener parámetros, que son variables que se declaran en la función y que se utilizan para recibir los valores que se pasan a la función.
*/
function saludar(nombre, edad) {
    console.log(`Hola, ${nombre}! Tienes ${edad} años.`);
}

saludar("Juan", 30);

/*
Funciones con parámetros por defecto

Las funciones también pueden tener parámetros por defecto, que son valores que se utilizan si no se pasan argumentos para ese parámetro.
*/
function saludar1(nombre = "Anónimo", edad = 0) {
    console.log(`Hola, ${nombre}! Tienes ${edad} años.`);
}

saludar1();
saludar1('Julio', 45);

/*
unciones con parámetros rest

Las funciones también pueden tener parámetros rest, que son parámetros que se utilizan para recibir un número variable de argumentos.
*/
function suma4(...numeros) {
    let total = 0
    for (let numero of numeros) {
        total += numero
    }
    return total
}
console.log(`El total es: ${suma4(1, 2, 3, 4, 5)}`);

/*
Funciones con parámetros de tipo

Las funciones también pueden tener parámetros de tipo, que son parámetros que se utilizan para especificar el tipo de dato que se espera para ese parámetro.

Esto es aplicable para TypeScript

function saludar(nombre: string, edad: number) {
    console.log(`Hola, ${nombre}! Tienes ${edad} años.`);
}

saludar("Juan", 30);
*/

/*
Funciones asíncronas

Las funciones asíncronas son funciones que se ejecutan de manera asíncrona, es decir, no bloquean la ejecución del código mientras se están ejecutando. Puedes crear funciones asíncronas utilizando la palabra clave async y la función await.
*/
async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const datos = await respuesta.json()
        console.log(datos);

    } catch (error) {
        console.error(error);

    }
}
obtenerDatos();

/*
Funciones de orden superior

Las funciones de orden superior son funciones que toman otras funciones como argumentos o devuelven funciones como resultado. Puedes crear funciones de orden superior utilizando la sintaxis de función normal.
*/
function resta1(a, b, callback) {
    callback(a - b);
}

resta1(5, 3, function (resultado) {
    console.log(resultado); // 2
});

/*
Closures

Los closures son funciones que tienen acceso a variables y funciones de su entorno exterior. Puedes crear closures utilizando la sintaxis de función normal.
*/
function crearClosure() {
    // es una función que devuelve un closure que tiene acceso a la variable contador del entorno exterior.
    let contador = 0;
    return function () {
        contador++;
        console.log(contador);
    };
}

const closure = crearClosure();
closure(); // 1
closure(); // 2

/*
Funciones de constructor

Las funciones de constructor son funciones que se utilizan para crear objetos. Puedes crear funciones de constructor utilizando la sintaxis de función normal.
*/
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const persona = new Persona('Juan', 30);
console.log(persona.nombre); // Juan
console.log(persona.edad); // 30