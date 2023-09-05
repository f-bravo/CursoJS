let numero3 = prompt('Digite um número:')
let numero4 = prompt('Digite outro número')
numero3 = Number(numero3)
numero4 = Number(numero4)
const resultado2 = numero3 + numero4
// alert('O resultado foi: ' + resultado2)
// sempre que precisar colocar um resultado de uam variável em uma string use 
// template string
alert(`O resultado2 foi: ${resultado2}`)
// No template strings dentro das chaves{} pode colcaor uam expressão dentro
// Por exemplo, não precisaria utilizar a variável resultado pois ela não será
// usada em nenhum outro lugar do código. Sendo assim poderia exibir o resultado
// fazendo a conta diretamente. Em códigos mais complexos não é  muitoi bom usar.
// alert(`O resultado2 foi: ${numero3 + numero4}`)


