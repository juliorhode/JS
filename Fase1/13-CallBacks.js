/*
¿Qué son los Callbacks?

Un callback es una función que se pasa como argumento a otra función. La función que recibe el callback como argumento lo ejecuta cuando es necesario.

¿Por qué se utilizan los Callbacks?

Los callbacks se utilizan para manejar la asincronía en JavaScript. La asincronía se refiere a la capacidad de ejecutar varias tareas al mismo tiempo, sin bloquear la ejecución del código.
*/
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback()
}
function despedir() {
    console.log('Adios');
}
// la función saludar recibe un callback como argumento. La función despedir es el callback que se ejecuta cuando la función saludar lo llama.
saludar('Juan', despedir); // Hola, Juan Adios

/*
¿Cómo funcionan los Callbacks con setTimeout?

La función setTimeout es una función que se utiliza para ejecutar un callback después de un tiempo determinado.
*/

// la función setTimeout se utiliza para ejecutar la función saludar después de 2 segundos.
setTimeout(saludar, 2000, 'Julio', despedir);

// Crea una función que reciba un callback como argumento y lo ejecute después de 2 y 5 segundos.

// Función que recibe un mensaje y un callback como argumentos
function saludo(mensaje, callback) {
    // Imprime el mensaje en la consola
    console.log(mensaje);

    // Ejecuta el callback después de 2 segundos
    // setTimeout(callback, 2000)

    // Ejecuta el callback después de 5 segundos
    setTimeout(callback, 5000)
}
// Llama a la función saludo con el mensaje "hola mundo" y el callback despedir
saludo('hola mundo', despedir)

/*
Tipos de callbacks

Hay dos tipos de callbacks:

1) Callbacks sincronos: se ejecutan de manera inmediata después de que la función que los recibe ha terminado de ejecutarse.

2) Callbacks asíncronos: se ejecutan después de un tiempo determinado o cuando una condición específica se cumple.
*/

// Callback sincrono
/*
En este ejemplo, tenemos una función suma que recibe tres argumentos:

a: el primer número a sumar
b: el segundo número a sumar
callback: una función que se ejecutará con el resultado de la suma
*/
function suma(a, b, callback) {
    // La función suma realiza la suma de a y b y almacena el resultado en la variable resultado.
    let resultado = a + b;
    // Luego, la función suma llama al callback que se pasó como argumento, pasándole el resultado de la suma como argumento.
    callback(resultado);
}
// En este caso function (resultado), el callback es una función anónima que se define en el momento de llamar a suma.
suma(7, 3, function (resultado) {
    // La función anónima recibe el resultado de la suma como argumento y lo imprime en la consola utilizando console.log.
    console.log(`El resultado es: ${resultado}`); // 10
});

// Callback asíncrono

// La función suma llama a la función setTimeout, que a su vez llama a una función anónima después de 5 segundos.
function suma2(a, b, callback) {
    // La función anónima dentro de setTimeout llama al callback que se pasó como argumento, pasándole el resultado de la suma como argumento.
    setTimeout(function () {
        let resultado = a + b;
        callback(resultado);
    }, 5000);
}

// Se llama a la función suma con los argumentos 2, 3 y una función anónima como callback.
suma2(2, 3, function (resultado) {
    // El callback (la función anónima) recibe el resultado de la suma como argumento y lo imprime en la consola utilizando console.log.
    console.log(`El resultado es: ${resultado}`); // 5 (después de 5 segundos)
});

/*
Ventajas de los callbacks

Los callbacks tienen varias ventajas:

    Flexibilidad: 
        los callbacks permiten que las funciones se ejecuten de manera flexible y dinámica.
    Reutilización de código: 
        los callbacks permiten reutilizar código y evitar la duplicación de funciones.
    Mejora de la legibilidad: 
        los callbacks pueden mejorar la legibilidad del código al separar la lógica de la función principal.

        Desventajas de los callbacks

Los callbacks también tienen algunas desventajas:

    Complejidad: 
        los callbacks pueden ser complejos y difíciles de entender, especialmente cuando se utilizan de manera anidada.
    Dificultad para depurar: 
        los callbacks pueden ser difíciles de depurar debido a su naturaleza asíncrona.
*/