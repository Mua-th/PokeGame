
const result = []
 const getPokemons = async ()=> { 
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        
        const json = await response.json();
        json.results.forEach(element => {
            result.push(element.name)          
        });
        //console.log(result);
        return result;
      } catch (error) {
        console.error(error.message);
      }}

     //console.log(getPokemons())
export default getPokemons; 
  