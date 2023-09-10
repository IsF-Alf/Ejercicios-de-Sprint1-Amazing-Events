const inputDol = document.getElementById("inputDol");
const conversionInput = document.getElementById("conversion");
const resultadoPesoInput = document.getElementById("resultadoPeso");

function convertidorDivisa() {
  const usdValue = parseFloat(inputDol.value);
  const conversion = parseFloat(conversionInput.value);

  if (
    !isNaN(usdValue) &&
    !isNaN(conversion) &&
    usdValue >= 0 &&
    conversion > 0
  ) {
    const pesoValue = usdValue * conversion;
    resultadoPesoInput.value = pesoValue.toFixed(2);
  } else {
    alert("Por favor ingresa valores válidos.");
  }
}
convertidorDivisa();
inputDol.addEventListener("input", convertidorDivisa);
conversionInput.addEventListener("input", convertidorDivisa);


