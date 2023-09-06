// Documentação para auxiliar:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
// https://www.w3schools.com/js/
// https://262.ecma-international.org/14.0/ - formal em inglês


// JavaScript básico:

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
console.log(num3 * num8) // 10 * 5.5 = 55


//-----------------------------------------------------------------------------
// Alert, confirm e prompt (Navegador)
//-----------------------------------------------------------------------------


// Abra o navegador vá em inspecionar elemento e console.
// Essas funções para ver interação precisa usar o console do navegador.

// Funções do navegador que estão dentro do objeto window
// Quando uma funçã está dentro de m objeto cham ade método, fora do método é função
/*
window.alert('Mensagem teste')
undefined -> n retorna nada

window.confirm('Deseja pagar msg?')
true -> retorna valor boolean

window.prompt('Digite seu nome')
'Felipe Bravo'

const confirma = confirm('Realmente quer apagar?')
undefined -> agora essa variável está salva com o valordo usuário true ou false
confirma - false(cliquei no cancelar)

let numero1 = prompt('Digite um numero')
undefined
let numero2 = prompt('Digite outro numero')
undefined
console.log(numero1) -> 33
undefined
console.log(numero2) -> 66
undefined
let total = numero1 + numero2
undefined
console.log(total) -> 3366 concatenou pois é uma string
undefined

let numero1 = Number(numero1) 33
let numero2 = Number(numero2) 66
let total = numero1 + numero2
console.log(total) 99
alert('O resultado foi', total)
*/


//-----------------------------------------------------------------------------
// Exercício simples - altere o valor das variáveis abaixo
//-----------------------------------------------------------------------------

//A=B, B=C e C=A
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
//Precisa criar uam variável temporária para armazenar o valor que será perdido
varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;
console.log(varA, varB, varC);
// Sem criar outra variável
let A = 'A'; // B
let B = 'B'; // C
let C = 'C'; // A
[A, B, C] = [B, C, A]
console.log(A, B, C);


//-----------------------------------------------------------------------------
// Mais sobre strings
//-----------------------------------------------------------------------------

let string1 = "Um \"texto\""; // se precisar de aspas dupla use a barra p escape
console.log(string1);
let string2 = "Um 'texto'"; // ou use aspas simples dentro da aspas dupla
console.log(string1);
// string é indexável, pode se iterar sobre elas.
// cada caracter tem um índice
// Para pegar um [índice] da string:
console.log(string1[1]); // m
console.log(string1[-1]); // undefined
// função para pegar elemento de um índice:
console.log(string1.charAt(6));  // x

//Concatenando texto de 3 formas diferentes:
console.log(string1.concat(' ', 'concatenado')); // Um "texto" concatenado
console.log(string1 + '', 'concatenado');
console.log(`${string1} concatenado`); // mais usada

// para ver o índice de uma string:
console.log(string1.indexOf('o'));
console.log(string1.indexOf('x', 3)); // começa do 3. O índice retornado é da string
console.log(string1.lastIndexOf('x')); // busca de trás p frente e não muda o índice
console.log(string1.indexOf('x', 3)); // 6

// match:
console.log(string1.match(/[a-z]/g)); // [ 'm', 't', 'e', 'x', 't', 'o' ] letras minúscula
console.log(string1.match(/[A-Z]/g)); // [ 'U' ] Letra maiúsculas

// search - encontre o índice da letra x:
console.log(string1.search(/x/)); // 6

//replace - substitui uma por outra
console.log(string1.replace('Um', 'HUM')); // HUM "texto"
console.log(string1.replace(/Um/, 'HUM')); // HUM "texto"
let string3 = "O rato roeu a roupa do rei de roma";
console.log(string3.replace(/r/g, 'R')); // g subisti todas e n só a primeira

// lenght - para ver o tamanho
console.log(string3.length);  // 34

// slice - fatiamento:
console.log(string3.slice(2,6)); // rato
console.log(string3.slice(-4)); // roma 
console.log(string3.slice(30)); // roma
// substring também faz fatiamento. Mas slice é mais simples.
console.log(string3.substring(string3.length - 4)); // roma

// dividir a string em espaços.
console.log(string3.split(' '))
// ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de','roma']

//Upper e lower case
console.log(string3.toLowerCase())
console.log(string3.toUpperCase())


