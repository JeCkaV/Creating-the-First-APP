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
     }
];

// add new pokemon to the list

function add(pokemon) {
   pokemonList.push(pokemon);
}

//gets the pokemon list 
function getAll {
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
   let createButton = document.createElement('button');
   button.innerText = "pokemon.name";
   button.classList.add('mainButton');
   listItem.appendChild(button);
   pokemonList.appendChild(listItem);
 };

         return {
            getAll: getAll,
            add: add,
            addListItem: addListItem,
            showDetails: showDetails,
            };


 })();


    // for (let i=0; i < pokemonList.length; i++){
       // if(pokemonList[i].height > 3){
        //  document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + ")" + "Wow it`s a big pokemon!!! <br>")
        //}else {
     //   document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + ")<br>")
   //   }
   //   }
pokemonRepository.getAll().forEach(function(pokemon) {
   pokemonRepository.addListItem(pokemon);
});

  

   // console.log(pokemonRepository.getAll());
   //console.log(pokemonRepository.add({name: 'Squirtle', height: 1.08 , type: 'torrent' }));
    //console.log(pokemonRepository.getAll());