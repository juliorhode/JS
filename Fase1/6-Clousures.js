/*
Closures

Un Closure es una función que tiene acceso a su propio scope y al scope de sus funciones externas. Esto significa que una Closure puede acceder a variables y funciones que están definidas en su propio scope y en el scope de sus funciones externas.
*/

function externa() {
    var x = 10;

    function interna() {
        console.log(x);
    }
    return interna;
}

let clousure = externa();
clousure(); // 10
// console.log(x); // ReferenceError: x is not defined
// En este ejemplo, la función interna es una Closure porque tiene acceso al scope de la función externa y puede acceder a la variable x que está definida en ese scope.

/*
Características de las Closures

Las Closures tienen varias características importantes:

Acceso al scope externo: Una Closure puede acceder a variables y funciones que están definidas en su propio scope y en el scope de sus funciones externas.

Acceso a variables locales: Una Closure puede acceder a variables locales que están definidas en su propio scope.

Acceso a variables globales: Una Closure puede acceder a variables globales que están definidas en el scope global.

Acceso a variables de funciones externas: Una Closure puede acceder a variables y funciones que están definidas en el scope de sus funciones externas.

Ventajas de las Closures

Las Closures tienen varias ventajas importantes:

Privacidad: Las Closures pueden ser utilizadas para crear variables y funciones privadas que no pueden ser accedidas desde fuera de la Closure.

Encapsulación: Las Closures pueden ser utilizadas para encapsular variables y funciones en un solo objeto.

Reutilización de código: Las Closures pueden ser utilizadas para reutilizar código en diferentes partes de un programa.

Desventajas de las Closures

Las Closures también tienen algunas desventajas importantes:

Complejidad: Las Closures pueden ser complejas y difíciles de entender para los programadores que no están familiarizados con ellas.

Rendimiento: Las Closures pueden tener un impacto negativo en el rendimiento de un programa si no se utilizan de manera eficiente.

Memoria: Las Closures pueden consumir una gran cantidad de memoria si se utilizan de manera ineficiente.

Conclusión
Las Closures son una característica importante de los lenguajes de programación que permiten a los programadores crear funciones que tienen acceso a su propio scope y al scope de sus funciones externas. Las Closures tienen varias ventajas importantes, como la privacidad, la encapsulación y la reutilización de código, pero también tienen algunas desventajas, como la complejidad, el rendimiento y el consumo de memoria. Por lo tanto, es importante utilizar las Closures de manera eficiente para aprovechar al máximo sus ventajas y minimizar sus desventajas.
*/

/*
Closures y memoria

Una de las cosas importantes que se deben tener en cuenta cuando se trabajan con Closures es la memoria. Cuando se crea una Closure, se crea un nuevo scope que tiene acceso a las variables y funciones del scope externo. Sin embargo, cuando la Closure se ejecuta, el scope externo puede haber sido destruido, lo que significa que las variables y funciones que se acceden desde la Closure pueden no estar disponibles.

Para evitar este problema, se puede utilizar una técnica llamada "captura de variables" que implica crear una copia de las variables que se necesitan en la Closure. De esta manera, cuando la Closure se ejecuta, puede acceder a las variables que necesita sin tener que preocuparse por si el scope externo ha sido destruido.

Closures y seguridad

Otra cosa que se debe tener en cuenta cuando se trabajan con Closures es la seguridad. Debido a que las Closures pueden acceder a variables y funciones del scope externo, pueden ser utilizadas para crear vulnerabilidades de seguridad en un programa.

Para evitar este problema, se puede utilizar una técnica llamada "inmersión de variables" que implica crear una nueva variable que tenga el mismo nombre que la variable que se quiere acceder desde la Closure. De esta manera, cuando la Closure se ejecuta, puede acceder a la variable que necesita sin tener que preocuparse por si la variable original ha sido modificada.

Closures y patrones de diseño

Las Closures también se pueden utilizar para implementar patrones de diseño en JavaScript. Por ejemplo, se pueden utilizar para implementar el patrón de diseño de "fábrica" que implica crear un objeto que tenga un método que devuelve un nuevo objeto.

También se pueden utilizar para implementar el patrón de diseño de "decorador" que implica crear un objeto que tenga un método que devuelve un nuevo objeto que tiene las mismas propiedades que el objeto original, pero con algunas propiedades adicionales.

Closures y bibliotecas

Finalmente, las Closures también se pueden utilizar para crear bibliotecas de JavaScript que sean más fáciles de utilizar y más seguras. Por ejemplo, se pueden utilizar para crear una biblioteca que tenga un método que devuelve un nuevo objeto que tiene las mismas propiedades que el objeto original, pero con algunas propiedades adicionales.

También se pueden utilizar para crear una biblioteca que tenga un método que devuelve un nuevo objeto que tiene las mismas propiedades que el objeto original, pero con algunas propiedades adicionales y que también tenga un método que devuelve un nuevo objeto que tiene las mismas propiedades que el objeto original, pero con algunas propiedades adicionales.
*/

