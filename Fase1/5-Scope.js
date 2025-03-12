/*
Scope

El scope se refiere al ámbito en el que se define una variable o una función. En JavaScript, el scope se puede dividir en dos categorías: el scope global y el scope local.

El scope global se refiere a las variables o funciones que se pueden acceder desde cualquier parte de un programa. Por otro lado, el scope local se refiere a las variables o funciones que solo se pueden acceder desde un bloque de código específico.
*/

// Scope global
var x = 10;

function miFuncion() {
    // Scope local
    var y = 20;
    console.log(x); // 10
    console.log(y); // 20
}
console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined

// En este ejemplo, la variable x se define en el scope global y puede ser accedida desde cualquier parte del programa. La variable y se define en el scope local de la función miFuncion y solo puede ser accedida dentro de la función.


/*
Scope de bloques

En JavaScript, también hay un concepto llamado scope de bloques. Un bloque es un grupo de sentencias de código que se ejecutan juntas. El scope de bloques se refiere al ámbito en el que se definen las variables y funciones dentro de un bloque.
*/
if (true) {
    // Scope de bloque
    let z = 30;
    console.log(z); // 30
}
// console.log(z); // ReferenceError: z is not defined

// En este ejemplo, la variable z se define en el scope de bloque del if y solo puede ser accedida dentro del bloque if.

/*
Scope de funciones

En JavaScript, también hay un concepto llamado scope de funciones. El scope de funciones se refiere al ámbito en el que se definen las variables y funciones dentro de una función.
*/
function miFuncion2() {
    // Scope de función
    var a = 40;
    console.log(a); // 40
}
//console.log(a); // ReferenceError: a is not defined
// En este ejemplo, la variable a se define en el scope de la función miFuncion2 y solo puede ser accedida dentro de la función.
