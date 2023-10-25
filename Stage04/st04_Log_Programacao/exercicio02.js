const estudantes = [
    {
      name: "Luiz",
      nota01: 70,
      nota02: 70,
    },
    {
      name: "Alexandra",
      nota01: 50,
      nota02: 60,
    },
    {
      name: "Carlos",
      nota01: 80,
      nota02: 90,
    },
]

//Crie uma função que irá calcular a média das notas de cada aluno;
media = 0
function mediaFinal(n1, n2) {
    return media = (n1 + n2) / 2
}

function printEstudantes(aluno) {
    return `
      Aluno ${aluno.name} 
      ${mediaFinal(aluno.n1, aluno.n2)}

    `
  }


for (let nota of estudantes) {
    let msg = printEstudantes(nota)
    alert(msg)
}



