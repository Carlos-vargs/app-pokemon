// obtenr los valores del formulario
const value_form = document.getElementById('form')
const value_name = document.getElementById('name')
const value_email = document.getElementById('email')
const value_password = document.getElementById('password')
const parrafo = document.getElementById('warnings')

value_form.addEventListener('submit', e => {
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let warnings = ""
    let enter = false
    parrafo.innerHTML = ""
    
    if (value_name.value.length < 6) {
        warnings += `El nombre no es valido <br>`
        enter = true
    }
    if (!regexEmail.test(value_email.value)) {
        warnings += `El email no es valido <br>`
        enter = true
    }
    
    if (value_password.value.length < 8) {
        warnings += `La contraseña no es valida <br>`
        enter = true
    }
    if (enter) {
        parrafo.innerHTML = warnings
    }
})