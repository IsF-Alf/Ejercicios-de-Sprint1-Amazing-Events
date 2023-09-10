const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const resultadoInput = document.getElementById('resultado');
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0 && peso > 0) {
        const imc = peso / (altura * altura);
        resultadoInput.value = imc.toFixed(2);
    } else {
        alert('Por favor ingres otros valores.');
    }
});
