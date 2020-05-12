const Util = require("./util.js")
const MovingObject = require("./moving_object.js");

function Ship(options) {
  MovingObject.call(this, {
    "pos": options.pos,
    "vel": [0,0],
    "radius": Ship.RADIUS,
    "color": Ship.COLOR,
    "game": options.game
  });




}

Util.inherits(Ship, MovingObject);

Ship.RADIUS = 10;
Ship.COLOR = "green";

module.exports = Ship;