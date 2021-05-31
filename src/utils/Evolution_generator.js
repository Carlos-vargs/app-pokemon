const generate_img = obj => {

    let evo_img = document.createElement('img')
    evo_img.src =`https://pokeres.bastionbot.org/images/pokemon/${obj.id}.png`
    evo_img.title = obj.name
    evo_img.classList.add ("mtm")
    
    return evo_img
}