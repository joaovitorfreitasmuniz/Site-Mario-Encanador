const form = document.querySelector('.formulario-fale-conosco')
const background = document.querySelector('.form-mask')

function showForm() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    background.style.visibility = 'visible'
}

function hideForm() {
    form.style.left = '-300px'
    form.style.transform = 'translateX(0)'
    background.style.visibility = 'hidden'
}
