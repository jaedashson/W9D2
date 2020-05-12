const Util = {
  //this is what happen when we do 1.
  inherits: function inherits(childClass, parentClass) {
    const Surrogate =  function(){};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
    // childClass.prototype.__proto__ = parentClass.prototype; // DO NOT WRITE TO __proto__
  },
  //1
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random(); // randomizes angle
    return Util.scale([Math.sin(deg), Math.cos(deg)], length); // uses Math trig functions to create x:y ratio, length is magnitude
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  randomPos(maxX, maxY){
    let x = Math.floor(Math.random() * maxX);
    let y = Math.floor(Math.random() * maxY);

    return [x, y];
  }
};
  
module.exports = Util;