//-----------------------------------------------------------------------------
// Exercício
//-----------------------------------------------------------------------------


// Vamos colocar texto no body do html.
/*
<script>
        const nome = prompt('Digite seu nome')
        document.body.innerHTML += `Seu nome é: ${nome}<br/>`;
        document.body.innerHTML += `Seu nome tem ${nome.length}<br/>`;
        document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}<br/>`;
        document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${nome.indexOf('a')}<br/>`;
        document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${nome.lastIndexOf('a')}<br/>`;
        document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br/>`;
        document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br/>`;
        document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br/>`;
        document.body.innerHTML += `Seu nome com a letra minúscula: ${nome.toLowerCase()}<br/>`;
    </script>
*/


//-----------------------------------------------------------------------------
// Numbers
//-----------------------------------------------------------------------------


// Transformando number em string
let num9 = 1;
let num10 = 2.5;
console.log(num9.toString() + num10); // o num9 ainda continua sendo um number
console.log(typeof num9); // number

// Para alterar o valor do num9 de number para string:
num9 = num9.toString();
console.log(typeof num9); // string

// para ver a representação binária:
let num11 = 2048;
console.log(num11.toString(2)); //100000000000

// Arredondamento:
let num12 = 15.5678986234;
console.log(num12.toFixed(2)); // 15.57 - não altera o valor original

// verificar se um número é inteiro:
console.log(Number.isInteger(num12)); // false

// Verificar se um alguam conta deu errado, se retornou NaN
let temp = num12 * 'hey';
console.log(Number,isNaN(temp)); // true é um NaN

//
let num13 = 0.7;
let num14 = 0.1;
num13 += num14;
num13 += num14;

num13 = Number(num13.toFixed(2));  // retiraa imprecisão
soma = num13 + num14;
console.log(num13 + num14); // 1
console.log(Number.isInteger(soma)); // true
console.log(0.7 + 0.1);  // 0.7999999999999999

// Uma maneira de resolver a imprecisão sem as funções: 
let num15 = 0.7;
let num16 = 0.1;
num15 = ((num15 * 100) + (num16 * 100)) / 100;
console.log(num15); // 0.8

// Na hora de motrar o número basta fazer isso par atirar a imprecisão:
num15 = Number(num15.toFixed(2)) // e arredonda p duas casas decimais


//-----------------------------------------------------------------------------
// Objeto Math
//-----------------------------------------------------------------------------

let n1 = 9.54789;
let n2 = Math.floor(n1); // arredonda p baixo
console.log(n2); // 9
let n3 = Math.ceil(n1);
console.log(n3); // arredonda p cima
let n4 = Math.round(n1); // 10
console.log(n4); // 10 --> 9.49 arredonda p baixo. 9.50 arredonda p cima

console.log(Math.max(1,3,5,7,9,19,26,88,99)); // 99
console.log(Math.min(1,3,5,7,9,19,26,88,99)); // 1

console.log(Math.random()); // némero aleatório entre 0 e 0.99999
// Um número aleatório de range entre 5 e 10:
const numAleatorio = Math.random() * (10 - 5) + 5;
console.log(numAleatorio);
const numAleatorio2 = Math.round(Math.random() * (10 - 5) + 5); 
console.log(numAleatorio2); // aleatorio arredondado 

console.log(Math.pow(2,10));
console.log(2 ** 10);  // mesma coisa e bem mais fácil

// Para extrair a raiz quadrada de um número:
let raiz1 = 9
let raiz2 = 49
console.log(raiz1 ** (1/2))
console.log(raiz1 ** 0.5)  // mais fácil 
console.log(raiz2 ** 0.5)   

// Em JS dividir por zero não gera erro e sim um outro tipo de dado numérico
// chamado Infinity. Não gera erro e é avaliado como verdadeiro(true)
// Quando mais se aproxima do zero absoluto maior é o resultado final. Chega um 
// ponto que não vai ter mais casas para por um número e vai dizer que o número 
// é Infinito.


//-----------------------------------------------------------------------------
// Arrays - básico
//-----------------------------------------------------------------------------

// Array no JS é considerado um objeto
// Array: o índice de cada elemento é separado pela vírgula
// para acessar um dos elementos basta colocar o índice
// [indice inicia no zero]
// Sempre que adiciona remove um elemento o índice altera. A não ser que seja o 
// último elemento do array.

