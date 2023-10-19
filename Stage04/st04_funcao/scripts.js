// Início do JS
let nome = 'luiz' 
let idade = 40
console.log('Olá Mundo explorer')
// Interpolação
console.log(`Nome: ${nome}. Idade é: ${idade}`)

//Objeto
const person = {
    name: 'Luiz',
    age: 40,
    weight: 85,
    isAdmin: true
}
console.log(person.name)
console.log(person.isAdmin)

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]
console.log(animals)
//----------------------------------------------------------------------------


//============================================================================
console.log('\nFunction Scope:')
//============================================================================


let subject1 = 'create video'

function createThink1(subject) {
    return subject1
}
console.log(subject1) // create video
console.log(createThink1(subject1)) // create video
//------------------------------------------------------------------------------

let subject2 = 'create video'

function createThink2(subject2) {
    subject2 = 'study' // ao atribuir outro valor no scopo interno é o que vale
    return subject2
}
console.log(subject2) // create video
console.log(createThink2(subject2)) // study
//------------------------------------------------------------------------------

let subject3 = 'create video'

function createThink3() {
    subject3 = 'study'
    return subject3
}
console.log(subject3) // create video
console.log(createThink3(subject3)) // study

//-----------------------------------------------------------------------------


//============================================================================
console.log('\nFunction Hoisting')
//============================================================================


sayMyName1()

function sayMyName1(){
    console.log('f-bravo')
}

// É diferente de uma função anônima - ela não sofre elevação.

// sayMyName2() <-- está comentado para n dar erro no código

const sayMyName2 = function() {
    console.log('f-bravo')
}


//ReferenceError: Cannot access 'sayMyName2' before initialization
//Para sofrer elevação precisa ser feita como no primeiro exemplo:


//============================================================================
console.log('\nFunction Hoisting')
//============================================================================


// Retire a palavra function e coloque a seta:
// é uma forma curta de escrever a função do tipo expression

const funcao1 = () => {
    console.log('f-bravo on')
}
funcao1()

const funcao2 = (name) => {
    console.log(name)
}
funcao2('f-bravo')


//============================================================================
console.log('\nCallback Function:')
//============================================================================

// Callback é uma função que epassa como parâmetro para outra função


function funcao3(callback) {
    console.log('Antes de executar a callback:')
    callback()
    console.log('Depois de executar a callback:')
}

funcao3(
    () => {
        console.log('Callback ou chamando de volta')
    }
)
// Chama uma função: função3 que chama outra função dentro dela.
// callback() - chama a função de baixo, a arrow function. É como se
// joga-se a arrow de volta no lugar do name callback()


//============================================================================
console.log('\nFunções construtoras:')
//============================================================================

// Function() constructor
// Expressão new cria uma construtora
// new funcao() - palavra new seguida do nome da função 
// A palavra this sempre referencia a função de fora bravo
// E o bravo que está lá fora sempre vai ser referenciado dentro da função como this

function Funcao4(name) {
    this.name = name
}

// retorna para variavel1 criando um novo objeto

const variavel1 = new Funcao4('Luiz') 
console.log(variavel1) //Funcao4 { name: 'Luiz' }

const variavel2 = new Funcao4('Felipe') 
console.log(variavel2) // Funcao4 { name: 'Felipe' }

function Funcao5(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }    
}

const pessoa1 = new Funcao5("Gabi") 
console.log(pessoa1.walk()) // Gabi está andando
console.log(pessoa1) // funcao5 { name: 'Gabi', walk: [Function (anonymous)] }

let date = new Date("2023-10-17") // 2023-10-17T00:00:00.000Z
console.log(date)