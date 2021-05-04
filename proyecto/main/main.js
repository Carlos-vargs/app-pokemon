const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const isResOk = (res) => {
    if (!res.ok)
      throw new Error(res.status);
      return res.json()
}

//search pokemons with input 
const search_pokemons = document.getElementById('search-pokemons')
const allPokemonContainer = document.getElementById('cards-content');
//modal
const pokeContainerModal = document.getElementById('pokeBlock')
const pokeClose = document.getElementById('closeSpan') 
//info Card
const poke_Img = document.getElementById('pokeImgs')
const modal_names = document.getElementById('pokemon-name')
const poke_Damage = document.getElementById('pokeDamage')
const poke_xp = document.getElementById('pokeXp')
const poke_hab = document.getElementById('pokeHability')
const color_target = document.getElementById('color-target')
const poke_weight = document.getElementById('poke-weight')
const poke_color = document.getElementById('poke-color')
const poke_types = document.getElementById('pokeTypes')
const poke_description = document.getElementById('pokeDescription')
const poke_bio = document.getElementById('pokeBio')

function fetchDataPokemon() {
    fetch(URL)
    .then(res => isResOk(res))
    .then(function (data) {
        data.results.forEach(function (pokemon){
            pokemonInformation(pokemon);
        });

    })
}

function pokemonInformation(pokemon) {
    let URL_INF = pokemon.url
    fetch(URL_INF)
    .then(res => res.json())
    .then(function (pokeData) {
        renderPokemon(pokeData);
    })
}

function renderPokemon(pokeData) {
    let countHability = pokeData.abilities
    let countTypes = pokeData.types
    let pokeBio = `https://pokeapi.co/api/v2/pokemon-species/${pokeData.id}/`
    let pokeImg = `https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png`
    
    const infCards = cards_generator(pokeData) 
    allPokemonContainer.appendChild(infCards);
    
    infCards.addEventListener("click", () => {
        pokeContainerModal.style.display = 'block';
        poke_Img.src = pokeImg
        poke_Img.alt = `Pokemon ${pokeData.name}` 
        modal_names.innerHTML = firstLetter(pokeData.name)
        poke_xp.innerHTML = `Experience: ${pokeData.base_experience}`
        poke_weight.innerHTML = `Weight: ${pokeData.weight} kg`
        
        if (countHability.length && countTypes.length === 2) {
            poke_types.innerHTML = `Type: ${countTypes[0].type.name} / ${countTypes[1].type.name}`
            poke_hab.innerHTML = `Ability: ${countHability[0].ability.name} / ${countHability[1].ability.name}`
        } else {
            poke_types.innerHTML = `Type: ${countTypes[0].type.name}`
            poke_hab.innerHTML = `Ability: ${countHability[0].ability.name}` 
        }
        fetch(pokeBio)
        .then(res => isResOk(res))
        .then(dataBio => {
            let caseBio = dataBio.flavor_text_entries[0].flavor_text
            poke_bio.innerHTML = `Description: ${firstLetter(caseBio.toLowerCase())}`
            //color_target.style.backgroundColor = dataBio.color.name
        })
    })
}

pokeClose.addEventListener("click", () => {
    pokeContainerModal.style.display = 'none'; 
})

window.addEventListener('click', (e) => {
    if(e.target == pokeContainerModal){
        pokeContainerModal.style.display = 'none';
    }
});

search_pokemons.addEventListener('keyup', () => {
    fetch(URL)
    .then(res => isResOk(res))
    .then(dataFil => {
        let text = search_pokemons.value.toLowerCase()
        let pokeResults = dataFil.results.filter(pokeFil => pokeFil.name.indexOf(text) !== -1)
        console.log(pokeResults);
    })
})

fetchDataPokemon();


