const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


//an array of pokémon objects where the id is evenly divisible by 3
console.log("**************************************************************************************************************************")
const divisible3 = pokemon.filter( p => p.id%3 === 0 );
console.log(divisible3)

//an array of pokémon objects that are "fire" type
console.log("**************************************************************************************************************************")
const filterValue = "fire";
const filterfire = pokemon.filter(val => val.types.includes(filterValue));
console.log(filterfire)


//an array of pokémon objects that have more than one type
console.log("**************************************************************************************************************************")

const manytypes = pokemon.filter( p => p.types.length > 1 );
console.log(manytypes)

//an array with just the names of the pokémon
console.log("**************************************************************************************************************************")
let nameonly =[]
pokemon.forEach(element => {
    nameonly.push(element.name)
});

console.log(nameonly)

//an array with just the names of pokémon with an id greater than 99
console.log("**************************************************************************************************************************")
let poke99 = pokemon.filter( p => p.id> 99 );
let namepoke99 =[]
poke99.forEach(element => {
    namepoke99.push(element.name)
});
console.log(namepoke99)

//an array with just the names of the pokémon whose only type is poison
console.log("**************************************************************************************************************************")
let pokemonpoison = pokemon.filter(val => val.types.includes('poison'));
let namePokemonPoison =[]
pokemonpoison.forEach(element => {
    namePokemonPoison.push(element.name)
});

//an array containing just the first type of all the pokémon whose second type is "flying"
console.log("**************************************************************************************************************************")

let flying = pokemon.filter( p => p.types[1] === "flying" );
let firstType = []
flying.forEach(element=>{
    firstType.push(element.types[0])
})

console.log(flying)
console.log(firstType)
//a count of the number of pokémon that are "normal" type
console.log("**************************************************************************************************************************")

let normalValue = "normal"
const normal = pokemon.filter(o=>o.types.includes(normalValue));
const normalCount = normal.length
console.log(normalCount)

//an array with all pokemon except the pokemon with the id of 148
console.log("*****************************************************************************************")
const not148 = pokemon.filter( p => p.id != 148 );
console.log(not148)

//an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
console.log("*****************************************************************************************")
const fairy = pokemon.map(p=> p.id===35?{...p , types:"fairy"}:p );
//let changee= (element)=>{ if (element.id === 35){element.types ="fairy" }}
//let fairy=pokemon.map(changee(pokemon));

/*pokemon.forEach((element) => {
    if (element.id  === 35) {
        fairy.types =  "fairy";
    }
});*/
console.log(fairy)