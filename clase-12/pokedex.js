fetch("https://pokeapi.co/api/v2/pokemon")
    .then(pokeName => pokeName.json())
    .then(pokeNameJSON => {
        pokeNameJSON.results.forEach(element => {
            i = element.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
            $('#pokemon').append('<div id="' + element.name + '">' + element.name + '</li>');
            fetch("https://pokeapi.co/api/v2/pokemon-species/"+ i +"")
                .then(pokeDesc => pokeDesc.json())
                .then(pokeDescJSON => {
                    console.log(pokeDescJSON)
                        $("#" + pokeDescJSON.name + "").append('<div id="description">' + pokeDescJSON.flavor_text_entries[1].flavor_text + '</li>');
                })
                .catch(error => console.error("Hubo un error: ", error));
        });
    })
    .catch(error => console.error("Hubo un error: ", error));