/*
Captura de variables

La captura de variables es una técnica que se utiliza para crear una copia de las variables que se necesitan en una Closure. De esta manera, cuando la Closure se ejecuta, puede acceder a las variables que necesita sin tener que preocuparse por si el scope externo ha sido destruido.

Por ejemplo, si tenemos una función que devuelve una Closure que necesita acceder a una variable x, podemos crear una copia de la variable x dentro de la Closure de la siguiente manera:
*/
function crearClousure(x) {
    var copiaX = x;
    return function () {
        console.log(copiaX);
    }
}
var miClousure = crearClousure(10);
miClousure(); // 10
// En este ejemplo, la función crearClosure devuelve una Closure que necesita acceder a la variable x. Para evitar que la variable x sea destruida cuando la función crearClosure termine de ejecutarse, creamos una copia de la variable x dentro de la Closure. Aqui aplica Inmersión de variables: La inmersión de variables es una técnica que se utiliza para crear una nueva variable que tenga el mismo nombre que la variable que se quiere acceder desde una Closure.De esta manera, cuando la Closure se ejecuta, puede acceder a la variable que necesita sin tener que preocuparse por si la variable original ha sido modificada.

/*
Patrón de diseño de "fábrica"

El patrón de diseño de "fábrica" es un patrón de diseño que se utiliza para crear objetos que tengan un método que devuelve un nuevo objeto. De esta manera, podemos crear objetos que tengan un comportamiento similar sin tener que crear una nueva clase para cada objeto.

Por ejemplo, si queremos crear un objeto que tenga un método que devuelve un nuevo objeto que tenga las mismas propiedades que el objeto original, pero con algunas propiedades adicionales, podemos utilizar el patrón de diseño de "fábrica" de la siguiente manera:
*/
function crearObjeto(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
        crearNuevoObjeto: function (nombreNuevo, edadNueva) {
            return crearObjeto(nombreNuevo, edadNueva);
        }
    }
}
var objeto1 = crearObjeto("Juan", 30); // {nombre: "Juan", edad: 30, crearNuevoObjeto: [Function: crearNuevoObjeto]}
var objeto2 = objeto1.crearNuevoObjeto("Julio", 45); // {nombre: "Julio", edad: 45, crearNuevoObjeto: [Function: crearNuevoObjeto]}
console.log(objeto1);
console.log(objeto2);


console.log(objeto1.nombre); // Juan
console.log(objeto1.edad); // 30


console.log(objeto2.nombre); // Julio
console.log(objeto2.edad); // 45
// En este ejemplo, la función crearObjeto devuelve un objeto que tiene un método que devuelve un nuevo objeto que tiene las mismas propiedades que el objeto original, pero con algunas propiedades adicionales. De esta manera, podemos crear objetos que tengan un comportamiento similar sin tener que crear una nueva clase para cada objeto.

/*
Decorador

Un decorador es un patrón de diseño que se utiliza para agregar comportamiento adicional a un objeto sin modificar su estructura. De esta manera, podemos agregar comportamiento adicional a un objeto sin tener que crear una nueva clase para cada objeto.

Por ejemplo, si queremos agregar un comportamiento adicional a un objeto que tenga un método que devuelve un nuevo objeto, podemos utilizar un decorador de la siguiente manera:
*/
function decorador(objeto) {
    return {
        ...objeto,
        crearNuevoObjeto: function (nombreNuevo, edadNueva) {
            return decorador(crearObjeto(nombreNuevo, edadNueva));
        }
    }
}
var miObjeto = decorador(crearObjeto("Cesar", 18)); // {nombre: "Cesar", edad: 18, crearNuevoObjeto: [Function: crearNuevoObjeto]}
var miObjetoNuevo = miObjeto.crearNuevoObjeto("Adrianno", 14); // {nombre: "Adrianno", edad: 14, crearNuevoObjeto: [Function: crearNuevoObjeto]}

console.log(miObjetoNuevo.nombre); // Adrianno
console.log(miObjetoNuevo.edad); // 14

