/*
Algoritmos de ordenamiento

Bubble Sort (O(n²)): Algoritmo de ordenamiento que funciona comparando cada par de elementos adyacentes y cambiándolos si están en el orden incorrecto.

Selection Sort (O(n²)): Algoritmo de ordenamiento que funciona seleccionando el elemento más pequeño del arreglo y cambiándolo con el primer elemento.

Insertion Sort (O(n²)): Algoritmo de ordenamiento que funciona insertando cada elemento del arreglo en su posición correcta.

Quick Sort (O(n log n)): Algoritmo de ordenamiento que funciona dividiendo el arreglo en dos partes y ordenando cada parte de manera recursiva.

Merge Sort (O(n log n)): Algoritmo de ordenamiento que funciona dividiendo el arreglo en dos partes y ordenando cada parte de manera recursiva.

Heap Sort (O(n log n)): Algoritmo de ordenamiento que funciona utilizando una estructura de datos llamada "montículo" para ordenar el arreglo.

Radix Sort (O(nk)): Algoritmo de ordenamiento que funciona ordenando el arreglo según los dígitos de cada elemento.

Counting Sort (O(n + k)): Algoritmo de ordenamiento que funciona contando el número de ocurrencias de cada elemento en el arreglo.

Bucket Sort (O(n + k)): Algoritmo de ordenamiento que funciona dividiendo el arreglo en buckets y ordenando cada bucket de manera individual.

Clasificación de algoritmos

Arreglos pequeños: Bubble Sort, Selection Sort, Insertion Sort
Arreglos medianos: Quick Sort, Merge Sort, Heap Sort
Arreglos grandes: Quick Sort, Merge Sort, Heap Sort, Radix Sort
Arreglos con elementos repetidos: Counting Sort, Bucket Sort
Arreglos con elementos negativos: Quick Sort, Merge Sort, Heap Sort
Arreglos con elementos flotantes: Quick Sort, Merge Sort, Heap Sort
Arreglos con restricciones de memoria: Insertion Sort, Selection Sort
Arreglos con restricciones de tiempo: Quick Sort, Merge Sort, Heap Sort

Algoritmos para arreglos pequeños
--------------------------------------------------

Bubble Sort (O(n²)): adecuado para arreglos pequeños (menos de 10 elementos)
Selection Sort (O(n²)): adecuado para arreglos pequeños (menos de 10 elementos)
Insertion Sort (O(n²)): adecuado para arreglos pequeños (menos de 10 elementos)

Algoritmos para arreglos medianos
--------------------------------------------------

Quick Sort (O(n log n)): adecuado para arreglos medianos (entre 10 y 100 elementos)
Merge Sort (O(n log n)): adecuado para arreglos medianos (entre 10 y 100 elementos)
Heap Sort (O(n log n)): adecuado para arreglos medianos (entre 10 y 100 elementos)

Algoritmos para arreglos grandes
--------------------------------------------------

Quick Sort (O(n log n)): adecuado para arreglos grandes (más de 100 elementos)
Merge Sort (O(n log n)): adecuado para arreglos grandes (más de 100 elementos)
Heap Sort (O(n log n)): adecuado para arreglos grandes (más de 100 elementos)
Radix Sort (O(nk)): adecuado para arreglos grandes (más de 100 elementos)

Algoritmos para arreglos con elementos repetidos
--------------------------------------------------
Counting Sort (O(n + k)): adecuado para arreglos con elementos repetidos
Bucket Sort (O(n + k)): adecuado para arreglos con elementos repetidos

Algoritmos para arreglos con elementos negativos
--------------------------------------------------

Quick Sort (O(n log n)): adecuado para arreglos con elementos negativos
Merge Sort (O(n log n)): adecuado para arreglos con elementos negativos
Heap Sort (O(n log n)): adecuado para arreglos con elementos negativos

Algoritmos para arreglos con elementos flotantes
--------------------------------------------------

Quick Sort (O(n log n)): adecuado para arreglos con elementos flotantes
Merge Sort (O(n log n)): adecuado para arreglos con elementos flotantes
Heap Sort (O(n log n)): adecuado para arreglos con elementos flotantes

Algoritmos para arreglos con restricciones de memoria
--------------------------------------------------

Insertion Sort (O(n²)): adecuado para arreglos con restricciones de memoria
Selection Sort (O(n²)): adecuado para arreglos con restricciones de memoria

Algoritmos para arreglos con restricciones de tiempo
--------------------------------------------------

Quick Sort (O(n log n)): adecuado para arreglos con restricciones de tiempo
Merge Sort (O(n log n)): adecuado para arreglos con restricciones de tiempo
Heap Sort (O(n log n)): adecuado para arreglos con restricciones de tiempo


Es importante tener en cuenta que la elección del algoritmo de ordenamiento depende de las necesidades específicas del problema y de las características del arreglo que se desea ordenar.
*/

