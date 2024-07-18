# Rock_Paper_Scissors
This project implements a Rock-Paper-Scissors game using HTML, CSS, and JavaScript. Users can play the game against the computer, and the game keeps track of the scores until a player wins three rounds.

## Code Overview

### HTML

The HTML file (`index.html`) sets up the structure of the game interface. It includes sections for the player's and computer's moves, as well as headers for displaying results and scores.

### CSS

The CSS file (`styles.css`) styles the game interface. It includes styles for the container, headers, player moves, and other elements. Key styles include:

- Basic styles for the body, headers, and containers.
- Flexbox layout for the main game container and player sections.
- Styling for the move images and score display.

### JavaScript

The JavaScript file (`app.js`) contains the game logic. Key functions include:

- **numberGenerator()**: Generates a random number (0, 1, or 2) to represent the computer's move.
- **game(player, computer)**: Determines the winner of each round based on the player's and computer's moves.
- **resetGame()**: Resets the game scores and updates the UI.
- **printGameWinner()**: Displays the winner of the game when a player reaches three points.
- **playerMoveHandler()**: Handles the player's move and updates the game state.