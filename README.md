# Phaser.js Infinite World demo

This is a basic example of building an infinite world using Phaser.js.

The theory here is that instead of moving the player, you calculate the
movement of the player and apply the reverse to everything else, meaning that
the player stays in the middle of the screen and everything else moves around
it.

"Everything else" in this demo is currently simply a tileSprite shifting the
position of its image to give the appearance of movement.
