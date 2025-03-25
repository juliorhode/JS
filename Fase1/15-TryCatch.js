/*
¿Qué es el try-catch?

El try-catch es un bloque de código que se utiliza para ejecutar un código que puede generar un error. Si el código dentro del try bloque genera un error, el catch bloque se ejecutará y manejará el error.

sintaxis:
try {
  // Código que puede generar un error
} catch (error) {
  // Código que se ejecutará si se genera un error
}
*/

// el código dentro del try bloque intenta obtener datos de una API. Si la API no responde o hay un error en la solicitud, el catch bloque se ejecutará y mostrará el error en la consola.
try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const datos = await respuesta.json();
    console.log(datos);
} catch (error) {
    console.error(error);
}
/*
Tipos de errores

Hay varios tipos de errores que se pueden manejar con el try-catch, incluyendo:

Error de sintaxis: 
    errores que ocurren cuando el código no se puede ejecutar debido a un error de sintaxis.
Error de ejecución: 
    errores que ocurren cuando el código se ejecuta, pero algo sale mal.
Error de tipo: 
    errores que ocurren cuando se intenta utilizar un valor de un tipo incorrecto.


Manejo de errores

El try-catch se utiliza para manejar errores de manera controlada. Cuando se genera un error, el catch bloque se ejecutará y se puede utilizar para:

Mostrar un mensaje de error: 
    se puede mostrar un mensaje de error al usuario para informarle de lo que ha ocurrido.
Reintentar la operación: 
    se puede reintentar la operación que generó el error.
Cancelar la operación: 
    se puede cancelar la operación que generó el error.
*/