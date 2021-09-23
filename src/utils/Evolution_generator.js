const generate_img = obj => {

    let id = obj.id

    if (id <= 9) {
        id = (`00${id}`);
    } else if (id <= 99) {
        id = (`0${id}`)
    } else {
        id = id
    }

    let evo_img = document.createElement('img')
    evo_img.src =`https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    evo_img.title = obj.name
    evo_img.classList.add ("mtm")
    
    return evo_img
}