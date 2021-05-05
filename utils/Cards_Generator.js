const cards_generator = obj => {
    const POKECARD = document.createElement('div')
    POKECARD.classList.add('container-cards--info')   
    
     POKECARD.innerHTML = `
     <h3 class="conten">${firstLetter(obj.name)}</h3>
     <img src="https://pokeres.bastionbot.org/images/pokemon/${obj.id}.png" alt="pokemon ${firstLetter(obj.name)}" class="img-target">
     `
    return POKECARD
}