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
        name: 'caterpie',
        type: ['bug']
      },
      {
        thumbnail: '../media/004.png',
        id:'N°04',
        name: 'kaluna',
        type: ['bug', 'poison']
      },
      {
        thumbnail: '../media/005.png',
        id:'N°05',
        name: 'ratata',
        type: ['plant'],
      },
      {
        thumbnail: '../media/006.png',
        id:'N°06',
        name: 'pikachu',
        type: ['normal'],
      },
      {
        thumbnail: '../media/007.png',
        id:'N°07',
        name: 'vulpix',
        type: ['fire', 'plant'],
      },
      {
        thumbnail: '../media/008.png',
        id:'N°08',
        name: 'jigglypuff',
        type: ['normal', 'fairy'],
      },
      {
        thumbnail: '../media/009.png',
        id:'N°09',
        name: 'ice',
        type: ['bug'],
      },
      {
        thumbnail: '../media/010.png',
        id:'N°10',
        name: 'ground',
        type: ['electrical'],
      },
      {
        thumbnail: '../media/011.png',
        id:'N°11',
        name: 'ghost',
        type: ['poison'],
      },
      {
        thumbnail: '../media/012.png',
        id:'N°12',
        name: 'deer',
        type: ['fire'],
      },
      {
        thumbnail: '../media/013.png',
        id:'N°13',
        name: 'dark',
        type: ['fairy'],
      },
      {
        thumbnail: '../media/014.png',
        id:'N°14',
        name: 'stell',
        type: ['normal', 'electrical'],
      },
      {
        thumbnail: '../media/015.png',
        id:'N°15',
        name: 'cat',
        type: ['fire'],
      },
      {
        thumbnail: '../media/016.png',
        id:'N°16',
        name: 'rock',
        type: ['fairy', 'poison'],
      }
    ]

const pokemon = `<div class="pokemon-container">
    <div class="pokemon-superior">
      <!-- Imagen del pokemon -->
      <img src="../media/011.png" alt="ghost" class="imggho">
    </div>
    <div class="pokemon-inferior">
      <p>
        <!-- Índice del pokemon -->
        Nº011
      </p>
      <h3>
        <!-- Nombre del pokemon -->
        Ghost          </h3>
      <div class="types-container">
        <!-- Tipo de pokemon -->
        <p class="type-poison">Poison</p>
      </div>
    </div>
  </div>`

  for (let i = 0; i < 10; i++) {
    document.querySelector(".pokemon").innerHTML += pokemon

  }
   
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
        return `<p class="${className}">${=type}</p>`;
      });

  

    const pokemon = `<div class="pokemon-container">
    <div class="pokemon-superior">
      <!-- Imagen del pokemon -->
      <img src="${pokemonArray[i].thumbnail}" alt="ghost" class="imggho">
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
 

