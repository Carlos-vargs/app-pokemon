const fetchDataEvolution = obj => {
    fetch(obj)
        .then(res => res.json())
        .then( evo => {
            let img = generate_img(evo)
            mtm_evolution.appendChild(img)
        })
}