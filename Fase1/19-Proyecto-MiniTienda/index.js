// Archivo principal del programa
const fs = require('fs')

// Funcion para leer el archivo de productos
function leerProducto() {
    // Leer el archivo
    const contenido = fs.readFileSync('productos.txt', 'utf8')

    // Si el archivo esta vacio, devolvemos un array vacio
    if (contenido === '') {
        return []
    }

    // devolver el arrray de productos
    return JSON.parse(contenido)
}

// Funcion para agregar un producto al inventario
function agregaProducto(nombre, descripcion, precio) {
    // leer el archivo de productos
    const productos = leerProducto()

    // Agregar el nuevo producto al array de productos
    productos.push({
        nombre,
        descripcion,
        precio
    })

    // Guardamos el array de productos en el archivo de productos
    guardaProducto(productos)
}

// Funcion para eliminar un producto del inventario
function eliminaProducto(nombre) {
    // leer el archivo de productos
    const productos = leerProducto()

    // Buscar el producto a eliminar
    const indice = productos.findIndex(producto => producto.nombre === nombre)

    // Si el producto existe, eliminarlo del array de productos
    if (indice !== -1) {
        productos.splice(indice, 1)
    }

    // Guardamos el array de productos en el archivo de productos
    guardaProducto(productos)
}

// Funcion para modificar un producto del inventario
function modificaProducto(nombre, nuevaDescripcion, nuevoPrecio, indice = 0) {
    // leer el archivo de productos
    const productos = leerProducto()

    // Buscar el producto a modificar
    if (indice == 0) {
        const indice = productos.findIndex(producto => producto.nombre === nombre)
    }

    // Si el producto existe, modificarlo
    if (indice !== -1) {
        productos[indice].descripcion = nuevaDescripcion
        productos[indice].precio = nuevoPrecio
    }

    // Guardamos el array de productos en el archivo de productos
    guardaProducto(productos)
}



// Funcion para guardar productos
function guardaProducto(productos) {
    // Guarda el array de productos en el archivo de productos
    fs.writeFileSync('productos.txt', JSON.stringify(productos))
}

function ordenaProducto(productos) {
    return productos.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1
        } else if (a.nombre > b.nombre) {
            return 1
        } else {
            return 0
        }
    })
}

function buscaProducto(producto, valor) {
    let izquierda = 0
    let derecha = producto.length - 1
    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2)
        if (producto[medio].nombre === valor) {
            return medio
        } else if (producto[medio].nombre < valor) {
            izquierda = medio + 1
        } else {
            derecha = medio - 1
        }
    }
    return -1
}

// agregaProducto("Manzana 1", "Manzanas importadas", 6.99)
// agregaProducto("Manzana 2", "Manzanas importadas", 8.99)
// agregaProducto("Peras 1", "Peras importadas", 7.99)
// agregaProducto("Peras 2", "Peras importadas", 9.99)


// eliminaProducto("Peras 2")
let productoBuscar = "Manzana 1"

let respuesta = leerProducto()
console.log(respuesta);
respuesta = ordenaProducto(respuesta)
let indice = buscaProducto(respuesta, productoBuscar)
// console.log(indice);
if (indice !== -1) {
    console.log(`El producto se encuentra en el indice ${indice}`);
} else {
    console.log("El producto no se encuentra en el array");
}

// modificaProducto("Peras 1", 'Manzanas importadas', 10.99, indice)
// modificaProducto("Manzana 2", 'Manzanas importadas', 5.99, indice)
modificaProducto("Manzana 1", 'Manzanas importadas', 7.99, indice)

