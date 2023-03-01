const pokemonArray = [
    {
       thumbnail: '../media/001.png',
       id: 'N°01',
       name: 'Bulbasaur',
       type: ['Plant', 'Poison']
    },
    {
       thumbnail: '../media/002.png',
       id: 'N°02',
       name: 'Charmander',
       type: ['Fire']
    },
    {
       thumbnail: '../media/003.png',
       id:'N°03',
       name: 'Caterpie',
       type: ['Bug']
     },
     {
       thumbnail: '../media/004.png',
       id:'N°04',
       name: 'Kaluna',
       type: ['Bug', 'Poison']
     },
     {
       thumbnail: '../media/005.png',
       id:'N°05',
       name: 'Ratata',
       type: ['Plant'],
     },
     {
       thumbnail: '../media/006.png',
       id:'N°06',
       name: 'Pikachu',
       type: ['Normal'],
     },
     {
       thumbnail: '../media/007.png',
       id:'N°07',
       name: 'Vulpix',
       type: ['Fire', 'Plant'],
     },
     {
       thumbnail: '../media/008.png',
       id:'N°08',
       name: 'Jigglypuff',
       type: ['Normal', 'Fairy'],
     },
     {
       thumbnail: '../media/009.png',
       id:'N°09',
       name: 'Ice',
       type: ['Bug'],
     },
     {
       thumbnail: '../media/010.png',
       id:'N°10',
       name: 'Ground',
       type: ['Electrical'],
     },
     {
       thumbnail: '../media/011.png',
       id:'N°11',
       name: 'Ghost',
       type: ['Poison'],
     },
     {
       thumbnail: '../media/012.png',
       id:'N°12',
       name: 'Deer',
       type: ['Fire'],
     },
     {
       thumbnail: '../media/013.png',
       id:'N°13',
       name: 'Dark',
       type: ['Fairy'],
     },
     {
       thumbnail: '../media/014.png',
       id:'N°14',
       name: 'Stell',
       type: ['Normal', 'Electrical'],
     },
     {
       thumbnail: '../media/015.png',
       id:'N°15',
       name: 'Cat',
       type: ['Fire'],
     },
     {
       thumbnail: '../media/016.png',
       id:'N°16',
       name: 'Rock',
       type: ['Fairy', 'Poison'],
     }
   ]

const pokemon = `<div class="pokemon-container">
<div class="pokemon-superior">
  <!-- Imagen del pokemon -->
  <img src="../media/001.png" alt="Bulbasaur" class="imgbul">
</div>
<div class="pokemon-inferior">
  <p>
    <!-- Índice del pokemon -->
    Nº001
  </p>
  <h3 class="pok-bulbasaur">
    <!-- Nombre del pokemon -->
    Bulbasaur
  </h3>
  <div class="types-container">
    <!-- Tipo de pokemon -->
    <p class="type-plant">Plant</p>
    <p class="type-poison">Poison</p>
  </div>
</div>`

  
 for (let i = 0; i < pokemonArray.length; i++) {
   console.log(pokemonArray[i]);
   console.log(pokemonArray[i].name);
   console.log(pokemonArray[i].thumbnail);

   const types = pokemonArray[i].type.map(type => {
       let className = '';
       switch (type) {
         case 'Plant':
           className = 'type-plant';
           break;
         case 'Poison':
           className = 'type-poison';
           break;
         case 'Electrical':
           className = 'type-elec';
           break;
         case 'Fire':
           className = 'type-fire';
           break;
         case 'Normal':
           className = 'type-normal';
           break;
         case 'Fairy':
           className = 'type-fairy';
           break;
         case 'Bug':
           className = 'type-bug';
           break;
         default:
           className = '';
       }
       return `<p class="${className}">${type}</p>`;
     });


   const pokemon = `<div class="pokemon-container">
   <div class="pokemon-superior">
     <!-- Imagen del pokemon -->
     <img src="${pokemonArray[i].thumbnail}" alt="Bulbasaur" class="imgbul">
   </div>
   <div class="pokemon-inferior">
     <p>
       <!-- Índice del pokemon -->
       ${pokemonArray[i].id}
     </p>
     <h3>
       <!-- Nombre del pokemon -->
       ${pokemonArray[i].name}          </h3>
     <div class="types-container">
       <!-- Tipo de pokemon -->
       ${types.join('')}
     </div>
   </div>
 </div>`

 document.querySelector(".pokemon").innerHTML += pokemon
 }
