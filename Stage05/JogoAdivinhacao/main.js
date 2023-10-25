//Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// função callback - 
// função que é passada como argumento de outra função que é executada depois de um tempo
function handleTryClick(event){
    event.preventDefault() // não faça o padrão que é enviar o formulário ao clicar.

    const inputNumber = document.querySelector("#inputNumber") // pega o documento e faz a pesquisa pelo seletor

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()

        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }
    inputNumber.value = ""
    xAttempts++
}

// Reset:
function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10) // reseta tbm o randomNumber
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

// Add o evento e quem ficará ouvindo para reagir ao evento
// Parâmetro 1: quem é o evento. Parâmetro 2 quem vai ouvir/reagir ao evento:
// A função callback será executada somente depois que acontecer um click











