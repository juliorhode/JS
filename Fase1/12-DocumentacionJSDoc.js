/*
¿Qué es JSDoc?

JSDoc es un estándar de documentación para JavaScript que permite agregar comentarios a tus funciones y métodos para que se muestren en la documentación. JSDoc es una herramienta que te ayuda a crear documentación para tu código de manera automática.

¿Por qué es importante la documentación de código?

La documentación de código es importante porque te permite:

-Entender mejor tu propio código
-Compartir tu código con otros desarrolladores
-Facilitar la colaboración en proyectos de código abierto
-Mejorar la calidad y la mantenibilidad de tu código

¿Cómo se utiliza JSDoc?

Para utilizar JSDoc, debes agregar comentarios a tus funciones y métodos en un formato específico. Estos comentarios se llaman "bloques de documentación" y se escriben en un estilo específico.

1) Instalar Node.js: JSDoc requiere que tengas Node.js instalado en tu computadora. Puedes descargar e instalar Node.js desde el sitio web oficial de Node.js.

2) Instalar JSDoc: Una vez que tengas Node.js instalado, puedes instalar JSDoc utilizando el comando en la terminal:
npm install -g jsdoc 

3) Crear un archivo de configuración: JSDoc requiere un archivo de configuración para funcionar correctamente. Puedes crear un archivo de configuración llamado jsdoc.json en el directorio raíz de tu proyecto.

4) Configurar el archivo de configuración: En el archivo de configuración, debes especificar la ubicación de tus archivos de código y la ubicación donde deseas que se genere la documentación.

5) Instalar un tema: JSDoc utiliza un tema para generar la documentación. Puedes instalar un tema utilizando el comando npm install jsdoc-theme-default en la terminal.


Archivo de configuración para JSDoc:

{
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "include": ["./src"],
    "includePattern": ".js$",
    "excludePattern": "(node_modules/|coverage/)"
  },
  "plugins": ["default"],
  "opts": {
    "destination": "./docs/",
    "recurse": true,
    "template": "default"
  }
}
En este ejemplo, el archivo de configuración especifica que:

- Se deben incluir todos los archivos con extensión .js en el directorio ./src.
- Se deben excluir todos los archivos en el directorio node_modules y coverage.
- Se debe generar la documentación en el directorio ./docs.
- Se debe utilizar el tema default para generar la documentación.


Tags para la documentación:

Tags de función
    @function: Describe una función.
    @name: Especifica el nombre de la función.
    @description: Describe la función.
    @param: Describe un parámetro de la función.
    @returns: Describe el valor de retorno de la función.
    @throws: Describe una excepción que puede ser lanzada por la función.
Tags de parámetro
    @param: Describe un parámetro de la función.
    @name: Especifica el nombre del parámetro.
    @type: Especifica el tipo del parámetro.
    @description: Describe el parámetro.
Tags de valor de retorno
    @returns: Describe el valor de retorno de la función.
    @type: Especifica el tipo del valor de retorno.
    @description: Describe el valor de retorno.
Tags de excepción
    @throws: Describe una excepción que puede ser lanzada por la función.
    @name: Especifica el nombre de la excepción.
    @description: Describe la excepción.
Tags de propiedad
    @property: Describe una propiedad de un objeto.
    @name: Especifica el nombre de la propiedad.
    @type: Especifica el tipo de la propiedad.
    @description: Describe la propiedad.
Tags de evento
    @event: Describe un evento que puede ser lanzado por un objeto.
    @name: Especifica el nombre del evento.
    @description: Describe el evento.
Tags de autor y licencia
    @author: Especifica el autor del código.
    @license: Especifica la licencia bajo la cual se distribuye el código.
Otros tags
    @version: Especifica la versión del código.
    @since: Especifica la versión en la que se agregó la función o propiedad.
    @deprecated: Indica que la función o propiedad está obsoleta.
    @see: Proporciona una referencia a otra función o propiedad relacionada.


    ¿Cómo se genera la documentación con JSDoc?

Para generar la documentación con JSDoc, debes ejecutar el comando jsdoc en la terminal, seguido del nombre del archivo o directorio que contiene el código que deseas documentar.

Ejemplo:
jsdoc miArchivo.js

Esto generará un archivo de documentación en formato HTML que puedes abrir en un navegador para ver la documentación de tu código.

Para abrirlo:
open miArchivo.html

Se puede ver la documentacion en https://jsdoc.app/
*/

