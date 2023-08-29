// Ejercicios de introduccion a Javascript

// Los ejercicios que se encuentran completamente comentados son a fin de que el "prompt()" no interrupa la ejecucion del codigo(Ej.:13, 17, 18)

// --------------  Ejercicio N°1  --------------;
console.log("- Ejercicio 1");
let miNombre = "Isaac";
// console.log(miNombre);

// --------------  Ejercicio N°2  --------------;
console.log("- Ejercicio 2");
let miApellido = "Alfonso";
// console.log(miApellido);

// --------------  Ejercicio N°3  --------------;
console.log("- Ejercicio 3");
let miEdad = 32;
// console.log(miEdad);

// --------------  Ejercicio N°4  --------------;
console.log("- Ejercicio 4");
let miMascota = "Otto";
// console.log(miMascota);

// --------------  Ejercicio N°5  --------------;
console.log("- Ejercicio 5");
let edadMascota = 9;
// console.log(edadMascota);

// --------------  Ejercicio N°6  --------------;
console.log("- Ejercicio 6");

console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);

// --------------  Ejercicio N°7  --------------;
console.log("- Ejercicio 7");
let nombreCompleto = miNombre + " " + miApellido;
// console.log(nombreCompleto);

// --------------  Ejercicio N°8  --------------;
console.log("- Ejercicio 8");
let textoPresentacion = miNombre + " " + miApellido + " " + miEdad + " " + miMascota + " " + edadMascota + " " + nombreCompleto;
// console.log(textoPresentacion):

// --------------  Ejercicio N°9  --------------;
console.log("- Ejercicio 9");
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;
// console.log(sumaEdades, restaEdades, productoEdades, divisionEdades);

// --------------  Ejercicio N°10  --------------;
console.log("- Ejercicio 10");
let alumno = {
    nombre: "Isaac",
    apellido: "Alfonso",
    edad: 32,
    sexo: "Masculino",
    nacionalidad: "Argentina",
};
console.table(alumno);
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.sexo);
console.log(alumno.nacionalidad);

// --------------  Ejercicio N°11  --------------;
console.log("- Ejercicio 11");
let mascota = {
    nombre: "Otto",
    raza: "Pitbull",
    edad: 9,
    sexo: "Masculino",
    color: "Gris",
};
console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.raza);
console.log(mascota.edad);
console.log(mascota.sexo);
console.log(mascota.color);

// --------------  Ejercicio N°12  --------------;
console.log("- Ejercicio 12");
let frutas = ["Manzana", "Banana", "Pera", "Uva", "Naranja"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

// --------------  Ejercicio N°13  --------------;
console.log("- Ejercicio 13");
// let edadInd = parseInt(prompt("Ingrese su edad"));
// console.log(typeof(edadInd))
// function esMayorDeEdad(){
//     if ( edadInd >= 18){
//         console.log("Soy mayor de edad: "+ edadInd);
//     } else{
//         console.log("Soy menor de edad: "+ edadInd);
//     }
// };
// esMayorDeEdad();

// --------------  Ejercicio N°14  --------------;
console.log("- Ejercicio 14");
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

// --------------  Ejercicio N°15  --------------;
console.log("- Ejercicio 15");
let familia = [
    {
        papá: "Daniel",
        mamá: "Laura",
    },
    {
        abuelo: "Juan",
        abuela: "Susana",
    },
    {
        hermano: "Santiago",
        hermana: "Laura",
    },
    {
        primo: "Ezequiel",
        prima: "Florencia",
    },
    {
        tío: "Victor",
        tía: "Graciela",
    }
];
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

// --------------  Ejercicio N°16  --------------;
console.log("- Ejercicio 16");
let textoAleatorio = frutas[1]+" "+numeros[3]+" "+ familia[4];
// console.log(textoAleatorio);

// --------------  Ejercicio N°17  --------------;
// console.log("- Ejercicio 17");
// let edadPropia = parseInt(prompt("Ingresa tu edad:"));
// let edadCompañero = parseInt(prompt("Ingresa la edad de tu compañero:"));
// let edadesIguales = edadPropia === edadCompañero;
// let soyMayor = edadPropia > edadCompañero;
// let soyMenor = edadPropia < edadCompañero;
// console.log("Mi edad es igual a la de mi compañero: ", edadesIguales);
// console.log("Mi edad es mayor a la de mi compañero: ", soyMayor);
// console.log("mi edad es menor a la de mi compañero: ", soyMenor);

// --------------  Ejercicio N°18  --------------;
// console.log("- Ejercicio 18");
// let edadIng = parseInt(prompt("Ingrese su edad:"));
// let alturaIng = parseInt(prompt("Ingrese su altura:"));
// let puedeSubir = edadIng > 6 && alturaIng >= 120;
// console.log("Puede subir a la atracción:", puedeSubir);

// --------------  Ejercicio N°19  --------------;
console.log("- Ejercicio 19");
console.log("- Ejercicio 18");
let tipoDePase = prompt("Ingrese su tipo de pase:");
let saldoDisponible = parseInt(prompt("Ingrese saldo disponible:"));
let puedePasar = tipoDePase == "VIP" || saldoDisponible > 1000;
console.log("La persona puede pasar:", puedePasar);
