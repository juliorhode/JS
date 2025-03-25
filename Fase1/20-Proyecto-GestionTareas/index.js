const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tareas = []

function agregarTarea(tarea) {
    tareas.push(tarea)
    console.log("Tarea agregada con exito");
}
function editarTarea(indice, tarea) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice] = tarea
        console.log("Tarea editada con exito");
    } else {
        console.log("Indice invalido");
    }
}
function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1)
        console.log("Tarea eliminada con exito");
    } else {
        console.log("Indice invalido");
    }
}
function mostrarTareasPendientes() {
    console.log("Tareas pendientes");
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado === "pendiente") {
            console.log(`${i + 1}. ${tareas[i].nombre}`);
        }
    }
}
function mostrarTareasCompletadas() {
    console.log("Tareas completadas");
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado === "completada") {
            console.log(`${i + 1}. ${tareas[i].nombre}`);
        }
    }
}

function mostrarMenu() {
    console.log("Sistema de gestion de tareas");
    console.log("-------------------------------");
    console.log("1. Agregar tarea");
    console.log("2. Editar tarea");
    console.log("3. Eliminar tarea");
    console.log("4. Tareas Pendientes");
    console.log("5. Tareas Completadas");
    console.log("6. Salir");
    console.log("-------------------------------");
}
function main() {
    mostrarMenu()
    rl.question("Ingrese una opcion: ", (opcion) => {
        switch (opcion) {
            case "1":
                rl.question("Ingrese el nombre de la tarea: ", (nombre) => {
                    agregarTarea({
                        nombre: nombre,
                        estado: "pendiente"
                    })
                    main()
                })
                break;
            case "2":
                rl.question("Ingrese el indice de la tarea a editar: ", (indice) => {
                    rl.question("Ingrese el nuevo nombre de la tarea: ", (nombre) => {
                        editarTarea(indice - 1, {
                            nombre: nombre,
                            estado: "pendiente"
                        })
                        main()
                    })
                })
                break;
            case "3":
                rl.question("Ingrese el indice de la tarea a eliminar: ", (indice) => {
                    eliminarTarea(indice - 1)
                    main()
                })
                break;
            case "4":
                mostrarTareasPendientes()
                main()
                break;
            case "5":
                mostrarTareasCompletadas()
                main()
                break;
            case "6":
                console.log("Sistema de gestion de tareas cerrado")
                rl.close()
                break;
            default:
                console.log("Opcion invalida")
                main()
        }
    })
}
main()

