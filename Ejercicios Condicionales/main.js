// Ejercicios de Condicionales

// Los ejercicios que se encuentran completamente comentados son a fin de que el "prompt()" no interrupa la ejecucion de codigo (Ej.: 6, 7, 8, 9, 10, 11 y 12)

// --------------  Ejercicio N°1  --------------;
console.log("- Ejercicio 1");
let primerNumero = 0;
let segundoNumero = 0;
function primeroMayor(primerNumero, segundoNumero) {
    if (primerNumero > segundoNumero) {
        console.log("El primer numero es mayor que el segundo");
    } else {
        console.log("El segundo numero es mayor que el primero");
    }
};
primeroMayor(5, 3);
primeroMayor(5, 8);

// --------------  Ejercicio N°2  --------------;
console.log("- Ejercicio 2");
let num1 = 0;
let num2 = 0;
function sonIguales(num1, num2) {
    if (num1 === num2) {
        console.log("Ambos numeros son iguales");
    } else {
        console.log("Ambos numeros son distintos")
    };
};
sonIguales(5, 6);
sonIguales(5, 5);

// --------------  Ejercicio N°3  --------------;
console.log("- Ejercicio 3");
let numero1 = 0;
let numero2 = 0;
function esMayor(numero1, numero2) {
    if (numero1 < numero2) {
        console.log("El numero " + numero1 + " es menor que el numero " + numero2);
    } else if (numero1 > numero2) {
        console.log("El numero " + numero1 + " es mayor que el numero " + numero2);
    } else {
        console.log("Ambos numero son iguales.");
    }
};
esMayor(5, 5);
esMayor(5, 3);
esMayor(5, 8);

// --------------  Ejercicio N°4  --------------;
console.log("- Ejercicio 4");
let primerNum = 0;
let segundoNum = 0;
let tercerNum = 0;
function menorNum(primerNum, segundoNum, tercerNum) {
    if (primerNum <= segundoNum && primerNum <= tercerNum) {
        console.log("Entre los numeros " + primerNum + ", " + segundoNum + " y " + tercerNum + ", el numero " + primerNum + " es el menor");
    } else if (segundoNum <= primerNum && segundoNum <= tercerNum) {
        console.log("Entre los numeros " + primerNum + ", " + segundoNum + " y " + tercerNum + ", el numero " + segundoNum + " es el menor");
    } else {
        console.log("Entre los numeros " + primerNum + ", " + segundoNum + " y " + tercerNum + ", el numero " + tercerNum + " es el menor");
    };
};
menorNum(1, 2, 3);
menorNum(2, 1, 3);
menorNum(3, 2, 1);

// --------------  Ejercicio N°5  --------------;
console.log("- Ejercicio 5");
let persona1 = {
    nombre: "Isaac",
    edad: 32,
    altura: 165,
};
let persona2 = {
    nombre: "Juan",
    edad: 34,
    altura: 160,
};
function masAlto() {
    if (persona1.altura > persona2.altura) {
        console.log("La persona numero 1 es mas alta.")
    } else {
        console.log("La persona numero 2 es mas alta.");
    };
};
function mayorEdad() {
    if (persona1.edad > persona2.edad) {
        console.log("La persona numero 1 es mayor")
    } else {
        console.log("La persona numero 2 es mayor");
    };
};
masAlto();
mayorEdad();

// --------------  Ejercicio N°6  --------------;
console.log("- Ejercicio 6");
// let nuevaPersona = {
//     nombre: prompt("Ingresa tu nombre"),
//     edad: prompt("Ingresa tu edad"),
//     altura: prompt("Ingresa tu altura"),
//     vision: prompt("Ingresa tu vision"),
// };
// function estaCapacitado(){
//     if(nuevaPersona.edad>=18 && nuevaPersona.altura>=150 && nuevaPersona.vision>=8){
//         console.log("Como eres mayor de edad, tiene la altura minima requerida y tu visio es mayor a 8 de 10 puedes conducir");
//     } else {
//         console.log("Al no cumplir los requesitos, no puedes conducir.");
//     };
// };
// estaCapacitado();

// --------------  Ejercicio N°7  --------------;
console.log("- Ejercicio 7");
// let controlEntrada = {
//     nombre: prompt("Ingresa tu nombre:"),
//     pase: prompt("Ingresa el tipo de pase (VIP o normal):"),
//     tieneEntrada: prompt("Ingrese si tiene entrada (Si o No):")
// };
// function tieneAcceso() {
//     if (controlEntrada.nombre === "Isaac") {
//         console.log("Por llamarte 'Isaac' tienes ingreso libre");
//     } else if (controlEntrada.pase === "VIP") {
//         console.log("Por tener pase VIP tienes ingreso libre");
//     } else if (controlEntrada.nombre !== "Isaac" && controlEntrada.pase !== "VIP" && controlEntrada.tieneEntrada === "Si") {
//         let usoEntrada = prompt("¿Desea usar su entrada? (SI o No)");
//         if (usoEntrada === "Si") {
//             console.log("Por usar su entrada tienes ingreso libre");
//         } else {
//             console.log("Gracias por asistir al evento")
//         };
//     } else if (controlEntrada.nombre !== "Isaac" && controlEntrada.pase !== "VIP" && controlEntrada.tieneEntrada === "No") {
//         let dineroDisp = prompt("¿Cuanto dinero dispone?");
//         if (dineroDisp >= 1000) {
//             console.log("La venta de la entrada es exitosa");
//         } else {
//             console.log("Venta rechazada")
//         };
//     };
// };
// tieneAcceso()

