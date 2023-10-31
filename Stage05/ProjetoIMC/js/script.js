import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, NotANumber} from './utils.js'

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Para fechar a janela de erro ao começar a digitar.
// Sempre que começar a digitar vai executar os eventos abaixo
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = NotANumber(weight) || NotANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close() // para fechar o alert erro e mostrar o modal

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}



