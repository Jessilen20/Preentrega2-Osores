// Alcancia Virtual

/**Funciones
 * Registra ingresos y egresos
 * Calcula el monto final
 * Puedes tener un perfil
 */

 class usuario {
    constructor(nombre, clave, montoInicial) {
        this.name = nombre
        this.key = clave
        this.inicio = parseFloat(montoInicial)
    }
    saludo() {
        return alert("Bienvenido " + (this.name) + "! Espero poder ayudarte a ahorrar mucho n.n")
    }

}

class funciones {
    constructor(tareita, monto, montoInicial) {
        this.task = tareita
        this.mont = parseFloat(monto)
        this.inicio = parseFloat(montoInicial)
    }

    verSaldo() {
        alert("Funcion " + (this.task) + ": \n Tienes en tu alcancía " + (this.inicio))
    }

    ingresos() {
        this.inicio = this.inicio + this.mont
        alert("Funcion " + (this.task) + ": \n Ahora tiene: " + " " + (this.inicio))
    }

    egresos() {
        this.inicio = this.inicio - this.mont

        if (this.inicio <= 0) {
            this.inicio = this.inicio * (-1)
            alert("Funcion " + (this.task) + ": \n No tienes suficiente dinero, te hace falta" + " " + (this.inicio))
        }

        else {
            alert("Funcion " + (this.task) + ": \n Cuidadoo! Te quedan " + (this.inicio))
        }

    }

    salir() {
        alert("No te olvides ahorrar! Regresa pronto")
    }


}

let datosUser = ["Adrian", 12345, 500]
let montoIncio
let tarea
let nombreD
let claveD

let accionUser = []
let tareaF
let montoVariable

tarea = prompt("Bienvenido, ingresa el numero de la función que deseas realizar? \n 1.Iniciar sesión \n 2.Nuevo registro \n 3.Salir")

while (tarea != "3") {

    switch (tarea) {

        case "1":
            nombreD = prompt("Ingresa tu nombre")
            claveD = prompt("Ingresa tu clave")

            if (datosUser[0] == nombreD && datosUser[1] == claveD) {

                alert("Bienvenido a tu alcancia virtual " + nombreD + ". Comenzaste ahorrando " + datosUser[2] + " soles")

                do {

                    tareaF = prompt("Que tarea vas a realizar? \n 1.Ver tu saldo \n 2.Agregar ingresos \n 3.Retirar dinero \n 4.Salir")
                    
                    if (tareaF == "1") {
                        montoVariable = 0
                        accionUser = new funciones(tareaF, montoVariable, datosUser[2])

                        accionUser.verSaldo()
                        datosUser[2] = accionUser[2]
                    }

                    else if (tareaF == "2") {
                        montoVariable = prompt("Ingresa el monto por favor")
                        accionUser = new funciones(tareaF, montoVariable, datosUser[2])

                        accionUser.ingresos()
                        datosUser[2] = accionUser[2]

                    }

                    else if (tareaF == "3") {
                        monto = prompt("Ingresa el monto por favor")
                        accionUser = new funciones(tareaF, monto, datosUser[2])

                        accionUser.egresos()
                        datosUser[2] = accionUser[2]
                    }

                    


                }
                while (tareaF != "4")
            }

            else {
                alert("Revisa tus datos o crea un nuevo perfil")
            }

            break

        case "2":
            nombreD = prompt("Ingresa tu nombre para registrarte")
            claveD = prompt("Ingresa una clave que recordarás")
            montoIncio = prompt("Ingresa el monto inicial de ahorro")

            datosUser = new usuario(nombreD, claveD, montoIncio)
            datosUser.saludo()

            break

    }

    tarea = prompt("Deseas realizar otra función? \n 1.Iniciar sesión \n 2.Nuevo registro \n 3.Salir")

}

alert("No te olvides ahorrar! Regresa pronto")