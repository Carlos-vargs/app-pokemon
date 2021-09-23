function idGenerator (item) {

    let id

    if (item <= 9) {
        id = (`00${item}`);
    } else if (item <= 99) {
        id = (`0${item}`)
    } else {
        id = item
    }

    return id 

}
