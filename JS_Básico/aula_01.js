// Console.log - comando para exibir coisas na tela.
// Log é um método que está dentro do objeto console
// (;) Ponto e vírgula é opcional em JS.

console.log('Olá JS');

// Comentários:
// Para uma linha use //

/* Para comentar várias linhas:
   Use barra e asterísco 
*/ 

//----------------------------------------------------------------------------
// Navegador vs Node - HTML + JavaScript
//----------------------------------------------------------------------------

//Não é recomendado misturar JS em arquivos html.
//Só em React que é feito dessa maneira.

console.log('Olá mundo JS')
// Para ver a página no Window: reveal in explorer
// Para ver o código da página: ctrl + u

// O console da página web se comporta diferente do Node.Js no VSCode.
// Por exemplo: a função alert() não é executada pois não esta definida.
// No navegador a função() vai ser executada sem problemas.

// Quando for trabalhar no navegador geralmente manipual a DOM, os elementos.
// Quando for tabalhar com base de dados e rotas vai trabalhar no backend que é
// o Node.js

//-----------------------------------------------------------------------------
// Variáveis com let
//----------------------------------------------------------------------------

// Criação de variáveis: 
// Para nomear variáveis segue o mesmo padrão de outras linguagens.
// Não pode usar palavra reservada, começar com números, espaços, hífen, etc. 
// Use o modelo camelCase: nomeCompletoCliente = ' fulano de tal'
// JS é case sensitive. A variável maúscula difere da minúscula. Cada uma ter um
// valor diferente.
// Sempre que for utilizar algo que vá variar, utilize let. Var não se usa mais.

// Referenciando uma variável 
let nome = 'Felipe';

console.log(nome, 'é do Rio de Janeiro')
console.log('Em 2023', nome,'Começou a estudar JavaScript')

// Não pode redeclarar uma variável com let.
let nome2; //Declarou a variável
nome2 = 'Luiz';  // Inicializou a variável
console.log(nome2);
nome2 = 'Bravo';  // Renomeou a variável - sem usar let
console.log(nome2);


//-----------------------------------------------------------------------------
// Constantes com const
//-----------------------------------------------------------------------------

//Para declarar constante aplica a mesma regra usada em let e outras linguagens

// A cosntante precisa ser criada e inicializada ao mesmo tempo. 
// Precisa criar e atribuir um valor.
// Constante não pode ser modificada.
// Se precisar modificar uma constante atribua ela como let e não const. 
const nome3 = 'Felipe'
console.log(nome3)
// String = text | Number = número
const num1 = 5
const num2 = 10
const resultado = num1 + num2
const resultadoTributado = resultado * 1.25
console.log(resultado)
console.log(resultadoTributado)
const icms = 15
let resultadoComFrete = resultadoTributado + 10
let resultadoComFreteIcms = resultadoComFrete + icms
console.log(resultadoComFreteIcms) // 43.75

// O idela é ir evoluindo o valor e não ficar modificando. 
// Para isso vá declarando novas variáveis

// Para ter certeza do tipo do dado:
console.log(typeof num1) // number
// Para ver o resultado de uma expressão:
console.log(typeof (num1 + num2))

const primeiroNome = 'Felipe'
const sobreNome = 'Bravo'
const anoAtual = 2023
let idade = anoAtual - 1983
const peso = 85
const altura = 1.76
let imc = peso/(altura*altura) 
console.log(imc)
console.log(idade)
console.log(primeiroNome, sobreNome, 'tem', idade, 'anos', 'pesa', peso, 'kg', 'tem', altura, 'e o seu IMC é de', imc)

// Templates strings: pode colocar variáveis dentro de string entre crase
console.log(`${primeiroNome} ${sobreNome} tem ${idade} anos pesa ${peso} kg tem ${altura} e o seu IMC é de ${imc}`)

//Templates string é a forma mais moderna e legível de escrever.

// 100 min
//-----------------------------------------------------------------------------
// let vs var
//-----------------------------------------------------------------------------

// não crei variáveis sem usar var, let ou const
// O var não é mais usado.
// Com var você pode redeclarar variáveis
// Com let e const não pode redeclarar 
var nome5 = 'Juju';
var nome5 = 'Juliana'
console.log(nome5);
let nome6 = 'Maria';
// let nome6 = 'Não da'
// Redeclarar é um comportamento não desejável. 


//----------------------------------------------------------------------------
// Tipos de dados primitivos
//-----------------------------------------------------------------------------

// strin, number undefined, null, boolean e symbol(outra aula)
const name1 = 'Bravo'; //string
const age = 40; //number
let nomeAluno; // undefined -> não aponta para nenhum local na memória
const sobrenomeAluno = null; // Nulo -> não aponta para nenhum local na memória
// quando quer dizer explicitamente dizer que uma variável não aponta para 
// nenhum lugar use o null
const boolean = true // boleano - true ou false. 

// Para ver o tipo:
console.log(typeof name1, name1)
console.log(typeof age, age)
console.log(typeof sobrenomeAluno, sobrenomeAluno) // object null
// null não é um object é um bug.

let a = 2
let b = a
console.log(a, b)
a = 3
console.log(a, b)


//-----------------------------------------------------------------------------
// Operadores aritméticos, de atribuição e incremento
//-----------------------------------------------------------------------------

/* 
+ adição e concatenação
** podentia
% resto da divisão inteira
(-, /, *) subtração, divisão e multiplicação 
A ordem de precedência é a mesma da matemática. (), **, / ou *, + ou -  */
// Sinal de incremento(+) sinal de decremento(-)
let contador = 1;  // sempre use let para contador
contador ++; // 2
contador ++; // 3
++contador; // 4 -> o sinal pode ser antes ou depois. 
// contador++ executa a ação e depois faz o incremento do valor
// ++contador: Primeiro faz a conta depois  retorna o valor
console.log(contador)

// Veja a diferença:
let contador2 = 1
console.log(contador2++) // 1 - ele armazena o número 2 mas não exibe
console.log(++contador2) // 3 - aqui já ta em 2 + 1 = 3
console.log(--contador2) // 2 - decremento
// Faça primeiro incremento ou decremento e só depois utilize o console.log()
// contador sempre vai de um em um. Se precisar aumentar o passo:
const passo = 2
let contador3 = 0
contador3 += passo // contador3 = contador3 + passo
console.log(contador3)  // 2
contador3 += passo
console.log(contador3)  // 4

// NaN - not a number
const num3 = 10
const num4 = 'Luiz'
console.log(num3 * num4) // NaN - fácil de tratar
const num5 = '5' // é uma string mas o JS fez automaticamente
console.log(num3 * num5)  // 50 
// Convertendo uma string para um número
const num6 = parseInt('3.5') //converte string para um inteiro (int)
const num7 = parseFloat('3.5') // converte string para float
// O mais usado e moderno é Number
const num8 = Number('5.5')
console.log(num3 * num8)


