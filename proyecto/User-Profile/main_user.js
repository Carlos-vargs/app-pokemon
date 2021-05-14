// get the reference
const get_input = document.getElementById('get_reference');
const preview_img = document.getElementById('preview_image');
//const go_back = document.getElementById('regresar');
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
// const gender_button = document.getElementById('buttonF');

//function IIFE
(() => {
    let picture = JSON.parse(localStorage.getItem('UserImg'))
    if (picture === null) {
        preview_img.src = "../icons/Pokemon_Trainer_Boy.png"
    } else {
        preview_img.src = picture
    };

    let getDataName =  JSON.parse( localStorage.getItem('user-name') )
    let getDataEmail = JSON.parse( localStorage.getItem('user-gmail') )
    // let getDataPass = JSON.parse ( localStorage.getItem('user-password') )

    if (getDataName,getDataEmail  === null) {
        location.href = "http:/proyecto/Register/index_res.html"
    } else {
        nickname_user.value = getDataName
        email_user.value = getDataEmail
        // name_user.value = getDataPass
    };
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
})

form_values.addEventListener("submit", () => {
    const newInfoUser = nickname_user.value
    localStorage.setItem('user-name', newInfoUser)    
})





/*
    go_back.addEventListener("click", () => {
        let goBack = "http:/proyecto/Cards/index_cards.html"
        location.href = goBack
    
    })
*/