let expression = 'a'

function calculate(num1, operator, num2){
    let resultado
    switch (operator) {
        case '+':
            resultado = num1 + num2
            break
        case '-':
            resultado = num1 - num2
            break
        case '*':
            resultado = num1* num2
            break
        case '/':
            resultado = num1 / num2
            break
        default:
            console.log('Não implementado')
            break            
    }
    return resultado
}

console.log(calculate(1, '+', 2))

//------------------------------------------------------------------

// Throw - lançar

// try...catch -> tente e capture os erros


function sayMyName(name=''){
    if(name === ''){
        throw 'Nome é obrigatório'
    }
    console.log('Depois do erro')
}

try {
    sayMyName()
}
catch(e){
    console.log(e)
    }








