let randomNumber = Math.round(Math.random() * 10)

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

function handleTryClick (event) {
    event.preventDefault()

    if(handleTryClick)
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 p").innerText = `Você é um cara de sorte e predestinado`
}

//Eventos:
const btnCookie = document.querySelector("#btnCookie")
const btnReset = document.querySelector("#btnReset")

btnCookie.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
})



