const cubo = document.getElementById("cubo");
const inputText = document.getElementById("inputText");
const botonBorrar = document.getElementById("botonBorrar");

inputText.addEventListener("input", () => {
  cubo.innerText = inputText.value;
});

botonBorrar.addEventListener("click", () => {
  inputText.value = "";
  cubo.innerText = "";
});
