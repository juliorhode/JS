/*
Clases

En JavaScript, una clase es una plantilla para crear objetos que tienen propiedades y métodos. Las clases son una forma de definir la estructura y el comportamiento de un objeto.

Las clases en JavaScript se introdujeron en la versión ECMAScript 2015 (ES6) y son una forma de crear objetos de manera más estructurada y organizada.

Para definir una clase en JavaScript, se utiliza la palabra clave class seguida del nombre de la clase. Por ejemplo:

class Persona {
2  // código de la clase
3}

Propiedades y Métodos

Las clases en JavaScript pueden tener propiedades y métodos. Las propiedades son variables que se definen dentro de la clase y se pueden acceder desde fuera de la clase. Los métodos son funciones que se definen dentro de la clase y se pueden llamar desde fuera de la clase.

Constructor

El constructor es un método especial que se llama cuando se crea un objeto de la clase. El constructor se utiliza para inicializar las propiedades de la clase.

Herencia

La herencia es un concepto que permite que una clase herede las propiedades y métodos de otra clase. La herencia se utiliza para crear una jerarquía de clases.

Para heredar de una clase en JavaScript, se utiliza la palabra clave extends seguida del nombre de la clase de la que se quiere heredar. Por ejemplo:

class Empleado extends Persona {
2  // código de la clase
3}
*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);

    }
}

const persona = new Persona('Julio', 45); // Crear un objeto de la clase Persona

// Acceder a las propiedades y métodos de la clase
// Para acceder a las propiedades y métodos de la clase, podemos utilizar la notación de punto(.) seguida del nombre de la propiedad o método.
console.log(persona.nombre); // Salida: Julio
console.log(persona.edad); // Salida: 45
persona.saludar(); // Salida: Hola, me llamo Julio y tengo 45 años

// aplicando desestructuración
const { nombre, edad } = persona;
console.log(nombre); // Salida: Julio
console.log(edad); // Salida: 45

// Herencia
// Para heredar de una clase en JavaScript, se utiliza la palabra clave extends seguida del nombre de la clase de la que se quiere heredar.
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.cargo = cargo;
    }
    estudiar() {
        console.log(`Estoy estudiando la carrera de ${this.carrera}`);
    }
}

const estudiante = new Estudiante('Julio', 45, 'Ingeniería en Sistemas'); // Crear un objeto de la clase Estudiante
estudiante.saludar(); // Salida: Hola, me llamo Julio y tengo 45 años
estudiante.estudiar(); // Salida: Estoy estudiando la carrera de Ingeniería en Sistemas
// En este ejemplo, podemos ver cómo la clase Estudiante hereda las propiedades y métodos de la clase Persona y cómo podemos crear una jerarquía de clases utilizando la herencia.

// Métodos estáticos
// Los métodos estáticos son métodos que se pueden llamar sin crear un objeto de la clase. Para definir un método estático en una clase en JavaScript, se utiliza la palabra clave static seguida del nombre del método. Por ejemplo:
class Utilidades {
    static sumar(a, b) {
        return a + b;
    }
}
console.log(Utilidades.sumar(5, 3)); // Salida: 8
// En este ejemplo, podemos ver cómo se define un método estático en la clase Utilidades y cómo se llama al método sin crear un objeto de la clase.

// Propiedades estáticas
// Las propiedades estáticas son propiedades que se pueden acceder sin crear un objeto de la clase. Para definir una propiedad estática en una clase en JavaScript, se utiliza la palabra clave static seguida del nombre de la propiedad. Por ejemplo:
class Configuracion {
    idioma = 'es';
    static contador = 0;
}
console.log(Configuracion.contador); // Salida: 0
// En este ejemplo, podemos ver cómo se define una propiedad estática en la clase Configuracion y cómo se accede a la propiedad sin crear un objeto de la clase.

// Getters y Setters
// Los getters y setters son métodos especiales que se utilizan para acceder y modificar propiedades de un objeto. Los getters se utilizan para obtener el valor de una propiedad, y los setters se utilizan para establecer el valor de una propiedad.

// Para definir un getter en una clase en JavaScript, se utiliza la palabra clave get seguida del nombre del getter. Por ejemplo:
class Persona1 {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(valor) {
        this._nombre = valor;
    }
    get edad() {
        return this._edad;
    }
    set edad(valor) {
        this._edad = valor;
    }
}
const persona1 = new Persona1('Cesar', 18)
console.log(persona1.nombre); // Salida: Cesar
console.log(persona1.edad); // Salida: 18
persona1.nombre = 'Pedro';
persona1.edad = 25;
console.log(persona1.nombre); // Salida: Pedro
console.log(persona1.edad); // Salida: 25


/*
La diferencia entre acceder a una propiedad directamente y utilizar un getter o setter es que los getters y setters permiten controlar cómo se accede y se modifica la propiedad.

Cuando accedes a una propiedad directamente, como en ejemplos anteriores, estás accediendo directamente a la propiedad y no hay control sobre cómo se accede o se modifica. Esto puede ser problemático si necesitas realizar alguna lógica adicional al acceder o modificar la propiedad.

Por otro lado, cuando utilizas un getter o setter, estás creando un método que se encarga de acceder o modificar la propiedad. Esto te permite realizar lógica adicional, como validar los valores, realizar cálculos, etc.

En el ejemplo, no se utilizan los métodos set y get explícitamente. En su lugar, se accede a la propiedad nombre y edad directamente, como si fueran propiedades normales.

La razón por la que esto funciona es que los getters y setters se pueden utilizar de manera implícita en JavaScript. Cuando se accede a una propiedad que tiene un getter o setter, JavaScript automáticamente llama al método getter o setter correspondiente.

Por ejemplo, cuando se escribe persona.nombre, JavaScript llama automáticamente al método getter nombre que se definió en la clase Persona. De manera similar, cuando se escribe persona.nombre = "Pedro", JavaScript llama automáticamente al método setter nombre que se definió en la clase Persona.

Así que, aunque no se utilicen los métodos set y get explícitamente, los getters y setters se están utilizando de manera implícita en el código.
*/

