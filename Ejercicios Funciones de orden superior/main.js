// Ejercicios de Funciones de orden superior

// --------------  Ejercicio N°1  --------------;
console.log("- Ejercicio 1");
// -Funcion nombrada:
// function imprimirMensaje(mensaje) {
//   console.log(mensaje);
// };
// - Funcion flecha:
let saludo = (mensaje) => mensaje;
console.log(saludo(`Hola`));

// --------------  Ejercicio N°2  --------------;
console.log("- Ejercicio 2");
// -Funcion nombrada:
// function crearMultiplicacion(numero1, numero2) {
//   let resultado = numero1 * numero2;
//   return resultado;
// }
// - Funcion flecha:
let crearMultiplicacion = (numero1, numero2) => {
  let resultado = numero1 * numero2;
  return resultado;
};

console.log(crearMultiplicacion(2, 3));

// --------------  Ejercicio N°3  --------------;
console.log("- Ejercicio 3");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nuevoArray = array.map(crearMultiplicacion);
console.log(nuevoArray);

// --------------  Ejercicio N°4  --------------;
console.log("- Ejercicio 4");
function topCervezasMayorGraduacion(cervezas) {
  let listaDeCervezas = [...cervezas];
  let listaCervezasOrdenadas = listaDeCervezas.sort(
    (cerveza1, cerveza2) => cerveza2.abv - cerveza1.abv
  );
  cervezasMasAlcoholicas = listaCervezasOrdenadas.slice(0, 10);
  return cervezasMasAlcoholicas;
}

topCervezasMayorGraduacion(beers);
console.log(cervezasMasAlcoholicas);

// --------------  Ejercicio N°5  --------------;
console.log("- Ejercicio 5");
function topCervezasMenosAmargas(cervezas) {
  let listaDeCervezas = [...cervezas];
  let listaCervezasOrdenadas = listaDeCervezas.sort(
    (cerveza1, cerveza2) => cerveza1.ibu - cerveza2.ibu
  );
  cervezasMenosAmargas = listaCervezasOrdenadas.slice(0, 10);
  return cervezasMenosAmargas;
}

topCervezasMenosAmargas(beers);
console.log(cervezasMenosAmargas);

// --------------  Ejercicio N°6  --------------;
console.log("- Ejercicio 6");
function buscadorCerveza(cervezas, nombre) {
  let cervezaBuscada = cervezas.find((cerveza) => cerveza.name === nombre);
  if (cervezaBuscada) {
    console.log(cervezaBuscada);
    return cervezaBuscada;
  } else {
    console.log(`La cerveza ${nombre} no se encontro.`);
    return null;
  }
}

buscadorCerveza(beers, `Libertine Porter`);

// --------------  Ejercicio N°7  --------------;
console.log("- Ejercicio 7");
function buscadorCervezaPorIBU(cervezas, valor) {
  let cervezaEncontrada = cervezas.find((cerveza) => cerveza.ibu === valor);
  if (cervezaEncontrada) {
    console.log(cervezaEncontrada);
    return cervezaEncontrada;
  } else {
    console.log(`No se encontro cerveza con un IBU de ${valor}`);
    return null;
  }
}

buscadorCervezaPorIBU(beers, 45);

// --------------  Ejercicio N°8  --------------;
console.log("- Ejercicio 8");
function buscadorDeUbicacion(cervezas, nombre) {
  let posicion = cervezas.findIndex((cerveza) => cerveza.name === nombre);
  if (posicion !== -1) {
    console.log(posicion);
    return posicion;
  } else {
    console.log(`${nombre} no existe.`);
    return null;
  }
}

buscadorDeUbicacion(beers, `Libertine Porter`);

// --------------  Ejercicio N°9  --------------;
console.log("- Ejercicio 9");
function controladorEtilico(cervezas, nivelAlcohol) {
  let cervezasFiltradas = cervezas.filter(
    (cerveza) => cerveza.abv <= nivelAlcohol
  );
  let cervezasConNivelEtilico = cervezasFiltradas.map((cerveza) => {
    return {
      nombre: cerveza.name,
      alcohol: cerveza.abv,
      amargura: cerveza.ibu,
    };
  });
  console.log(cervezasConNivelEtilico);
  return cervezasConNivelEtilico;
}

controladorEtilico(beers, 7);

// --------------  Ejercicio N°10  --------------;
console.log("- Ejercicio 10");
function ordenaCervezas(cervezas, propiedad, booleano) {
  let nuevaListaDeCervezas = [...cervezas].sort((a, b) => {
    if (booleano) {
      return a[propiedad] - b[propiedad];
    } else {
      return b[propiedad] - a[propiedad];
    }
  });
  cervezasOrdenadas = nuevaListaDeCervezas.slice(0, 10);
  console.log(cervezasOrdenadas);
  return cervezasOrdenadas;
}

ordenaCervezas(beers, `abv`, true);
ordenaCervezas(beers, `abv`, false);

// // --------------  Ejercicio N°11  --------------;
console.log("- Ejercicio 11");
function creadoreDeTabla(cervezas, id) {
  let contenedor = document.getElementById(id);
  let tablaHTML = `
    <table style="border-collapse: collapse; border: 1px solid black;">
      <tr>
          <th>Name</th>
          <th>ABV</th>
          <th>IBU</th>
      </tr>`;
  cervezas.forEach((cerveza) => {
    tablaHTML += `<tr>
              <td>${cerveza.name}</td>
              <td>${cerveza.abv}</td>
              <td>${cerveza.ibu}</td>
          </tr>         
      `;
  });
  tablaHTML += `</table>`;
  contenedor.innerHTML = tablaHTML;
}
creadoreDeTabla(beers, "tablaCervezas");
