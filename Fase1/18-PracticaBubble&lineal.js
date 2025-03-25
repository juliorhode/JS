let array = [5, 2, 8, 3, 1, 6, 4];

// Ordenamiento con bubble sort
function bubbleSort(array) {
    // longitud del array
    let n = array.length
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // si el elemento actual es mayor que el siguiente, intercambiarlos
            if (array[j] > array[j + 1]) {
                // asignamos el elemento de la posicion j a la variable
                let temp = array[j]
                // asignamos el elemento de la posicion j+1 a la posicion j
                array[j] = array[j + 1]
                // asignamos el valor de la variable a la posicion j+1
                array[j + 1] = temp
            }
        }
    }
    // devolvemos el array ordenado
    return array
}
let ordenamiento = bubbleSort(array)
console.log("Array ordenado con Bubble Sort:", ordenamiento);

// Rodenamiento por busqueda lineal
function busquedaLineal(array, valor) {
    for (let i = 0; i < array.length; i++) {
        // comparamos el valor del array con el valor que estamos buscando
        if (array[i] === valor) {
            // si el valor existe, devolvemos la posicion del valor
            return i
        }
    }
    // si el valor no existe, devolvemos -1
    return -1
}
let valor = 7
let indice = busquedaLineal(ordenamiento, valor)
console.log("Indice del Valor:", valor, ":", indice);
