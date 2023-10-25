let num1 = Number(prompt('Digite um número: '))
let num2 = Number(prompt('Digite outro número: '))
let option = prompt('Digite o simbolo "+,-,*,/":')
let resultado = 0

switch(option) {
    case '+':
        resultado = num1 + num2
        alert(`Soma: ${num1} + ${num2} = ${resultado}`) 
      break
    case '-':
        resultado = num1 - num2
        alert(`Subtração: ${num1} - ${num2} = ${resultado}`) 
        break
    case '*':
        resultado = num1 * num2
        alert(`Multiplicação: ${num1} * ${num2} = ${resultado}`) 
        break
    case '/':
        resultado = num1 / num2
        alert(`divisão: ${num1} / ${num2} = ${resultado}`) 
        break
    case '%':
        resultado = num1 % num2
        alert(`Resto: ${num1} % ${num2} = ${resultado}`) 
        break            
    default:
      alert("Opção inválida. Tente novamente")
    
    }

if (resultado %2 == 0) {
    alert(`O ${resultado} é um número par`)
} else {
    alert(`O ${resultado} é um número ímpar`)
}
if (num1 != num2) {
    alert(`O ${num1} e ${num2} são diferentes`)
} else {
    alert(`O ${num1} e ${num2} são iguais`)
}
