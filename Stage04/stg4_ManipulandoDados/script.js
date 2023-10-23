console.log(Number('9') + 5)

let word = "Paralelepipedo"
console.log(word.length)

let num1 = 1234
// confirm.log(num1.length)-> O length não funciona / number
//Precisa transformar o número em string 
console.log(String(num1).length)

let num2 = 6523.2342345
console.log(num2.toFixed()) // chamando o método para arredondar
console.log(num2.toFixed(2)) // 6523.23 coloque o núm de casas decimais
//Trocando ponto por vírgula
console.log(num2.toFixed(2).replace(".", ",")) // 6523,23
// Mas a vírgula não é para number. Isso transofmra o num em string
// Foi apenas um exemplo.

let word2 = "Programar é muito bom"
console.log(word2.toUpperCase()) //PROGRAMAR É MUITO BOM
console.log(word2.toLowerCase()) //programar é muito bom

let frase1 = "Inciando os trabalhos numa manhã chuvosa"
let array1 = frase1.split(" ")
console.log(array1) // [ 'Inciando', 'os', 'trabalhos', 'numa', 'manhã', 'chuvosa' ]
frasePronta = array1.join("_")
console.log(frasePronta) // Inciando_os_trabalhos_numa_manhã_chuvosa

// Include é case sensitive - para saber se uma palavra se encontra no texto
let frase2 = "Eu quero viver"
console.log(frase2.includes('amor')) //false
console.log(frase2.includes('viver')) //true

// Criando array com construtor
let array2 = new Array('a', 'b', 'c')
console.log(array2) //[ 'a', 'b', 'c' ]
let array3 = new Array(10)
console.log(array3) //[ <10 empty items> ] Array vazio com 10 posições

//Contar elemento no array:
console.log(["a", "b", "c"].length) //3

// Transofrmando string em elementos de um array
let word3 = "manipulação"
console.log(Array.from(word3)) 
//    'm', 'a', 'n', 'i',
//    'p', 'u', 'l', 'a',
//    'ç', 'ã', 'o' ]

// PUSH - add um elemento no final do array
let techs = ["html", "css", "js"]
techs.push('nodejs')
console.log(techs) // [ 'html', 'css', 'js', 'nodejs' ]

// UNSHIFT - add no começo do array
techs.unshift("sql")
console.log(techs) //[ 'sql', 'html', 'css', 'js', 'nodejs' ]

//POP - remove do final
techs.pop()
console.log(techs) // [ 'sql', 'html', 'css', 'js' ]

// SHIFT - remove do início
techs.shift()
console.log(techs)

// Pegando apenas alguns elementos do Array:
console.log(techs.slice(0,2)) // [ 'html', 'css' ]

// Remover em qualquer posição do array: modifica o array original
//techs.splice(1,1)
console.log(techs) //[ 'html', 'js' ]

techs.splice(0,2)
console.log(techs) // [ 'html' ]

// QUando n sabe a posição do array:
// Faça uma busca para saber a posição 
let techs2 = ["html", "css", "js", 'nodejs', 'react']
// QUal é o índice de:
let index = techs2.indexOf('nodejs')
console.log(index) // 3
techs2.splice(3)
console.log(techs2) //[ 'html', 'css', 'js' ]
techs2.splice(index,1)
console.log(techs2) // [ 'html', 'css', 'js' ]


