// get the reference
const get_input = document.getElementById('get_reference')
const preview_img = document.getElementById('preview_image')


get_input.addEventListener("change", () => {
    
    let files_img = get_input.files;
    let user_profile = files_img[0]
    let make_url = URL.createObjectURL(user_profile)
    localStorage.setItem('my_img', make_url)
    preview_img.src = make_url

    if (location.reload) {
        preview_img.src = localStorage.getItem('my_img')
    }
})

