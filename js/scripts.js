// IIEF CREATED FOR POKEMON LIST //

let pokemonRepository = (function () {

//pokemon list taken from an external API
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


// add new pokemon to the list
function add(pokemon) {
   if (
     typeof pokemon === "object" &&
     "name" in pokemon &&
     "detailsUrl" in pokemon
   ) {
     pokemonList.push(pokemon);
   } else {
     console.log("pokemon is not correct");
   }
 }

//gets the pokemon list 
     function getAll() {
        return pokemonList;
}

// Creates button with Pokemon list

 function addListItem(pokemon) {
   let pokemonList = document.querySelector ('.pokemon-list');
   let listPokemon = document.createElement('li');
   let button = document.createElement('button');
   button.innerText = pokemon.name;
   button.classList.add('button-class');
   listPokemon.appendChild(button);
   pokemonList.appendChild(listPokemon);
   button.addEventListener("click", function(event) {
        showDetails(pokemon);
   });
 }


 //load list function- promise function

 function loadList() {
     return fetch(apiUrl).then(function (response) {
     return response.json();
   }).then(function (json) {
     json.results.forEach(function (item) {
       let pokemon = {
         name: item.name,
         detailsUrl: item.url
       };
       add(pokemon);
       console.log(pokemon);
     });
   }).catch(function (e) {
     console.error(e);
   })
 }

 // Load details function 

 function loadDetails(item) {
   let url = item.detailsUrl;
   return fetch(url).then(function (response) {
     return response.json();
   }).then(function (details) {
     // Now we add the details to the item
     item.imageUrl = details.sprites.front_default;
     item.height = details.height;
     item.types = details.types;
   }).catch(function (e) {
     console.error(e);
   });
}

   //shows pokemon name when called
   function showDetails(item) {
       pokemonRepository.loadDetails(item).then(function() {
       console.log(item);
});
}


//adds a click listener when a pokemon button is pressed and shows pokemon name
function addListener(button, pokemon) {
   button.addEventListener("click", function() {
      showDetails(pokemon);
   });
}
  

 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   loadList: loadList,
   loadDetails: loadDetails,
   showDetails: showDetails
 };
})();


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
});


   // console.log(pokemonRepository.getAll());
   //console.log(pokemonRepository.add({name: 'Squirtle', height: 1.08 , type: 'torrent' }));
    //console.log(pokemonRepository.getAll());

    