function MovingObject(options) {
  this.pos = options.pos; // [x, y]
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
}   

MovingObject.prototype.move = function(){
    let newPos = [this.pos[0]+this.vel[0] ,this.pos[1]+this.vel[1]];
    this.pos = this.game.wrap(newPos)
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  // We know the object's radious
  // Distance between objects' positions
  let sumOfRadii = this.radius = otherObject.radius;

  let distance = Math.sqrt(Math.pow( (this.pos[0] - otherObject.pos[0]) , 2) +
                           Math.pow( (this.pos[1] - otherObject.pos[1]) , 2));

  if (distance < sumOfRadii ){
    return true;
  } else {
    return false;
  }
  
}

MovingObject.prototype.collideWith = function(otherObject){
    console.log("COLLISION");
    this.game.remove(this); 
    this.game.remove(otherObject);
}

module.exports = MovingObject;