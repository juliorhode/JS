/* 
Objetos

En JavaScript, un objeto es una colección de propiedades y valores. Los objetos se pueden crear utilizando la sintaxis de objeto literal o utilizando la función Object().

Propiedades y métodos de objetos

En JavaScript, los objetos tienen propiedades y métodos que se pueden utilizar para acceder y manipular sus valores. Las propiedades de un objeto son variables que se pueden acceder utilizando la notación de puntos o corchetes. Los métodos de un objeto son funciones que se pueden llamar utilizando la notación de puntos o corchetes.
*/

const persona = {
    nombre: "julio",
    edad: 45,
    ciudad: "Caracas",
    saludar: function () {
        console.log("Hola a todos");
    }
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);
console.log(persona.saludar());

/* 
Iteración sobre objetos y arrays
En JavaScript, se pueden utilizar bucles para iterar sobre objetos y arrays. Algunos de los bucles más comunes en JavaScript son for, for...in, for...of, while, y do...while.
*/

const persona1 = {
    nombre: "julio",
    edad: 45,
    ciudad: "Caracas"
};

// For...in: Este bucle itera sobre las propiedades de un objeto.
for (const propiedad in persona) {
    console.log(propiedad, ":", persona[propiedad]);
}

// For...of: Este bucle itera sobre los valores de un objeto.
for (const valor of Object.values(persona1)) {
    console.log(valor);

}

// Object.keys(): Este método devuelve un arreglo con las propiedades de un objeto.
const propiedades = Object.keys(persona1)
console.log(propiedades);

// Object.values(): Este método devuelve un arreglo con los valores de un objeto.

const valores = Object.values(persona1)
