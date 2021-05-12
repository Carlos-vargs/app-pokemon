// get the reference
const get_input = document.getElementById('get_reference');
const preview_img = document.getElementById('preview_image');

//function IIFE
/*
*/
(() => {
    let picture = JSON.parse(localStorage.getItem('UserImg'))
    if (picture === null) {
        preview_img.src = ""
    } else {
        preview_img.src = picture
    }
})()

get_input.addEventListener("change", () => {
    
    let files_img = get_input.files[0];
    let make_url = URL.createObjectURL(files_img)
    
    preview_img.src = make_url
    
    localStorage.setItem('UserImg',  JSON.stringify( make_url ))
})

