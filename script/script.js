let linkCalcular = document.getElementById("linkCalcular");
let inputAltura = document.getElementById("altura");
let inputPeso = document.getElementById("peso");
let posResultado = document.getElementById("posResultado");
let resultado = document.getElementById("resultado");
let pesoBaixo = document.getElementById("pesoBaixo");
let pesoSaudavel = document.getElementById("pesoSaudavel");
let sobrepeso = document.getElementById("sobrepeso");
let obesidadeI = document.getElementById("obesidadeI");
let obesidadeII = document.getElementById("obesidadeII");
let obesidadeIII = document.getElementById("obesidadeIII");

function calcularFocus() {
  inputAltura.focus();
}

inputAltura.addEventListener("keydown", function (input) {
  let caracter = input.key;

  if (caracter === "," || caracter === ".") {
    input.preventDefault();
  }
});

function calcular() {
  let altura = Number(inputAltura.value) / 100;
  let peso = Number(inputPeso.value);
  let imc = (peso / (altura * altura)).toFixed(1);

  posResultado.style.display = "block";
  pesoBaixo.style.backgroundColor = "#2F80E2";
  pesoSaudavel.style.backgroundColor = "#2F80E2";
  sobrepeso.style.backgroundColor = "#2F80E2";
  obesidadeI.style.backgroundColor = "#2F80E2";
  obesidadeII.style.backgroundColor = "#2F80E2";
  obesidadeIII.style.backgroundColor = "#2F80E2";

  if (altura == "" || peso == "") {
    alert("Preencha corretamente os dados!");
    posResultado.style.display = "none";
    inputAltura.focus();
  } 
  else if (imc < 18.5) {
    resultado.innerHTML = `${imc} Kg/m² - Peso Baixo`;
    pesoBaixo.style.backgroundColor = "#FF5202";
  } 
  else if (imc >= 18.5 && imc <= 25) {
    resultado.innerHTML = `${imc} Kg/m² - Peso Saudável`;
    pesoSaudavel.style.backgroundColor = "#FF5202";
  } 
  else if (imc > 25 && imc <= 30) {
    resultado.innerHTML = `${imc} Kg/m² - Sobrepeso`;
    sobrepeso.style.backgroundColor = "#FF5202";
  } 
  else if (imc > 30 && imc <= 35) {
    resultado.innerHTML = `${imc} Kg/m² - Obesidade I`;
    obesidadeI.style.backgroundColor = "#FF5202";
  } 
  else if (imc > 35 && imc <= 40) {
    resultado.innerHTML = `${imc} Kg/m² - Obesidade II`;
    obesidadeII.style.backgroundColor = "#FF5202";
  } 
  else if (imc > 40) {
    resultado.innerHTML = `${imc} Kg/m² - Obesidade III`;
    obesidadeIII.style.backgroundColor = "#FF5202";
  }
}

function limpar() {
  posResultado.style.display = "none";
  inputAltura.value = "";
  inputPeso.value = "";
  inputAltura.focus();
}
