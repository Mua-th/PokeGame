import { resolve } from "chart.js/helpers";

const getUserPokemon = async (pokemon) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        
         const json = await response.json();

         const UserPokemon = {
            id : json.id,
            moves : json.moves.slice(0, 5).map((move) =>move.move),   
        }
        
        //console.log(json);
        //console.log(UserPokemon);
        return UserPokemon;
      } catch (error) {
        console.error(error.message);
      }}


//getUserPokemon("bulbasaur").then((userPokemon) =>{console.log(userPokemon)});
export default getUserPokemon ;