/**
 * @class Persona
 * @author Julio
 * @version 1.0
 * @since 2024-03-18
 */
class Persona {
    /**
     * @constructor
     * @param {string} nombre - nombre de la persona
     * @param {number} edad  - edad de la persona
     */
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    /**
     * Metodo que devuelve el nombre de la persona
     * @method getNombre
     * @returns {string} Nombre de la persona
     */
    getNombre() {
        return this.nombre
    }
    /**
     * @method getEdad
     * @returns {number} Edad de la persona
     */
    getEdad() {
        return this.edad
    }
    /**
     * @method setNombre
     * @param {string} nombre Nuevo nombre de la persona
     */
    setNombre(nombre) {
        this.nombre = nombre
    }
    /**
     * @method setEdad
     * @param {number} edad Nueva edad de la persona
     */
    setEdad(edad) {
        this.edad = edad
    }
}

const persona = new Persona('Julio', 25)
console.log(persona.getNombre())
console.log(persona.getEdad())

persona.setNombre('Cesar')
persona.setEdad(18)
console.log(persona.getNombre())
console.log(persona.getEdad())

/*
l comando jsdoc tiene varias opciones adicionales que puedes utilizar para personalizar la generación de la documentación. A continuación, te presento algunas de las opciones más comunes:

-d o --destination: Especifica el directorio donde se generará la documentación. Por ejemplo: jsdoc 12-DocumentacionJSDoc.js -d ./docs

-t o --template: Especifica el tema o plantilla que se utilizará para generar la documentación. Por ejemplo: jsdoc 12-DocumentacionJSDoc.js -t default

-c o --config: Especifica el archivo de configuración que se utilizará para generar la documentación. Por ejemplo: jsdoc 12-DocumentacionJSDoc.js -c jsdoc.json

-r o --recurse: Especifica si se deben incluir los archivos de código en subdirectorios. Por ejemplo: jsdoc 12-DocumentacionJSDoc.js -r

-q o --quiet: Especifica si se deben mostrar mensajes de información durante la generación de la documentación. Por ejemplo: jsdoc 12-DocumentacionJSDoc.js -q

-v o --verbose: Especifica si se deben mostrar mensajes de información detallados durante la generación de la documentación. Por ejemplo: jsdoc 12-DocumentacionJSDoc.js -v

-h o --help: Muestra la ayuda para el comando jsdoc. Por ejemplo: jsdoc -h

-o o --output: Especifica el nombre del archivo de salida para la documentación. Por ejemplo : jsdoc 12-DocumentacionJSDoc.js -o index.html

Ejemplos:

jsdoc 12-DocumentacionJSDoc.js -d ./docs -t default -r -q
Este comando generaría la documentación en el directorio ./docs, utilizando el tema default, incluyendo archivos de código en subdirectorios y sin mostrar mensajes de información durante la generación de la documentación.

jsdoc 12-DocumentacionJSDoc.js -o mi-documentacion.html
Este comando generaría la documentación en un archivo llamado mi-documentacion.html.

jsdoc 12-DocumentacionJSDoc.js -d ./docs -o mi-documentacion.html
Este comando generaría la documentación en el directorio ./docs y en un archivo llamado mi-documentacion.html.

extensiones de VSCode que pueden facilitar la creación de documentación. A continuación, te menciono algunas de las más populares:

JSDoc: Esta extensión proporciona soporte para JSDoc en VSCode, lo que te permite crear documentación para tu código de manera fácil y rápida.
    - Soporte para JSDoc y otros formatos de documentación
    - Creación de documentación automática
    - Comentarios de documentación personalizados
    - Integración con otros herramientas de desarrollo
    - Soporte para múltiples lenguajes de programación

Docthis: Esta extensión te permite crear documentación para tu código de manera automática, utilizando un formato de documentación estándar.

Documentation Comments: Esta extensión te permite crear comentarios de documentación para tu código de manera fácil y rápida, utilizando un formato de documentación estándar.

TypeDoc: Esta extensión te permite crear documentación para tu código de manera automática, utilizando un formato de documentación estándar.
    - enfoque más en la creación de documentación para proyectos de TypeScript.

JSDoc Comments: Esta extensión te permite crear comentarios de documentación para tu código de manera fácil y rápida, utilizando un formato de documentación estándar.

*/