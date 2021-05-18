// get the reference
const get_input = document.getElementById('get_reference');
const preview_img = document.getElementById('preview_image');
const go_back = document.getElementById('back');
const edit_profile = document.getElementById('edit_profile');
const inf_account = document.getElementsByClassName('information-acount');
const button_Profile = document.getElementById('button_Profile');
const genderM = document.getElementById('male');
const genderF = document.getElementById('female');
//form values
const form_values = document.getElementById('Complete-information');
const name_user  = document.getElementById('name_user');
const nickname_user = document.getElementById('nickname_user');
const email_user = document.getElementById('email_user');
const birthday_user = document.getElementById('birthday_user');
const button1 = document.getElementById('button-hidden');
const button2 = document.getElementById('btn-hidden');
//select your pokemon
const pokeball1 = document.getElementById('pokeball1');
const pokeball2 = document.getElementById('pokeball2');
let text_pokeball = document.getElementById('text_pokeball');

//function IIFE
(() => {
    let picture = JSON.parse(localStorage.getItem('UserImg'))
    if (picture === null) {
        preview_img.src = "../icons/Pokemon_Trainer_Boy.png"
    } else {
        preview_img.src = picture
    };

    let getNameUser = JSON.parse ( localStorage.getItem('user-name') )
    let getNickName =  JSON.parse( localStorage.getItem('user-nick') ) 
    let getDataEmail = JSON.parse( localStorage.getItem('user-gmail') )
    let getBirthday = JSON.parse ( localStorage.getItem('user-birthday') )
    let getGender = JSON.parse ( localStorage.getItem('user-checked--m') )
    let getGender_1 = JSON.parse ( localStorage.getItem('user-checked--f') )

    if (getNickName,getDataEmail  === null) {
        location.href = "http:/proyecto/Register/index_res.html"
    } else {
        name_user.value = getNameUser
        nickname_user.value = getNickName
        email_user.value = getDataEmail
        birthday_user.value = getBirthday
    };

    if (getGender) {
        button2.style.display = 'none'
        genderM.style.display = 'none'
    }
    if (getGender_1) {
        button1.style.display = 'none'
        genderF.style.display = 'none'
    }

})()

get_input.addEventListener("change", () => {
    
    let files_img = get_input.files[0];
    let make_url = URL.createObjectURL(files_img)
    
    preview_img.src = make_url
    
    localStorage.setItem('UserImg',  JSON.stringify( make_url ))
})

edit_profile.addEventListener("click", () => {
    for (let i = 0; i < inf_account.length; i++) {
        inf_account[i].disabled = false; 
    }
 
    genderM.disabled = false
    genderF.disabled = false
    
    button_Profile.style.display = "block";

    button1.style.display = "flex"
    button2.style.display = "flex"
    genderM.style.display = 'flex'
    genderF.style.display = 'flex'

    localStorage.removeItem('user-checked--m')
    localStorage.removeItem('user-checked--f')

})

form_values.addEventListener("submit", () => {
    let newNickName = JSON.stringify(nickname_user.value)
    let newEmail = JSON.stringify(email_user.value)
    let username = JSON.stringify(name_user.value)
    let userBirthday = JSON.stringify(birthday_user.value)

    localStorage.setItem('user-nick', newNickName)   
    localStorage.setItem('user-gmail', newEmail)
    localStorage.setItem('user-name', username) 
    localStorage.setItem('user-birthday', userBirthday)
    
    if (genderM.checked) {
        localStorage.setItem('user-checked--m', genderM.checked )
    } 
    if (genderF.checked) {
        localStorage.setItem('user-checked--f', genderF.checked )
    }
})

go_back.addEventListener("click", () => {
    let goBack = "http://127.0.0.1:5500/proyecto/Cards/index_cards.html"
    location.href = goBack    
})



let imgp = JSON.parse(localStorage.getItem('img'))
pokeball1.src = imgp
text_pokeball.innerHTML = localStorage.getItem('choosen')
pokeball2.src = JSON.parse(localStorage.getItem('img2'))

