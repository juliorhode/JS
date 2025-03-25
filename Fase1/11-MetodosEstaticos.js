/* 
Métodos estáticos

Un método estático es un método que se puede llamar sin necesidad de crear una instancia de la clase. En otras palabras, un método estático es un método que pertenece a la clase en sí misma, y no a una instancia de la clase. 

En JavaScript, se puede definir un método estático utilizando la palabra clave static antes del nombre del método.
*/
class Persona {
    static saludar() {
        console.log("Hola!");
    }
}
// pertenece a la clase en sí misma, y no a una instancia de la clase
Persona.saludar(); // "Hola!"

/*  
Propiedades estáticas

Una propiedad estática es una propiedad que se puede acceder sin necesidad de crear una instancia de la clase. En otras palabras, una propiedad estática es una propiedad que pertenece a la clase en sí misma, y no a una instancia de la clase.

En JavaScript, se puede definir una propiedad estática utilizando la palabra clave static antes del nombre de la propiedad.
*/
class Persona1 {
    static nombre = "Juan";
}
//propiedad estática que se puede acceder sin necesidad de crear una instancia de la clase Persona.
console.log(Persona1.nombre); // "Juan"

/*
Ventajas de los métodos y propiedades estáticos

Los métodos y propiedades estáticos tienen varias ventajas, como:

    No requieren la creación de una instancia de la clase para ser utilizados.
    Pueden ser utilizados como funciones o variables globales.
    Pueden ser utilizados para implementar patrones de diseño como el patrón de diseño Singleton.
    Desventajas de los métodos y propiedades estáticos

Los métodos y propiedades estáticos también tienen algunas desventajas, como:

    No pueden acceder a las propiedades de la instancia de la clase.
    No pueden ser sobrescritos por las instancias de la clase.
*/


/*  
Utiliza métodos estáticos para funciones de utilidad: Los métodos estáticos son ideales para funciones de utilidad que no dependen del estado de la clase.

Utiliza propiedades estáticas para constantes: Las propiedades estáticas son ideales para constantes que no cambian durante la ejecución del programa.

Evita utilizar métodos estáticos para funciones que dependen del estado de la clase: Los métodos estáticos no tienen acceso al estado de la clase, por lo que no son ideales para funciones que dependen del estado de la clase.

Utiliza métodos estáticos para funciones que no requieren una instancia de la clase: Los métodos estáticos pueden ser llamados sin necesidad de crear una instancia de la clase.

Ten cuidado con la visibilidad de los métodos y propiedades estáticos: Los métodos y propiedades estáticos pueden ser accesados desde cualquier parte del programa, por lo que debes tener cuidado con la visibilidad de los mismos.

RECOMENDACIONES

Utiliza métodos y propiedades estáticos de manera moderada: Los métodos y propiedades estáticos pueden ser útiles, pero no debes abusar de ellos. Utilízalos solo cuando sea necesario.

Documenta tus métodos y propiedades estáticos: Es importante documentar tus métodos y propiedades estáticos para que otros desarrolladores puedan entender su propósito y cómo utilizarlos.

Utiliza nombres descriptivos para tus métodos y propiedades estáticos: Utiliza nombres descriptivos para tus métodos y propiedades estáticos para que sea fácil entender su propósito.
*/

// métodos estáticos para funciones de utilidad
class Calculadora {
    // Estos métodos pueden ser llamados sin necesidad de crear una instancia de la clase.
    static suma(a, b) {
        return a + b;
    }
    static resta(a, b) {
        return a - b;
    }
}
console.log(Calculadora.suma(2, 2));
console.log(Calculadora.resta(3, 2));

// Evita utilizar métodos estáticos para funciones que dependen del estado de la clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // saludar() intenta acceder al estado de la clase (nombre y edad). Sin embargo, como el método estático no tiene acceso al estado de la clase, el código produce un error.
    static saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona = new Persona('Juan', 30);
Persona.saludar(); // Error: this.nombre y this.edad son undefined

// Utiliza métodos estáticos para funciones que no requieren una instancia de la clase
class Fecha {
    // Como este método no requiere una instancia de la clase, es ideal para ser un método estático.
    static obtenerFechaActual() {
        return new Date();
    }
}

console.log(Fecha.obtenerFechaActual()); // Fecha actual