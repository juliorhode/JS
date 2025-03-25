/*
Herencia

La herencia es un concepto fundamental en la programación orientada a objetos. Permite que una clase herede las propiedades y métodos de otra clase, lo que facilita la creación de jerarquías de clases.

En JavaScript, la herencia se puede implementar utilizando la palabra clave extends. Por ejemplo:
*/
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`Estoy estudiando ${this.carrera}.`);
    }
}

const estudiante = new Estudiante("Juan", 30, "Ingeniería");
estudiante.saludar(); // Hola, me llamo Juan y tengo 30 años.
estudiante.estudiar(); // Estoy estudiando Ingeniería.
estudiante.saludar('Esto es un polimorfismo'); // Esto es un polimorfismo, me llamo Juan y tengo 30 años.


/*
Polimorfismo

El polimorfismo es la capacidad de una clase para tomar diferentes formas. En JavaScript, el polimorfismo se puede implementar utilizando la sobrecarga de métodos.
*/
class Mensajes {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        console.log(`Hola, ${this.nombre} ${this.apellido}.`);

    }
    saludar(mensaje) {
        console.log(`${mensaje}, ${this.nombre} ${this.apellido}.`);
    }

}
const mensaje = new Mensajes("Juan", "Perez");
mensaje.saludar(); // Hola, Juan Perez.
mensaje.saludar('Esto es un polimorfismo'); // Esto es un polimorfismo, Juan Perez.

/*
Encapsulación

La encapsulación es la capacidad de una clase para ocultar sus propiedades y métodos internos, de manera que solo se puedan acceder a ellos a través de métodos públicos. Esto significa que los datos y la lógica de la clase están "encapsulados" dentro de la clase, y no se pueden acceder directamente desde fuera de la clase.

La encapsulación es importante porque permite que las clases sean más seguras y fáciles de mantener. Al ocultar los datos y la lógica internos de la clase, se evita que se puedan modificar accidentalmente o de manera no autorizada. Además, la encapsulación permite que las clases sean más flexibles y reutilizables, ya que se pueden cambiar los detalles de implementación sin afectar a las clases que las utilizan.
*/

class Persona1 {
    #nombre;
    #edad;
    //private edad; // se utiliza en TypeScript. Esta palabra clave no es soportada por todos los navegadores y entornos de ejecución de JavaScript.

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.#nombre} y tengo ${this.#edad} años.`);
    }
}
const persona1 = new Persona1("Julio", 45);
persona1.saludar(); // Hola, me llamo Julio y tengo 45 años.
console.log(persona1.nombre); // undefined
console.log(persona1.edad); // undefined

//NOTA: para acceder a las propiedades privadas de una clase se debe utilizar el método get y set.

/*
Metodo super()
se utiliza dentro de una clase hija para llamar al constructor de la clase padre. Esto es esencial para inicializar correctamente las propiedades heredadas y permite acceder a métodos de la clase padre desde la clase hija.

Uso de super():

Inicialización de Propiedades: Cuando creas una subclase, es necesario llamar a super() en el constructor antes de usar this. Esto asegura que las propiedades de la clase padre se inicialicen correctamente.

Acceso a Métodos de la Clase Padre: Además de inicializar propiedades, super() permite acceder a métodos de la clase padre. Esto es útil cuando deseas extender o modificar el comportamiento de un método heredado.
*/
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido`);

    }
}
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre) // llama al constructor de la clase padre Animal
        this.raza = raza
    }
    hacerSonido() {
        super.hacerSonido(); // llama al método hacerSonido de la clase padre Animal
        console.log(`${this.nombre} ladra`);
    }
}
const miPerro = new Perro('Firulais', 'Labrador');
miPerro.hacerSonido(); // Firulais hace un sonido, Firulais ladra
/*
Consideraciones Importantes

Uso Obligatorio: Si no llamas a super() en el constructor de una subclase, obtendrás un error. Esto es porque JavaScript necesita asegurarse de que la clase padre se inicialice antes de que la subclase pueda usar this.

Métodos Estáticos: También puedes usar super para llamar a métodos estáticos de la clase padre. Esto es útil cuando necesitas acceder a funcionalidades que son comunes a todas las instancias de la clase.
*/
class Vehiculo {
    static tipo() {
        return "Vehiculo";
    }
}
class Coche extends Vehiculo {
    static tipo() {
        return super.tipo() + ' de tipo Coche'
    }
}
console.log(Coche.tipo());

