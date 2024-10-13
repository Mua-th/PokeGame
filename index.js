#!/usr/bin/env node
import getPokemons from  './pokemons.js';
import inquirer from 'inquirer';

const   pokemons =  async () => await getPokemons()



console.log("------------------ POKEMON GAME ------------------");

inquirer
  .prompt([
        {
            name: "pokemon",
            type: "list",
            message: "choose your pokemon ",
            choices : pokemons
        }
  ])
  .then((answers) => {
    console.log(answers.user_name)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });