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
const form_values = document.getElementById('Complete-information')
const name_user  = document.getElementById('name_user');
const nickname_user = document.getElementById('nickname_user');
const email_user = document.getElementById('email_user');
const birthday_user = document.getElementById('birthday_user');
const button = document.getElementById('button-hidden');
const button2 = document.getElementById('btn-hidden');

//function IIFE
(() => {
    let picture = JSON.parse(localStorage.getItem('UserImg'))
    if (picture === null) {
        preview_img.src = "../icons/Pokemon_Trainer_Boy.png"
    } else {
        preview_img.src = picture
    };

    let getNickName =  JSON.parse( localStorage.getItem('user-name') )
    let getNameUser = JSON.parse ( localStorage.getItem('user-nick') )
    let getDataEmail = JSON.parse( localStorage.getItem('user-gmail') )
    let getBirthday = JSON.parse ( localStorage.getItem('user-birthday') )
    let getGender = JSON.parse ( localStorage.getItem('user-checked--m') )

    if (getNickName,getDataEmail  === null) {
        location.href = "http:/proyecto/Register/index_res.html"
    } else {
        nickname_user.value = getNickName
        email_user.value = getDataEmail
        name_user.value = getNameUser
        birthday_user.value = getBirthday
    };

    if (getGender) {
        button2.style.display = 'none'
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
    button2.style
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
/*
*/