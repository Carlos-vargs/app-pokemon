//Generate cards
const cards_generator = (obj, id) => {
    const POKECARD = document.createElement('div')
    POKECARD.classList.add('container-cards--info')
    
     POKECARD.innerHTML = `
     <h3 class="conten">${firstLetter(obj.name)}</h3>
     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="pokemon ${firstLetter(obj.name)}" class="img-target">
     `
    return POKECARD
}