// --------------  Ejercicio N°8  --------------;
console.log("- Ejercicio 8");
// let numeroIncognita = Math.floor(Math.random() * 10) + 1;
// let intentos = 3;
// function adivinanza() {
//     for (let intentos = 3; intentos > 0; intentos--) {
//         let numeroIngresado = parseInt(prompt("Ingresa un número de 1 a 10. Intentos restantes: " + intentos));
//         if (numeroIngresado === numeroIncognita) {
//             console.log("¡Felicitaciones, adivinaste el número!");
//         } else if (numeroIngresado > numeroIncognita) {
//             console.log("El número ingresado es mayor al número incógnita");
//         } else {
//             console.log("El número es menor al número incógnita");
//             if (intentos === 1) {
//                 console.log("Agotaste tus intentos. El número incógnita era " + numeroIncognita);
//             };
//         };
//     };
// };
// adivinanza();

// --------------  Ejercicio N°9  --------------;
console.log("- Ejercicio 9");
// let edadPersona = parseInt(prompt("Ingresa tu edad:"));
// function detectorEtario() {
//     if (edadPersona >= 0 && edadPersona <= 12) {
//         console.log("La edad de " + edadPersona + " años es la edad de un infante");
//     } else if (edadPersona > 13 && edadPersona <= 18) {
//         console.log("La edad de " + edadPersona + " años es la edad de un adolescente");
//     } else if (edadPersona > 19 && edadPersona <= 45) {
//         console.log("La edad de " + edadPersona + " años es la edad de un mayor-joven");
//     } else if (edadPersona > 45 && edadPersona <= 99) {
//         console.log("La edad de " + edadPersona + " años es la edad de un anciano");
//     } else {
//         console.log(prompt("En realidad tienes esta edad?."));
//     };
// };
// detectorEtario();

// --------------  Ejercicio N°10  --------------;
console.log("- Ejercicio 10");
// let jugador1 = prompt("Jugador uno ingrese: PIEDRA, PAPEL o TIJERA");
// let jugador2 = prompt("Jugador dos ingrese: PIEDRA, PAPEL o TIJERA");
// function esGanador() {
//     if ((jugador1 !== "PIEDRA" && jugador1 !== "PAPEL" && jugador1 !== "TIJERA") || (jugador2 !== "PIEDRA" && jugador2 !== "PAPEL" && jugador2 !== "TIJERA")) {
//         console.log("uno de los jugadores hizo trampa")
//     } else if (jugador1 === jugador2) {
//         console.log("Empate");
//     } else if (
//         (jugador1 === "PIEDRA" && jugador2 === "TIJERA") ||
//         (jugador1 === "TIJERA" && jugador2 === "PAPEL") ||
//         (jugador1 === "PAPEL" && jugador2 === "PIEDRA")
//     ) {
//         console.log("Ha ganado el Jugador 1");
//     } else {
//         console.log("Ha ganado el Jugador 2");
//     }
// }
// esGanador();

// --------------  Ejercicio N°11  --------------;
console.log("- Ejercicio 11");
// let colorElegido = prompt("Elija un color:");
// function eleccionColor() {
//     switch (colorElegido) {
//         case "Blanco":
//         case "Negro":
//             console.log("Falta de color.");
//             break;
//         case "Verde":
//             console.log("El color de la naturaleza.");
//             break;
//         case "Azul":
//             console.log("El color del agua.");
//             break;
//         case "Amarillo":
//             console.log("El color del sol.");
//             break;
//         case "Rojo":
//             console.log("El color del fuego.");
//             break;
//         case "Marron":
//             console.log("El color de la tierra.");
//             break;
//         default:
//             console.log("Excelente eleccion, no lo teniamos pensado.");
//             break;
//     }
// }
// eleccionColor();

// --------------  Ejercicio N°12  --------------;
console.log("- Ejercicio 12");
// let numeroUno = parseInt(prompt("Ingresa el primer numero"));
// let numeroDos = parseInt(prompt("Ingresa el segundo numero"));
// let operacion = prompt("Suma, Resta, Multiplicacion y/o Division");
// function suma(num1, num2, oper) {
//     if (oper === "Suma") {
//         console.log("La suma de " + num1 + " y " + num2 + " es " + num1 + num2);
//     };
// };
// function resta(num1, num2, oper) {
//     if (oper === "Resta") {
//         console.log("La resta de " + num1 + " y " + num2 + " es " + num1 + num2);
//     };
// };
// function multiplicacion(num1, num2, oper) {
//     if (oper === "Multiplicacion") {
//         console.log("El producto de " + num1 + " y " + num2 + " es " + num1 * num2);
//     };
// };
// function division(num1, num2, oper) {
//     if (oper === "Division") {
//         if (num2 !== 0) {
//             console.log("El cociente de " + num1 + " y " + num2 + " es " + num1 / num2);
//         } else {
//             console.log("Error el divisor ingresado es CERO");
//         };
//     };
// };
// suma(numeroUno, numeroDos, operacion);
// resta(numeroUno, numeroDos, operacion);
// multiplicacion(numeroUno, numeroDos, operacion);
// division(numeroUno, numeroDos, operacion);

// --------------  Ejercicio N°13  --------------;
console.log("- Ejercicio 13");
let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let documento = parseInt(prompt("Ingresa tu numero de documento"));
function verificaDatos() {
    let datosIngresados = {
        nombre: nombre,
        apellido: apellido,
        documento: documento,
    };
    console.log(datosIngresados);
    let confirmando = prompt("Son correctos estos datos? Si o No");
    if (confirmando === "Si") {
        console.table(datosIngresados);
        console.log("Hola " + datosIngresados.nombre + " " + datosIngresados.apellido + " tu registro fue exitoso");
    } else {
        console.log(datosIngresados.nombre + " vuelve a intentarlo en un mes");
    };
};
verificaDatos();