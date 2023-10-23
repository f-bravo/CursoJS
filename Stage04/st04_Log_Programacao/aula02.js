// Exercício 1:
// Calculando a média de um estudante
/*
let nome = prompt('Qual seu nome: ')
let nota1 = prompt("Nota 1: ")
let nota2 = prompt("Nota 2: ")
let nota3 = prompt("Nota 3: ")

let average = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

if (average < 4) {
    alert("Vc está reprovado")
} else if (average < 7){
    alert("Vc está em recuperação. Vamos lá, One more step")
} else {
    alert(`Aluno: ${nome} aprovado`)
} 
alert(`Aluno: ${nome} ficom com a média de ${average}`)
*/

// ----------------------------------------------------------------------------

/*
let lista = []
for(let item = 0; item < 5; item++){
    let itemName = prompt("Item: " + (item+1))
    lista[item] = itemName   
}
alert(lista) 
*/

// ----------------------------------------------------------------------------


// Jogo da Adivinhação 

/*

let result = prompt('Qual número estou pensando? entre 0 e 10')
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1;

while(Number(result) != randomNumber) {
    result = prompt('Errou, tente novamente')
    xAttempts++
}
alert(`Parabéns, você divinhou o número em ${xAttempts} tentativas`)

*/


//-----------------------------------------------------------------------------

/*

let option
let items = []

while(option != 3) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))
  
  
  if(option == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item) 
  }
  
  else if (option == 2) {
  
    if(items.length == 0) {
      alert("Não existem itens cadastrados")
    } else {
      alert(items)
    }
  
  } else {
    alert("FIM")
  }
  
  console.log(option, items)

}

*/

// ----------------------------------------------------------------------------

/*

let option
let items = []

while(option != 3) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))

  switch(option) {
    case 1:
      let item = prompt("Digite o nome do item")
      items.push(item) 
      break
    case 2:
      if(items.length == 0) {
        alert("Não existem itens cadastrados")
      } else {
        alert(items)
      }
      break
    case 3: 
      alert("FIM")
      break
    default:
      alert("Opção inválida. Tente novamente")
  }

}

*/

// ----------------------------------------------------------------------------


const patients = [
    {
      name: "Luiz",
      age: 20,
      weight: 100,
      height: 190,
    },
    {
      name: "Alexandra",
      age: 27,
      weight: 70,
      height: 170,
    },
    {
      name: "Carlos",
      age: 42,
      weight: 90,
      height: 180,
    },
  ]
  
  let patientsNames = []
  
  // for(let index  0; index < patients.lenght; index++)
  //    patientsNames[index] = patients[index].name
  // FOR OF --> mais moderno
  for(let patient of patients) {
    patientsNames.push(patient.name)
  }
  
  alert(patientsNames)


//-----------------------------------------------------------------------------


/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return `
      Paciente ${patient.name} possui o IMC de
      ${IMC(patient.weight, patient.height)}
    `
  }

  for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
  }  