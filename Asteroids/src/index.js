const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");

document.addEventListener("DOMContentLoaded", ()=>{//DOM(Document Object Model)
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const gameView = new GameView(ctx);
    gameView.start(); // Should result in asteroids on screen

    // the window.x = x code will not be in production version
    window.ctx = ctx;
    window.MovingObject = MovingObject; // Do not need to include window. when invoking MovingObject
    window.Asteroid = Asteroid;

    console.log("loaded");
})  