/*
Ordenamiento: Bubble Sort (O(n²))
----------------------------------

El Bubble Sort es un algoritmo de ordenamiento que funciona comparando cada par de elementos adyacentes y cambiándolos si están en el orden incorrecto.

El Bubble Sort funciona de la siguiente manera:

    - Comienza en el primer elemento del arreglo.

    - Compara el primer elemento con el segundo elemento.

    - Si el primer elemento es mayor que el segundo elemento, los intercambia.

    - Repite el proceso hasta que llegue al final del arreglo.

    - El arreglo queda ordenado de manera ascendente.
*/
function bubbleSort(arr) {
    // recorre el arreglo desde el primer elemento hasta el penúltimo elemento.
    for (let i = 0; i < arr.length - 1; i++) {
        // recorre el arreglo desde el primer elemento hasta el elemento antes del último.
        for (let j = 0; j < arr.length - i - 1; j++) {
            // si el elemento actual es mayor que el elemento siguiente, intercambia ambos.
            if (arr[j] > arr[j + 1]) {
                // crea una variable temporal para almacenar el valor del elemento actual.
                let temp = arr[j];
                // asigna el valor del elemento siguiente al elemento actual.
                arr[j] = arr[j + 1];
                // asigna el valor de la variable temporal al elemento siguiente.
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11]
console.log('Bubble Sort:', bubbleSort(arr));

// console.log(arr.sort());

/* 
Selection Sort 
----------------

El Selection Sort es un algoritmo de ordenamiento que funciona seleccionando el elemento más pequeño del arreglo y colocándolo en la primera posición, luego selecciona el elemento más pequeño del resto del arreglo y lo coloca en la segunda posición, y así sucesivamente.

El Selection Sort funciona de la siguiente manera:

    - Comienza en el primer elemento del arreglo.

    - Selecciona el elemento más pequeño del arreglo.

    - Cambia el primer elemento con el elemento más pequeño.

    - Repite el proceso hasta que llegue al final del arreglo.

    - El arreglo queda ordenado de manera ascendente.
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}
console.log('Selection Sort:', selectionSort(arr));

/*
Insertion Sort
--------------

El Insertion Sort es un algoritmo de ordenamiento que funciona insertando cada elemento del arreglo en su posición correcta.

El Insertion Sort funciona de la siguiente manera:

    - Comienza en el segundo elemento del arreglo.

    - Inserta cada elemento del arreglo en su posición correcta.

    - Repite el proceso hasta que llegue al final del arreglo.

    - El arreglo queda ordenado de manera ascendente.
*/
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log('Insert Sort:', insertionSort(arr));

/*
Quick Sort
------------

El Quick Sort es un algoritmo de ordenamiento que funciona dividiendo el arreglo en dos partes y ordenando cada parte de manera recursiva.

El Quick Sort funciona de la siguiente manera:

    - Comienza en el primer elemento del arreglo.

    - Divide el arreglo en dos partes: izquierda y derecha.

    - Ordena cada parte de manera recursiva.

    - Combina las dos partes ordenadas.

    - El arreglo queda ordenado de manera ascendente.
*/
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let izquierda = [];
    let derecha = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            izquierda.push(arr[i]);
        } else {
            derecha.push(arr[i]);
        }
    }
    return quickSort(izquierda).concat(pivot, quickSort(derecha));
}
console.log('Quick Sort:', quickSort(arr));

/*
Merge Sort
-----------

El Merge Sort es un algoritmo de ordenamiento que funciona dividiendo el arreglo en dos partes y ordenando cada parte de manera recursiva.

El Merge Sort funciona de la siguiente manera:

    - Comienza en el primer elemento del arreglo.

    - Divide el arreglo en dos partes: izquierda y derecha.
    
    - Ordena cada parte de manera recursiva.

    - Combina las dos partes ordenadas.

    - El arreglo queda ordenado de manera ascendente.
*/
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mitad = Math.floor(arr.length / 2);
    let izquierda = arr.slice(0, mitad);
    let derecha = arr.slice(mitad);
    return merge(mergeSort(izquierda), mergeSort(derecha));
}

function merge(izquierda, derecha) {
    let resultado = [];
    while (izquierda.length > 0 && derecha.length > 0) {
        if (izquierda[0] <= derecha[0]) {
            resultado.push(izquierda.shift());
        } else {
            resultado.push(derecha.shift());
        }
    }
    return resultado.concat(izquierda, derecha);
}
console.log('Merge Sort:', mergeSort(arr));

