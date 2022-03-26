  // IIEF CREATED FOR POKEMON LIST //

  let pokemonRepository = (function () {
    let modalContainer = document.querySelector('.modal-container');
    
    //pokemon list taken from an external API
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Checking if the pokemon added is an Object
  function add(pokemon) {
    repository.push(pokemon);
  }

     //gets the pokemon list 
     function getAll() {
        return repository;
     }

      //Find a pokemon by name
      function find(text) {
        const result = pokemonList.filter(singlePokemon => singlePokemon.name === text);
        if (result.length === 0) alert("Pokemon Not Found");
        else alert("Pokemon found");
    }

  function ifPokemonSelected(button, pokemon) {
    //Adding an event listener to the button
    button.addEventListener('click', function(event) {
        //Invoking the showdetails function once the user clicks on the button
        pokemonRepository.showDetails(pokemon);
    });
}

      function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            //Add code for a new display here
            showModal(pokemon);
        });
      } 

      function properCasing(item) {
        return item.charAt(0).toUpperCase() + item.slice(1);
      };

  //add a modal

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalBody.empty();
    modalTitle.empty();

    //creates pokemon name
    let pokemonName = $ ("<h1>" + pokemon.name + "</h1>");

    //creates pokemon image
    let pokemonImage = $('<img class="modal-img" style="width:50%">');
    imageElement.attr("src", pokemon.imageUrl);
    //  let imageElementBack = $ ('<img class="modal-img" style="width:50%">');
   // imageElementBack.attr("src", pokemon.imageUrlBack);


    //creates pokemon height
    let pokemonHeight = $("<p>" + "height : " + pokemon.height + "</p>");

    //creates type(s) of pokemon list
    let pokemonTtypes = $("<p>" + "types : " + pokemon.types + "</p>");

    //show abilities in the modal

    let pokemonAbilities = $("<p>" + "abilities : " + pokemon.abilities + "</p>");

    
    modalTitle.appent(nameElement)
    modalBody.append(pokemonName);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonTypes);
    modalBody.append(pokemonImage);
    modalBody.append(pokemonAbilities);
  }

   //adds a click listener and when a pokemon button is pressed it shows pokemon name
   function addListener(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }
  //creates a button list of pokemon
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add("group-list-item");
    let button = document.createElement("button");
    button.classList.add("btn");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#pokemonModal");
    pokemonName = properCasing(pokemon.name);
    button.innerText = pokemonName;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    addListener(button, pokemon);
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })

      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(pokemon) {
 let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
         // Now we add the details to the item
         pokemon.imageUrl = details.sprites.front_default;
         item.height = details.height;
         item.types = details.types;
       })
       .catch(function (e) {
         console.error(e);
       });
   }
   return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    addListItem: addListItem,
    ifPokemonSelected: ifPokemonSelected,
    showModal: showModal,
    };
  })();


//actually makes the respository full of pokemon
pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});