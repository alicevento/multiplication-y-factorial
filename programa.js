//Una empresa del área educacional te ha contratado para desarrollar programas que les permitan realizar distintos tipos de cálculos matemáticos para facilitar el aprendizaje de sus estudiantes. Para ello, en una primera etapa, te han pedido un programa que al ingresar un número, obtenga las tablas de multiplicar desde el 1 hasta el número ingresado. Además, debe mostrar el factorial para los mismos números. El resultado debe ser mostrado por la consola del navegador, por ejemplo, si ingresan el número 3 en la consola deberían obtener el siguiente resultado:
//1 x 3 = 3
//2 x 3 = 6
//3 x 3 = 9
//Factorial de 1 es: 1
//Factorial de 2 es: 2
//Factorial de 3 es: 6

//1.-Crear una función para solicitar el número y validar antes de mostrar el resultado que el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al rango, mostrar un mensaje al usuario: "número fuera del rango". Utilizar las características propias de ES6 como let y arrow function para desarrollar el ejercicio.

// Función principal del programa
const Programa = () => {
    // Función para solicitar el número y validar
    const solicitarNumero = () => {
        let numero = prompt("Ingrese un número entre 1 y 20");
        // Validar si el número está dentro del rango válido
        if (numero >= 1 && numero <= 20) {
            mostrarResultados(numero);
        } else {
            console.log("El número ingresado no es válido");
        }
    }

    // Función para mostrar los resultados
    const mostrarResultados = (numero) => {
        console.log(`El número ingresado es: ${numero}`);
        
        // Tablas de multiplicar y factoriales
        for (let i = 1; i <= numero; i++) {
            let multiplicacion = i * numero;
            let factorial = calcularFactorial(i);
            console.log(`${i} x ${numero} = ${multiplicacion}`);
            console.log(`El factorial de ${i} es: ${factorial}`);
        }
    }

    // Función para calcular el factorial
    const calcularFactorial = (num) => {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }

    // Solicitar número al usuario
    solicitarNumero();
}

// Ejecutar el programa cuando se carga la página
Programa()

//No logro hacer que se imprima en la consola el orden que pide en el examen.