/*
Heap Sort (O(n log n))
------------------------

El Heap Sort es un algoritmo de ordenamiento que funciona utilizando una estructura de datos llamada "montículo" para ordenar el arreglo. El montículo es una estructura de datos que se utiliza para almacenar elementos en un arreglo dada una condición de ordenamiento. En el caso del Heap Sort, la condición de ordenamiento es que el padre es siempre menor que sus hijos. 
*/

function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}

console.log('Heap Sort:', heapSort(arr));

/*
Radix Sort
----------------
El Radix Sort es un algoritmo de ordenamiento que funciona utilizando un enfoque dígito a dígito para ordenar los elementos del arreglo. El algoritmo funciona dándole prioridad a los dígitos más significativos de cada elemento y luego a los dígitos menos significativos. Este algoritmo es especialmente útil para ordenar números enteros.
*/

function radixSort(arr) {
    let max = Math.max(...arr);
    let exp = 1;
    while (max / exp > 0) {
        countingSort(arr, exp);
        exp *= 10;
    }
    return arr;
}

function countingSort(arr, exp) {
    let n = arr.length;
    let output = new Array(n);
    let count = new Array(10);
    for (let i = 0; i < 10; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < n; i++) {
        let index = Math.floor(arr[i] / exp);
        count[index % 10]++;
    }
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    let i = n - 1;
    while (i >= 0) {
        let index = Math.floor(arr[i] / exp);
        output[count[index % 10] - 1] = arr[i];
        count[index % 10]--;
        i--;
    }
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

let arr1 = [170, 45, 75, 90, 802, 24, 2, 66];
console.log('Radix Sort:', radixSort(arr1));

/*
Counting Sort
----------------
El Counting Sort es un algoritmo de ordenamiento que funciona contando el número de veces que aparece cada elemento en el arreglo. Luego, utiliza esta información para crear un arreglo ordernado. Este algoritmo es especialmente útil para ordenar elementos con un rango limitado de valores.
*/

function countingSort(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let range = max - min + 1;
    let count = new Array(range);
    for (let i = 0; i < range; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }
    let j = 0;
    for (let i = 0; i < range; i++) {
        while (count[i] > 0) {
            arr[j] = i + min;
            j++;
            count[i]--;
        }
    }
    return arr;
}

let arr2 = [4, 2, 2, 8, 3, 3, 1];
console.log('Counting Sort:', countingSort(arr2));


/*
{
  "algoritmos": [
    {
      "nombre": "Bubble Sort",
      "utilidad": "Baja",
      "tiempoDeRespuesta": "O(n^2)",
      "eficiencia": "Baja",
      "complejidad": "Alta",
      "cantidadDeDatos": "Pequeña",
      "limites": "No es adecuado para grandes conjuntos de datos",
      "consumoDeRecursos": "Alto"
    },
    {
      "nombre": "Selection Sort",
      "utilidad": "Media",
      "tiempoDeRespuesta": "O(n^2)",
      "eficiencia": "Media",
      "complejidad": "Alta",
      "cantidadDeDatos": "Media",
      "limites": "No es adecuado para grandes conjuntos de datos",
      "consumoDeRecursos": "Alto"
    },
    {
      "nombre": "Quick Sort",
      "utilidad": "Alta",
      "tiempoDeRespuesta": "O(n log n)",
      "eficiencia": "Alta",
      "complejidad": "Media",
      "cantidadDeDatos": "Grande",
      "limites": "Es adecuado para grandes conjuntos de datos",
      "consumoDeRecursos": "Bajo"
    },
    {
      "nombre": "Merge Sort",
      "utilidad": "Alta",
      "tiempoDeRespuesta": "O(n log n)",
      "eficiencia": "Alta",
      "complejidad": "Media",
      "cantidadDeDatos": "Grande",
      "limites": "Es adecuado para grandes conjuntos de datos",
      "consumoDeRecursos": "Bajo"
    },
    {
      "nombre": "Heap Sort",
      "utilidad": "Alta",
      "tiempoDeRespuesta": "O(n log n)",
      "eficiencia": "Alta",
      "complejidad": "Media",
      "cantidadDeDatos": "Grande",
      "limites": "Es adecuado para grandes conjuntos de datos",
      "consumoDeRecursos": "Bajo"
    },
    {
      "nombre": "Radix Sort",
      "utilidad": "Alta",
      "tiempoDeRespuesta": "O(nk)",
      "eficiencia": "Alta",
      "complejidad": "Baja",
      "cantidadDeDatos": "Grande",
      "limites": "Es adecuado para grandes conjuntos de datos",
      "consumoDeRecursos": "Bajo"
    },
    {
      "nombre": "Counting Sort",
      "utilidad": "Media",
      "tiempoDeRespuesta": "O(n + k)",
      "eficiencia": "Media",
      "complejidad": "Baja",
      "cantidadDeDatos": "Pequeña",
      "limites": "No es adecuado para grandes conjuntos de datos",
      "consumoDeRecursos": "Alto"
    },
    {
      "nombre": "Bucket Sort",
      "utilidad": "Media",
      "tiempoDeRespuesta": "O(n + k)",
      "eficiencia": "Media",
      "complejidad": "Baja",
      "cantidadDeDatos": "Pequeña",
      "limites": "No es adecuado para grandes conjuntos de datos",
      "consumoDeRecursos": "Alto"
    }
  ]
}


tiempo de Respuesta

Para calcular el tiempo de respuesta de algoritmos con diferentes complejidades temporales, puedes seguir estos pasos:

Identificar la complejidad: Tienes las siguientes complejidades:

O(n²)
O(n²)
O(n log n)
O(nk)
O(n + k)
Definir el tamaño de entrada: Asigna un valor a n (por ejemplo, n = 1000) y, si es necesario, un valor a k (por ejemplo, k = 10).

Calcular el tiempo de respuesta:

Para O(n²):

Tiempo de respuesta = C * n²
Ejemplo: Si C = 1, entonces para n = 1000, el tiempo de respuesta = 1 * 1000² = 1,000,000.
Para O(n²) (segunda instancia):

Tiempo de respuesta = C * n²
Usando el mismo n, el resultado será el mismo: 1,000,000.
Para O(n log n):

Tiempo de respuesta = C * n * log(n)
Ejemplo: Si C = 1, entonces para n = 1000, el tiempo de respuesta = 1 * 1000 * log(1000) (logaritmo en base 2 o 10, según el contexto).
Para O(nk):

Tiempo de respuesta = C * n * k
Ejemplo: Si C = 1, n = 1000 y k = 10, entonces el tiempo de respuesta = 1 * 1000 * 10 = 10,000.
Para O(n + k):

Tiempo de respuesta = C * (n + k)
Ejemplo: Si C = 1, n = 1000 y k = 10, entonces el tiempo de respuesta = 1 * (1000 + 10) = 1010.
Resumen de Resultados

O(n²): 1,000,000
O(n²): 1,000,000
O(n log n): Depende del valor de log(n)
O(nk): 10,000
O(n + k): 1010
Este método te permite estimar el tiempo de respuesta de diferentes algoritmos en función de su complejidad y el tamaño de la entrada.

You

explica para tonto

BLACKBOXAI

¡Claro! Imagina que tienes una lista de números y quieres ordenarlos de menor a mayor. Hay diferentes formas de hacerlo, y cada forma tiene un tiempo de respuesta diferente.

O(n²): Esto significa que el tiempo de respuesta es proporcional al cuadrado del tamaño de la lista. Por ejemplo, si la lista tiene 1000 números, el tiempo de respuesta sería de 1.000.000 operaciones.

O(n log n): Esto significa que el tiempo de respuesta es proporcional al tamaño de la lista multiplicado por el logaritmo del tamaño de la lista. Por ejemplo, si la lista tiene 1000 números, el tiempo de respuesta sería de 1000 * log(1000) operaciones.

O(nk): Esto significa que el tiempo de respuesta es proporcional al tamaño de la lista multiplicado por un factor k. Por ejemplo, si la lista tiene 1000 números y k es 10, el tiempo de respuesta sería de 10.000 operaciones.

O(n + k): Esto significa que el tiempo de respuesta es proporcional al tamaño de la lista más un factor k. Por ejemplo, si la lista tiene 1000 números y k es 10, el tiempo de respuesta sería de 1010 operaciones.

En resumen, el tiempo de respuesta es una medida de cuánto tiempo tarda un algoritmo en completar una tarea. Los diferentes algoritmos tienen diferentes tiempos de respuesta, y algunos son más rápidos que otros.

Aquí hay un ejemplo para que lo entiendas mejor:

Si tienes una lista de 1000 números y quieres ordenarlos de menor a mayor, un algoritmo con un tiempo de respuesta de O(n²) tardaría 1.000.000 operaciones en completar la tarea.

Un algoritmo con un tiempo de respuesta de O(n log n) tardaría 1000 * log(1000) operaciones en completar la tarea.

Un algoritmo con un tiempo de respuesta de O(nk) tardaría 10.000 operaciones en completar la tarea si k es 10.

Un algoritmo con un tiempo de respuesta de O(n + k) tardaría 1010 operaciones en completar la tarea si k es 10.
*/