//redirects
const redirectPage = "http:/src/page/Cards/index_cards.html"
const reverse = document.getElementById('account-redirect')
// get the form values
const value_form = document.getElementById('form')
const value_name = document.getElementById('name')
const value_email = document.getElementById('email')
const value_password = document.getElementById('password')
const paragraph = document.getElementById('warnings')
// login user 
const login_redirect = document.getElementById('login-redirect')
const login_img = document.getElementById ('change_pokemon')
//animation forms
const traslate_form = document.getElementById('traslate-create_acount')
const traslate_login = document.getElementById('traslate-login')
//information of the login user 
const sesion_user = document.getElementById('sesion-user')
const name_login = document.getElementById('name_login')
const password_login = document.getElementById('password_login')
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const warnings_login = document.getElementById('warnings_login')

sesion_user.addEventListener('submit', e => {
    e.preventDefault()

    let warnings = ""
    let enter = false
    warnings_login.innerHTML = ""


    let equateName = localStorage.getItem('user-nick')
    let equatePass = localStorage.getItem('user-password')

    if (name_login.value !== JSON.parse(equateName) ) {
        warnings += `The nickname is incorrect <br>`
        enter = true
        name_login.style.borderColor = "red"
        name_login.style.boxShadow = "none"
        name_login.style.color = "red"
        name_login.focus()
    }
    if (password_login.value !== JSON.parse(equatePass)  ) {
        warnings += `The password is incorrect <br>`
        enter = true
        password_login.style.borderColor = "red"
        password_login.style.boxShadow = "none"
        password_login.style.color = "red"
        password_login.focus()   
    }
    if (enter) {
        warnings_login.innerHTML = warnings
    }
    if (warnings_login.innerHTML === "") {
        location.href = redirectPage
    }


})

value_form.addEventListener('submit', e => {
    e.preventDefault()

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
    
    login_img.src = "../src/assets/img/pokemons-portada(3).png"
    login_img.style.marginTop = "0"
    
    traslate_form.style.transform = 'translateY(-200vh)'
    traslate_form.style.transition = 'all 4s ease'
    
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
    
    login_img.src = "../src/assets/img/pokesPortada.png"
    login_img.style.marginTop = "10%"    
    traslate_form.style.transform = 'translateY(0)'
    
    
    traslate_login.style.transform = 'translateX(100%)'
    traslate_login.style.transition = 'all 3s ease'
    traslate_form.style.transition = 'all 3s ease'
    
    setTimeout(() => {
        traslate_login.style.display = 'none'
    }, 1000);
})
