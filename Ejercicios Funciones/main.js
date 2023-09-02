// Ejercicios de Funfiones


// --------------  Ejercicio N°1  --------------;
console.log("- Ejercicio 1");
let nombre = "";
let apellido = "";
function saludar(nombre, apellido) {
    console.log("Hola mi nombre es " + nombre + ", y mi apellido es " + apellido);
};
saludar("Isaac", "Alfonso");

// --------------  Ejercicio N°2  --------------;
console.log("- Ejercicio 2");
let numero1 = 0;
let numero2 = 0;
function multiplicar(numero1, numero2) {
    let producto = numero1 * numero2;
    console.log("El producto de " + numero1 + " * " + numero2 + " es, " + producto);
};
multiplicar(5, 6);

// --------------  Ejercicio N°3  --------------;
console.log("- Ejercicio 3");
let base = 0;
let altura = 0;
function areaTriangulo(base, altura) {
    let areaT = (base * altura) / 2;
    console.log("El area de un triangulo de base " + base + " y altura " + altura + " es, " + areaT);
};
areaTriangulo(5, 3);
let lado1 = 0;
let lado2 = 0;
let lado3 = 0;
function perimetroTriangulo(lado1, lado2, lado3) {
    let perimtroT = lado1 + lado2 + lado3;
    console.log("El perimetro de un triangulo cuyo primer lado es " + lado1 + ", su segundo lado es " + lado2 + " y su tercer lado es " + lado3 + " es, " + perimtroT);
};
perimetroTriangulo(4, 5, 6);

// --------------  Ejercicio N°4  --------------;
console.log("- Ejercicio 4");
let cantProducto = 0;
let precioProducto = 0;
function calcularPrecio(cantProducto, precioProducto) {
    let precio = cantProducto * precioProducto;
    if (cantProducto >= 20) {
        console.log("El precio de su compra es " + precio + " pero al haber comprado 20 productos o mas tiene un descuento del 20% y le queda un total de " + (precio = precio * 0.8));
    } else if (cantProducto >= 10) {
        console.log("El precio de su compra es " + precio + " pero al haber comprado 10 productos o mas tiene un descuento del 10% y le queda un total de " + (precio = precio * 0.9));
    } else {
        console.log("El precio de su compra es " + precio);
    };
};
calcularPrecio(5, 2);
calcularPrecio(15, 2);
calcularPrecio(25, 2);

// --------------  Ejercicio N°5  --------------;
console.log("- Ejercicio 5");
let edad = 0;
// function esMayorDeEdad(edad) {
//     if (edad >= 18) {
//         console.log("La edad ingresada es " +edad+" años, por lo que es mayor de edad.");
//     } else {
//         console.log("La edad ingresada es " +edad+" años, por lo que no es mayor de edad.")
//     };
// };
function esMayorDeEdad(edad) {
    console.log(edad >= 18 ? "La edad ingresada es " + edad + " años, por lo que es mayor de edad" : "La edad ingresada es " + edad + " años, por lo que es menor de edad")
};
esMayorDeEdad(18);
esMayorDeEdad(30);
esMayorDeEdad(17);
    
// --------------  Ejercicio N°6  --------------;
console.log("- Ejercicio 6");
// let ingresoAnual = 0;
function calcularImpuesto(ingresoAnual) {
    if (ingresoAnual <= 10000) {
        console.log("Al ser el ingreso anual de $" + ingresoAnual + " tiene un interes del 10% por lo que deberá pagar $" + ingresoAnual * 1.1);
    } else if (ingresoAnual > 10000 && ingresoAnual < 20000) {
        console.log("Al ser el ingreso anual de $" + ingresoAnual + " tiene un interes del 15% por lo que deberá pagar $" + ingresoAnual * 1.15);
    } else {
        console.log("Al ser el ingreso anual de $" + ingresoAnual + " tiene un interes del 20% por lo que deberá pagar $" + ingresoAnual * 1.20);
    };
};
calcularImpuesto(5000);
calcularImpuesto(15000);
calcularImpuesto(25000);

// --------------  Ejercicio N°7  --------------;
console.log("- Ejercicio 7");
let diaDeLaSemana = 0;
function verificarDia(diaDeLaSemana) {
    switch (diaDeLaSemana) {
        case 1:
            console.log("El día ingresado es Lunes por lo que es día laboral")
            break;
        case 2:
            console.log("El día ingresado es Martes por lo que es día laboral")
            break;
        case 3:
            console.log("El día ingresado es Miercoles por lo que es día laboral")
            break;
        case 4:
            console.log("El día ingresado es Jueves por lo que es día laboral")
            break;
        case 5:
            console.log("El día ingresado es Viernes por lo que es día laboral")
            break;
        case 6:
            console.log("El día ingresado es Sabado por lo que no es día laboral")
            break;
        case 7:
            console.log("El día ingresado es Domingo por lo no que es día laboral")
            break;
        default:
            console.log("Ingrese otro numero de día")
            break;
    };
};
verificarDia(3);
verificarDia(6);
verificarDia(10);

