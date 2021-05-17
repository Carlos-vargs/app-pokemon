// get the form values
const value_form = document.getElementById('form')
const value_name = document.getElementById('name')
const value_email = document.getElementById('email')
const value_password = document.getElementById('password')
const paragraph = document.getElementById('warnings')
let redirectPage = "http:/proyecto/Cards/index_cards.html"
// login user 
const login_redirect = document.getElementById('login-redirect')
const login_img = document.getElementById ('change_pokemon')
const reverse = document.getElementById('account-redirect')
const traslate_form = document.getElementById('traslate-create_acount')
const traslate_login = document.getElementById('traslate-login')



value_form.addEventListener('submit', e => {
    e.preventDefault()

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let warnings = ""
    let enter = false
    paragraph.innerHTML = ""
    
    if (value_name.value.length < 6) {
        warnings += `The name is invalid <br>`
        enter = true
        value_name.focus()
    } else {
        let userNickname =  value_name.value
        localStorage.setItem('user-nick', JSON.stringify( userNickname ) )
    };

    if (!regexEmail.test(value_email.value)) {
        warnings += `The email is not valid <br>`
        enter = true
        value_email.focus()

    } else {
        let userGmail =  value_email.value
        localStorage.setItem('user-gmail', JSON.stringify( userGmail ) )
    };

    if (value_password.value.length < 8) {
        warnings += `The password is not valid <br>`
        enter = true
        value_password.focus()
    } else {
        let userPass = value_password.value
        localStorage.setItem('user-password', JSON.stringify( userPass ) )
    };
    
    if (enter) {
        paragraph.innerHTML = warnings
    }
    if (paragraph.innerHTML === "") {
        location.href = redirectPage
    }

})
login_redirect.addEventListener('click', () => {
    
    login_img.src = "../icons/pokemons-portada(3).png"
    login_img.style.marginTop = "0"
    
    traslate_form.style.transform = 'translateY(-200vh)'
    traslate_form.style.transition = 'all 3s ease'
    
    setTimeout(() => {
        traslate_login.style.display = 'flex'
    }, 1000);
    
    setTimeout(() => {
        traslate_login.style.marginLeft = '0'
        traslate_login.style.transform = 'translateX(-50%)'
        traslate_login.style.transition = 'all 3s ease'
    }, 1100);
})

reverse.addEventListener('click', () => {
    
    login_img.src = "../icons/pokesPortada.png"
    login_img.style.marginTop = "10%"    
    
    traslate_form.style.transform = 'translateY(0)'
    
    traslate_login.style.transform = 'translateX(36%)'
    traslate_login.style.transition = 'all 3s ease'

    setTimeout(() => {
        traslate_login.style.display = 'none'
        traslate_form.style.transition = 'all 3s ease'
    }, 1000);
})
