/*
Clases Abstractas
Las clases abstractas son una característica de JavaScript que permite definir una clase que no se puede instanciar directamente. En su lugar, se utilizan como plantillas para crear subclases que implementan los métodos y propiedades abstractos de la clase padre.

Una clase abstracta es una clase que no se puede instanciar directamente.
Se utiliza para definir métodos que deben ser implementados por las subclases.
Puede contener métodos con implementación y métodos abstractos (sin implementación).

Características Clave
No Instanciables: 
No se pueden crear objetos de una clase abstracta.

Métodos Abstractos: 
Al menos un método debe ser abstracto, lo que significa que no tiene implementación en la clase abstracta.

Métodos Comunes: 
Puede tener métodos que sí tienen implementación, que pueden ser utilizados por las subclases.
*/
class Animal {
    constructor(nombre) {
        if (this.constructor === Animal) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
        this.nombre = nombre;
    }
    // Método abstracto
    sonido() {
        throw new Error('El método sonido() debe ser implementado por las subclases.');
    }
}
// Ejemplo de subclase
class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    // Implementación del método abstracto
    sonido() {
        console.log(`${this.nombre} hace guau guau.`);
    }
}
// Crear una instancia de la subclase
const perro = new Perro('Firulais');
perro.sonido(); // Firulais hace guau guau.

// Intentar crear una instancia de la clase abstracta
//const animal = new Animal('Animal'); // Error: No se puede instanciar una clase abstracta
//animal.sonido()

// Intentar crear una instancia de la subclase sin implementar el método abstracto
const perro2 = new Perro('Firulais');
perro2.sonido(); // Error: El método sonido() debe ser implementado por las subclases.

//NOTA: Las clases abstractas son útiles para definir una estructura común para un grupo de clases relacionadas, y garantizar que cada subclase implemente los métodos requeridos. Sin embargo, no se pueden instanciar directamente, por lo que deben ser utilizadas como plantillas para crear subclases concretas.


// Clase Abstracta FiguraGeometrica
class figuraGeometrica {
    constructor() {
        if (this.constructor === figuraGeometrica) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
    }
    area() {
        throw new Error("Debe implementar el metodo area en su clase");
    }
    perimetro() {
        throw new Error("Debe implementar el metodo perimetro en su clase");

    }
}
// Implementación de Subclase Circulo
class Circulo extends figuraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio
    }
    area() {
        return Math.PI * this.radio ** 2
    }
    perimetro() {
        return 2 * Math.PI * this.radio
    }
}
// Implementación de Subclase Rectangulo
class Rectangulo extends figuraGeometrica {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    area() {
        return this.ancho * this.alto;
    }
    perimetro() {
        return 2 * (this.ancho + this.alto);
    }
}
const miCirculo = new Circulo(5)
console.log(miCirculo.area()) // 78.53981633974483
console.log(miCirculo.perimetro()) // 31.41592653589793

const miRectangulo = new Rectangulo(4, 6);
console.log(miRectangulo.area()) // 24
console.log(miRectangulo.perimetro()) // 20
