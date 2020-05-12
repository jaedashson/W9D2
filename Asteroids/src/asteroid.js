const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid(options) {
    MovingObject.call(this, {
        "pos": options.pos, 
        "vel": Util.randomVec(10), // Util.randomVec(speed)
        "radius": Asteroid.RADIUS,
        "color": Asteroid.COLOR,
        "game": options.game
    });
}

Asteroid.COLOR = "gray"; // Asteroid["color"] = "gray"
Asteroid.RADIUS = 20;



// Create inheritance
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;

// alert("adf");



