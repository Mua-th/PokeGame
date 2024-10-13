#!/usr/bin/env node
import getPokemons from  './pokemons.js';
import getUserPokemon from  './playerPokemon.js';
import inquirer from 'inquirer';

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length); 
    return array[randomIndex]; 
}
const   pokemons =  async () => await getPokemons();
console.log(pokemons)
const  bot =    getRandomItem(pokemons);

console.log("------------------ POKEMON GAME ------------------");

const answers = await inquirer
  .prompt([
        {
            name: "pokemon",
            type: "list",
            message: "choose your pokemon ",
            choices : pokemons
        }

  ]).then(() =>{console.log("your are playing against "+bot)})
  const userpokemon = await getUserPokemon(answers.pokemon);
  const moves = userpokemon.moves.map(move => move.name);
   userpokemon = {
    ...userpokemon,
    hp : 300 
   }

   
  // Prompt user to choose a move
  const moveAnswer = await inquirer.prompt([
      {
          name: "move",
          type: "list",
          message: "Choose your move:",
          choices: moves
      }
  ]);
  console.log(moveAnswer)




  