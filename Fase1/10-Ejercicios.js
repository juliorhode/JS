/*
Ejercicio 1

Crea una clase abstracta llamada FiguraGeometrica que tenga un método abstracto llamado area(). Luego, crea dos subclases llamadas Circulo y Rectangulo que hereden de FiguraGeometrica y implementen el método area().
*/
class figuraGeometrica {
    constructor() {
        if (this.constructor === figuraGeometrica) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
    }
    area() {
        throw new Error("Debe implementar el metodo area en su clase");
    }
}

class Circulo extends figuraGeometrica {
    constructor(radio) {
        super(); // Llama al constructor de la clase padre
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio ** 2;
    }
}

class Rectangulo extends figuraGeometrica {
    constructor(ancho, alto) {
        super(); // Llama al constructor de la clase padre
        this.ancho = ancho;
        this.alto = alto;
    }
    area() {
        return this.alto * this.ancho;
    }
}

const miCirculo = new Circulo(5);
console.log(miCirculo.area()); // 78.54
const miRectangulo = new Rectangulo(4, 6);
console.log(miRectangulo.area()); // 24

// const miCirculo2 = new figuraGeometrica();
// miCirculo2.area(); // Error: No se puede instanciar una clase abstracta

// const miRectangulo2 = new figuraGeometrica();
// miRectangulo2.area(); // Error: No se puede instanciar una clase abstracta

/*
Ejercicio 2

Crea una clase abstracta llamada Vehiculo que tenga un método abstracto llamado arrancar(). Luego, crea dos subclases llamadas Coche y Moto que hereden de Vehiculo y implementen el método arrancar().
*/

class Vehiculo {
    constructor() {
        if (this.constructor === Vehiculo) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
    }
    arrancar() {
        throw new Error("Debe implementar el metodo arrancar en su clase");
    }
}

class Coche extends Vehiculo {
    constructor() {
        super(); // Llama al constructor de la clase padre
    }
    arrancar() {
        console.log('Arrancando el coche');
    }
}

class Moto extends Vehiculo {
    constructor() {
        super(); // Llama al constructor de la clase padre
    }
    arrancar() {
        console.log('Arrancando la moto');

    }
}

const miCoche = new Coche();
miCoche.arrancar(); // Arrancando el coche
// const miCoche2 = new Vehiculo();
// miCoche2.arrancar(); // Error: No se puede instanciar una clase abstracta

const miMoto = new Moto();
miMoto.arrancar(); // Arrancando la moto
// const miMoto2 = new Vehiculo();
// miMoto2.arrancar(); // Error: No se puede instanciar una clase abstract

/*
Ejercicio 3

Crea una clase abstracta llamada Persona que tenga un método abstracto llamado saludar(). Luego, crea dos subclases llamadas Estudiante y Profesor que hereden de Persona y implementen el método saludar().
*/
class Persona {
    constructor() {
        if (this.constructor === Persona) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
    }
    saludar() {
        throw new Error("DEbe implementar el metodo saludar en su clase");
    }
}

class Estudiante extends Persona {
    constructor() {
        super(); // Llama al constructor de la clase padre
    }
    saludar() {
        console.log('Hola, soy un estudiante');
    }
}

class Profesor extends Persona {
    constructor() {
        super(); // Llama al constructor de la clase padre
    }
    saludar() {
        console.log('Hola, soy un profesor');
    }
}

const miEstudiante = new Estudiante();
miEstudiante.saludar(); // Hola, soy un estudiante
// const miEstudiante2 = new Persona();
// miEstudiante2.saludar(); // Error: No se puede instanciar una clase abstracta

const miProfesor = new Profesor();
miProfesor.saludar(); // Hola, soy un profesor
// const miProfesor2 = new Persona();
// miProfesor2.saludar(); // Error: No se puede instanciar una clase abstracta

/*
Ejercicio 1: Crear una clase que represente un libro

Crea una clase llamada Libro que tenga las siguientes propiedades:

titulo
autor
anioDePublicacion
numeroDePaginas
La clase debe tener un método llamado descripcion que devuelva una cadena que describa el libro.
*/