const alunos = ['Luiz', 'Maria', 'Juliana'];
console.log(alunos[2]); // índice[2] é Juliana

// substituindo um valor por outro em um índice específico:
// alunos[0] = 'Felipe';  // substitui Luiz por Felipe
// alunos[3] = 'Luiza';  // Como esse índice n existe ele coloca no final do array
console.log(alunos);

// Para ver o tamanho do array:
console.log(alunos.length) // 3;

// A melhor maneira para adicionar um elemento no final da fila é: PUSH()
alunos[alunos.length] = 'Igor';
alunos.push('Último');
console.log(alunos); // ['Luiz', 'Maria', 'Juliana', 'Igor', 'Último']

// Para adicionar no início da fila: UNSHIFT
alunos.unshift('Primeiro');
console.log(alunos) // ['Primeiro', 'Luiz', 'Maria', 'Juliana', 'Igor', 'Último']

// Para remover o último elemento do array: POP
alunos.pop();
console.log(alunos); // [ 'Primeiro', 'Luiz', 'Maria', 'Juliana', 'Igor' ]
// Da para salvar o que foi removido caso necessite.
const removidos = alunos.pop();
console.log(removidos); // Igor
console.log(alunos); // [ 'Primeiro', 'Luiz', 'Maria', 'Juliana' ]

// Para remover o primeiro elemento do array: SHIFT()
alunos.shift();
console.log(alunos); // [ 'Luiz', 'Maria', 'Juliana' ]

// Par apagar um índice específico: fazendo isso um elemento fica vazio.
// delete alunos[1];
// console.log(alunos); // ['Luiz', <1 empty item>, 'Juliana']

// No JS existe um valor padrão para coisas que não existem, que não aponte para
// nenhum local na memória. O valor é chamdo de (undefined)
// Se quiser acessar um valor que não existe o JS permite
console.log(alunos[10]); // undefined

// Fatiamento: SLICE(início, até)
console.log(alunos.slice(0, 2)); // [ 'Luiz', 'Maria' ] o 2 não é inclusivo
console.log(alunos.slice(0, -1)); // [ 'Luiz', 'Maria' ] elimina o último(1)

// OBS:
/*
const com valores mutáveis (como arrays e objetos), a variável continua sendo 
constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece
porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição
da variável com sinal de atribuição = (a variável continua apontando para o mesmo
local na memória), apenas a alteração de um valor interno do mesmo objeto.
*/

//-----------------------------------------------------------------------------
// Funções
//-----------------------------------------------------------------------------


// Toda função por padrão retorna undefined. 
// Se quiser que a função faça algo e retorne um valor use a palvra return
// Após palavra return nada mais é executado.
// Para declarar uma função use a palavra function. É a declarção clássica.
function saudacao(nome){
    console.log(`Bom dia ${nome}`);
}
saudacao('Luiz'); // Bom dia Luiz


function saudacao2(nome){
    return `Bom dia ${nome}`;
}
const variavel1 = saudacao2('Felipe') // salvando o retorno em uma variável
console.log(variavel1); // Bom dia Felipe


function soma2(x, y){
    const resultado = x + y;  //variável do escopo da função. Só funciona aqui
    return resultado;
}
console.log(soma2(2,3)); // 5
console.log(soma2(5,5)); // 10

// Valor padrão - sempre que não enviar um parâmetro ele será usado
function soma3(x=1, y=1){
    const resultado = x + y;  //variável do escopo da função. Só funciona aqui
    return resultado;
}
console.log(soma3(2)); // 3
console.log(soma3()); // 2
console.log(soma3(4, 4)); // 8


// Outra maneira de criar função: Função não nomeada:
const raiz3 = function (n){
    return n ** 0.5
}
console.log(raiz3(81)); // 9
console.log(raiz3(1024)); // 32

// Outra maneira: (seta) function - veio para facilitar pois é mais simples
const raiz4 = (n) =>{
    return n ** 0.5
}
console.log(raiz4(25)); // 5

// Veja como declarar uma função simples no estilo arrow:
const raiz5 = (n) => n ** 0.5;

console.log(raiz5(4)); // 2




