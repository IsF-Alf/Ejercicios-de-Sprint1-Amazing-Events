const cubo = document.getElementById('cubo');
const boton = document.getElementById('boton');
let colorIndex = 0;

const colors = ['lightblue', 'red', 'gray'];
const colorNames = ['Celeste', 'Rojo', 'Gris'];

boton.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    cubo.style.backgroundColor = colors[colorIndex];
    cubo.innerText = colorNames[colorIndex];
});
