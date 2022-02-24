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
    }];

    for (let i=0; i < pokemonList.length; i++){
        if(pokemonList[i].height > 3){
          document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + " )" + "Wow it`s a big pokemon!!!")
        }else {
        document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + " )")
      }
      }