/* 
constructor(datos) {
    if (Array.isArray(datos)) {
        const [titulo, autor, anioDePublicacion, numeroDePaginas] = datos;
        this.titulo = titulo;
        this.autor = autor;
        this.anioDePublicacion = anioDePublicacion;
        this.numeroDePaginas = numeroDePaginas;
    } else {
        const propiedades = ["titulo", "autor", "anioDePublicacion", "numeroDePaginas"];
        for (let i = 0; i < datos.length; i++) {
            this[propiedades[i]] = datos[i];
        }
    } 
    
    Separación de responsabilidades: 
    Un constructor debería ser responsable de inicializar las propiedades de la clase, pero no de realizar lógica compleja. Separar la lógica de inicialización en un método propio ayuda a mantener la separación de responsabilidades.

    Reutilización de código: 
    Si la lógica de inicialización es compleja, es posible que se necesite reutilizarla en otros lugares de la clase. Separar la lógica de inicialización en un método propio permite reutilizar el código de manera más fácil.
    
    Mejora de la legibilidad: 
    Un constructor con lógica compleja puede ser difícil de leer y entender. Separar la lógica de inicialización en un método propio ayuda a mejorar la legibilidad del código.
}
*/
class Libro {
    // mejorando el constructor

    // ...datos convierte una serie de argumentos en un array
    /*
    ejemplo:

    const miLibro = new Libro('Don Quijote', 'Miguel de Cervantes', 1605, 863);
    El array de 'datos' seria: ['Don Quijote', 'Miguel de Cervantes', 1605, 863]

    const miLibro = new Libro(['Don Quijote', 'Miguel de Cervantes', 1605, 863]);
    El array de 'datos' seria: [['Don Quijote', 'Miguel de Cervantes', 1605, 863]]
    */

    // el operador spread (...) se utiliza para convertir la lista de argumentos en un array.
    constructor(...datos) {
        this.inicializador(datos);
    }

    inicializador(datos) {
        //  array de arrays: [['Don Quijote', 'Miguel de Cervantes', 1605, 863]]
        if (Array.isArray(datos[0])) {
            const [titulo, autor, anioDePublicacion, numeroDePaginas] = datos[0];
            this.titulo = titulo;
            this.autor = autor;
            this.anioDePublicacion = anioDePublicacion;
            this.numeroDePaginas = numeroDePaginas;
            // array de valores individuales: ['Don Quijote', 'Miguel de Cervantes', 1605, 863]
        } else if (Array.isArray(datos)) {
            const [titulo, autor, anioDePublicacion, numeroDePaginas] = datos;
            this.titulo = titulo;
            this.autor = autor;
            this.anioDePublicacion = anioDePublicacion;
            this.numeroDePaginas = numeroDePaginas;
        }
    }

    descripcion() {
        return `El libro ${this.titulo} del autor ${this.autor} tiene ${this.numeroDePaginas} pagina y fue publicado en el año ${this.anioDePublicacion}`;
    }
}
const miLibro = new Libro('Don Quijote', 'Miguel de Cervantes', 1605, 863);
console.log(miLibro.descripcion()); // El libro Don Quijote del autor Miguel de Cervantes tiene 863 paginas y fue publicado en el año 1605

const miLibro2 = new Libro(["El principito", "Antoine de Saint-Exupéry", 1943, 96]);
console.log(miLibro2.descripcion());
/*
Ejercicio 2: Crear una clase que represente un estudiante

Crea una clase llamada Estudiante que tenga las siguientes propiedades:

nombre
apellido
edad
curso
La clase debe tener un método llamado presentacion que devuelva una cadena que presente al estudiante.
*/
class Estudiantes {
    constructor(nombre, apellido, edad, curso) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.curso = curso
    }
    presentacion() {
        return `El estudiante ${this.nombre} ${this.apellido} de ${this.edad} años, esta cursando la materia ${this.curso}`
    }
}

const estudiante = new Estudiantes('Cesar', 'Ferrer', 18, 'Fisica')
console.log(estudiante.presentacion());

/*
Ejercicio 3: Crear una clase que represente un vehículo

Crea una clase llamada Vehiculo que tenga las siguientes propiedades:

marca
modelo
anioDeFabricacion
color
La clase debe tener un método llamado descripcion que devuelva una cadena que describa el vehículo.
*/

class Vehiculo1 {
    constructor(marca, modelo, anioDeFabricacion, color) {
        this.marca = marca
        this.modelo = modelo
        this.anioDeFabricacion = anioDeFabricacion
        this.color = color
    }
    descripcion() {
        return `El vehiculo es un ${this.marca} ${this.modelo} de color ${this.color}, fabricado en el año ${this.anioDeFabricacion}`
    }
}
const vehiculo = new Vehiculo1('Toyota', 'Corolla', 2015, 'Azul')
console.log(vehiculo.descripcion());







