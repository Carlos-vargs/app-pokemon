// get the reference
const get_input = document.getElementById('get_reference');
const preview_img = document.getElementById('preview_image');

//function IIFE
/*
(() => {
    let picture = localStorage.getItem('UserImg')
    preview_img.src = picture
})()
*/

get_input.addEventListener("change", () => {
    
    let files_img = get_input.files[0];
    let make_url = URL.createObjectURL(files_img)
    console.log(make_url);
    
    preview_img.src = make_url
    
    // localStorage.setItem('UserImg',  JSON.stringify( make_url ))
})

