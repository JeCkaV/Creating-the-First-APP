// IIEF CREATED FOR POKEMON LIST //

let pokemonRepository = (function () {
//pokemon list

    let pokemonList = [
    {
         name: 'Bulbasaur',
         height: 7,
         type: ['grass', 'poison']
        },
        
      {
         name: 'Butterfree',
        height: 3,
        type: ['bug']
        },
        
     {
         name: 'Nidoran',
        height: 0.4,
         type: ['monster', 'field']
            },
        
        
        {
          name: 'Pikachu',
          height: 0.4,
          type: ['fleid', 'fairy']
     },
        
     {
        name: 'Ditto',
        height: 0.3,
        type: ['normal']
     },
];

// add new pokemon to the list

function add(pokemon) {
   pokemonList.push(pokemon);
}

//gets the pokemon list 
function getAll() {
   return pokemonList;
}


//shows pokemon name when called

function showDetails(pokemon) {
      console.log(pokemon.name);
}

 // Creates button with Pokemon list

 function addListItem(pokemon) {
   let pokemonList = document.querySelector ('.pokemon-list');
   let listItem = document.createElement('li');
   let button = document.createElement('button');
   button.innerText = pokemon.name;
   button.classList.add('button-class');
   listItem.appendChild(button);
   pokemonList.appendChild(listItem);
 };

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails,
};

})();


pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListItem(pokemon);
});

  

   // console.log(pokemonRepository.getAll());
   //console.log(pokemonRepository.add({name: 'Squirtle', height: 1.08 , type: 'torrent' }));
    //console.log(pokemonRepository.getAll());