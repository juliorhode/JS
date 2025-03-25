/*
Una interfaz es un conjunto de métodos y propiedades que se utilizan para interactuar con un objeto o un sistema. En el caso de la interfaz de lectura de la entrada del usuario, se utiliza para leer la entrada del usuario desde la consola y escribir la salida del programa en la consola.

Imagina que estás utilizando un programa de consola y quieres interactuar con él. Puedes escribir comandos y opciones en la consola, y el programa responderá con mensajes y resultados. La interfaz de lectura de la entrada del usuario es el mecanismo que permite que esto suceda.

En Node.js, la interfaz de lectura de la entrada del usuario se crea utilizando el módulo readline. El módulo readline proporciona una forma de leer la entrada del usuario desde la consola y escribir la salida del programa en la consola.
*/
const readline = require('readline')
const rl = readline.createInterface({
    // Esta opción especifica que la entrada del usuario se leerá desde la consola (stdin).
    input: process.stdin,
    // Esta opción especifica que la salida del programa se escribirá en la consola (stdout).
    output: process.stdout
})

// rl.question para preguntar al usuario 
rl.question("Cual es tu nombre: ", (respuesta) => {
    console.log(`Hola, ${respuesta}!`);
})