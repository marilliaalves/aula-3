// Exercicios Funções

// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)
const input = require("readline-sync")

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(numero1, numero2) {
  return numero1 + numero2
}

function subtracao(numero1, numero2) {
  return numero1 - numero2
}

function multiplicacao(numero1, numero2) {
  return numero1 * numero2
}

function divisao(numero1, numero2) {
  return numero1 / numero2
}

function operacoes(num1, num2, operacao) {
  switch (operacao) {
    case "soma":
      return num1 + num2
    case "subtracao":
      return num1 - num2
    case "multiplicacao":
      return num1 * num2
    case "divisao":
      return num1 / num2
    }
}

/*console.log(soma(2, 2))
console.log(subtracao(4, 2))
console.log(multiplicacao(4, 4))
console.log(divisao(4, 2))*/

// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

function multiplicaSemZero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return `não queremos zero`
  }
  return num1 * num2
}

/*console.log(multiplicaSemZero(4, 3))*/


function divideSemZero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return `não queremos zero`
  }
  return num1 / num2
}

/*console.log(divideSemZero(10, 2))*/

// 3) crie uma função que chame internamente qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function chamaFuncao(num1, num2) {
  console.log(`O resultado da operação é ${multiplicaSemZero(num1, num2)}`)
}

/*chamaFuncao(8, 2)*/

// 4) utilizando as funções de soma e multiplicação já feitas nos exercícios anteriores, crie uma nova função que chame essas funções e resolva a conta 36325 * (9824 + 777).

function resolverConta(){
  return multiplicacao(36325, soma(9824, 777))
}

/*console.log(resolverConta())*/


// Exercicios de For

// 1) crie uma função que receba uma string e devolva seu valor em letras maiúsculas, separadas por um espaço. Exemplo: 'banana' -> 'B A N A N A'

function fruta(string){
    return string.toUpperCase()
  } 
  
  /*console.log(fruta("banana").split(""))*/
  