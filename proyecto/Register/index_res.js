// get the form values
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
        warnings += `The name is invalid <br>`
        enter = true
    }
    if (!regexEmail.test(value_email.value)) {
        warnings += `The email is not valid <br>`
        enter = true
    }
    
    if (value_password.value.length < 8) {
        warnings += `The password is not valid <br>`
        enter = true
    }
    if (enter) {
        parrafo.innerHTML = warnings
    }
})