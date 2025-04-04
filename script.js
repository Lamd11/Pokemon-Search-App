const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const imageContainer = document.getElementById("image-container");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const pokeAPIUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";



const fetchData = async (searchValue) =>{
    try{
        const res = await fetch(`${pokeAPIUrl}/${searchValue.toLowerCase()}`);
        const data = await res.json();
        showOutput(data);
    }catch (err){
        alert("Pokémon not found")
    }
};

const showOutput = (data) =>{

    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    
    imageContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name}"/>`
    
    types.innerHTML = data.types.map((object) =>
        `<span class="type ${object.type.name}">${object.type.name.toUpperCase()}</span>`
    ).join(``)

    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

};

searchForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    fetchData(searchInput.value);
});

searchButton.addEventListener("click", (event) =>{
    event.preventDefault();
    fetchData(searchInput.value);
});
