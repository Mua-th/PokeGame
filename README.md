# Pokemon Battle Game

This is a simple command-line Pokemon battle game where you can choose a Pokemon and battle against a computer-controlled opponent.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed [Node.js](https://nodejs.org/) (version 12.0 or later)
* You have a Windows/Linux/Mac machine with a command-line interface

## Installing Pokemon Battle Game

To install the Pokemon Battle Game, follow these steps:

1. Clone the repository or download the source code to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the required dependencies:

```
npm install
```

## Running the Game

To play the Pokemon Battle Game, follow these steps:

1. Ensure you're in the project directory in your terminal.
2. Run the following command:

```
node index.js
```

Alternatively, if you want to run the game from any directory, you can install it globally:

1. In the project directory, run:

```
npm install -g .
```

2. Then you can start the game from any directory by running:

```
pokegame
```

## How to Play

1. When you start the game, you'll be presented with a list of Pokemon to choose from.
2. Select your Pokemon using the arrow keys and press Enter.
3. You'll then be shown your Pokemon's moves. Choose a move to attack.
4. The computer will choose its Pokemon and moves randomly.
5. The battle continues until either your Pokemon or the computer's Pokemon faints (reaches 0 HP).
6. The game will display a colored message indicating whether you won or lost.

## Game Rules

- Each Pokemon starts with 300 HP.
- Moves have different power, accuracy, and PP (Power Points).
- If a move's PP is lower than the opponent's chosen move, the attack will not take place.
- The game takes into account move accuracy, so attacks can miss.
- The first Pokemon to reach 0 HP loses the battle.

Enjoy the game!

## Troubleshooting

If you encounter any issues:

1. Ensure you have the latest version of Node.js installed.
2. Try deleting the `node_modules` folder and running `npm install` again.
3. If you're having trouble with the `pokegame` command, try uninstalling (`npm uninstall -g pokigame`) and reinstalling globally.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the ISC License.