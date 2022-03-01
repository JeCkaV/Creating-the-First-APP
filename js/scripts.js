// IIEF CREATED FOR POKEMON LIST //

let pokemonRepository = (function () {

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

         return {
            getAll: function () {
                return pokemonList;
            },

            add: function(pokemon) {
                pokemonList.push(pokemon)
            },
         };

 })();


    // for (let i=0; i < pokemonList.length; i++){
       // if(pokemonList[i].height > 3){
        //  document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + ")" + "Wow it`s a big pokemon!!! <br>")
        //}else {
     //   document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + ")<br>")
   //   }
   //   }

    pokemonRepository.getAll().forEach(function (pokemon) {
        document.write (pokemon.name + ": " + " type ("  + pokemon.type + ")" + " and " + "( height : "  + pokemon.height + "),  <br>  ") 
    });

    console.log(pokemonRepository.getAll());
    console.log(pokemonRepository.add({name: 'Squirtle', height: 1.08 , type: 'torrent' }));
    console.log(pokemonRepository.getAll());