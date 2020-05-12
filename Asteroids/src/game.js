const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
const Ship = require("./ship.js");

function Game(){
  this.addShip();
  this.addAsteroids();
}

Game.DIM_X = 800; // should match #game-canvas height
Game.DIM_Y = 600; // should match #game-canvas height
Game.NUM_ASTEROIDS = 4;

Game.prototype.addAsteroids = function(){
  this.asteroids = [];
//   debugger;
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({
        pos: Util.randomPos(Game.DIM_X, Game.DIM_Y),
        game: this
    }));
  }
};

Game.prototype.addShip = function(){
    const shipPos = Util.randomPos(Game.DIM_X, Game.DIM_Y);
    this.ship = new Ship({
        pos: shipPos,
        game: this
    });
}

Game.prototype.allObjects = function(){
    if(this.allObjectsArr === undefined){   
      this.allObjectsArr = [this.ship].concat(this.asteroids);
    }
    
    return this.allObjectsArr;
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  for (let i = 0; i < this.allObjects().length; i++) {
      this.allObjects()[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function(){
    for (let i = 0; i < this.allObjects().length; i++) {
        this.allObjects()[i].move();
    }
};

Game.prototype.wrap = function(pos) {
  let x = pos[0];
  let y = pos[1];

  if (x >= Game.DIM_X) {
    x = x - Game.DIM_X;
    // x = 0;
  }

  if (y >= Game.DIM_Y) {
    y = y - Game.DIM_Y;
    // y = 0;
  }

  if (x < 0) {
    x += Game.DIM_X;
    // x = Game.DIM_X - 1;
  }

  if (y < 0) {
    y += Game.DIM_Y;
    // y = Game.DIM_Y - 1;  
  }

  return [x, y];
}

Game.prototype.checkCollisions = function(){
    for (let i = 0; i < this.allObjects().length - 1; i++) {
      for (let j = i + 1; j < this.allObjects().length; j++) {
            if(j !== i){
              if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
                    this.allObjects()[i].collideWith(this.allObjects()[j]);
                }
            }
        }
    }
}

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(object) {
  index = this.allObjects().indexOf(object);
  this.allObjects().splice(index, 1);
}


module.exports = Game;