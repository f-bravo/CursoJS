// Selecionando a tag class: alert-error 
export const AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        //add o elemento open a lista de classe
        AlertError.element.classList.add('open')
    },
    close(){
        AlertError.element.classList.remove('open')
    }
}







