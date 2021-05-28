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
const allcontainer_pokeball = document.getElementById('container_pokeball_selected');
const pokeHover = document.getElementsByClassName("pokeball");
const click_little_ball = document.getElementsByClassName('change_ball');
const togglePokeball = document.getElementsByClassName("big_pokeball");
let eDiv2;

(() => {
    let picture = JSON.parse(localStorage.getItem('UserImg'));
    (picture === null) ? preview_img.src = "../assets/img/Pokemon_Trainer_Boy.png" : preview_img.src = picture;

    let getNameUser = JSON.parse ( localStorage.getItem('user-name') )
    let getNickName =  JSON.parse( localStorage.getItem('user-nick') ) 
    let getDataEmail = JSON.parse( localStorage.getItem('user-gmail') )
    let getBirthday = JSON.parse ( localStorage.getItem('user-birthday') )
    let getGender = JSON.parse ( localStorage.getItem('user-checked--m') )
    let getGender_1 = JSON.parse ( localStorage.getItem('user-checked--f') )
    let getPokemons = JSON.parse( localStorage.getItem('poke_inf') )
    
    const displayNone = (...obj) => {for (let i = 0; i < obj.length; i++) obj[i].style.display = 'none'}

    if(getNickName,getDataEmail  === null) {
        location.href = "http:/proyecto/Register/index_res.html"
    } else {
        name_user.value = getNameUser
        nickname_user.value = getNickName
        email_user.value = getDataEmail
        birthday_user.value = getBirthday
    }

    if (getGender) displayNone(button2, genderM)
    if (getGender_1) displayNone(button1, genderF)
    
    for (let p = 0; p < getPokemons.length; p++) {
        let eDiv = document.createElement('div')
        let poke_img = document.createElement('img')
        let pokeballdown = document.createElement('img')
        eDiv2 = eDiv 

        poke_img.src = "../assets/img/pokeball.png"
        pokeballdown.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${getPokemons[p]}.gif`
        poke_img.classList.add('big_pokeball')
        pokeballdown.classList.add('change_ball')
        
        eDiv.appendChild(poke_img)
        eDiv.appendChild(pokeballdown)

        allcontainer_pokeball.appendChild(eDiv)
    }
})()


get_input.addEventListener("change", () => {
    
    let files_img = get_input.files[0];
    let make_url = URL.createObjectURL(files_img)
    
    preview_img.src = make_url
    
    localStorage.setItem('UserImg',  JSON.stringify( make_url ))
})

edit_profile.addEventListener("click", () => {
    for (let i = 0; i < inf_account.length; i++) inf_account[i].disabled = false; 

    genderM.disabled = false
    genderF.disabled = false
    
    changeDisplay(button1, button2, genderM, genderF, button_Profile)

    localStorage.removeItem('user-checked--m')
    localStorage.removeItem('user-checked--f')

})

const changeDisplay = (...obj) => {for (let i = 0; i < obj.length; i++) obj[i].style.display = 'flex'}

form_values.addEventListener("submit", () => {
    let newNickName = JSON.stringify(nickname_user.value)
    let newEmail = JSON.stringify(email_user.value)
    let username = JSON.stringify(name_user.value)
    let userBirthday = JSON.stringify(birthday_user.value)

    localStorage.setItem('user-nick', newNickName)   
    localStorage.setItem('user-gmail', newEmail)
    localStorage.setItem('user-name', username) 
    localStorage.setItem('user-birthday', userBirthday)
    
    if (genderM.checked) localStorage.setItem('user-checked--m', genderM.checked )
    if (genderF.checked) localStorage.setItem('user-checked--f', genderF.checked )
})

go_back.addEventListener("click", () => location.href = "http:/proyecto/Cards/index_cards.html")

for (let i = 0; i < click_little_ball.length; i++) {
    click_little_ball[i].addEventListener("click", () => {
        let idg = JSON.parse(localStorage.getItem("poke_inf"))
        click_little_ball[i].src = "../assets/img/pokeball.png"
        click_little_ball[i].style.width = "25px"
        togglePokeball[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${idg[i]}.gif`
    })
}