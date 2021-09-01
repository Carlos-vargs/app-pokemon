//Generate cards
const cards_generator = obj => {
    const POKECARD = document.createElement('div')
    POKECARD.classList.add('container-cards--info')
    let id = ''

    if (obj.id <= 9) {
        return id = `00${obj.id}`
    } else if (obj.id >= 10) {
        return id = `0${obj.id}`
    } else {
        id = obj.id
    }

    
     POKECARD.innerHTML = `
     <h3 class="conten">${firstLetter(obj.name)}</h3>
     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="pokemon ${firstLetter(obj.name)}" class="img-target">
     `
    return POKECARD
}