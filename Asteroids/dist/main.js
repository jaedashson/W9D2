/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\n\r\nfunction Asteroid(options) {\r\n    MovingObject.call(this, {\r\n        \"pos\": options.pos, \r\n        \"vel\": Util.randomVec(10), // Util.randomVec(speed)\r\n        \"radius\": Asteroid.RADIUS,\r\n        \"color\": Asteroid.COLOR,\r\n        \"game\": options.game\r\n    });\r\n}\r\n\r\nAsteroid.COLOR = \"gray\"; // Asteroid[\"color\"] = \"gray\"\r\nAsteroid.RADIUS = 20;\r\n\r\n\r\n\r\n// Create inheritance\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\nmodule.exports = Asteroid;\r\n\r\n// alert(\"adf\");\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\r\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\r\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\r\n\r\nfunction Game(){\r\n  this.addShip();\r\n  this.addAsteroids();\r\n}\r\n\r\nGame.DIM_X = 800; // should match #game-canvas height\r\nGame.DIM_Y = 600; // should match #game-canvas height\r\nGame.NUM_ASTEROIDS = 4;\r\n\r\nGame.prototype.addAsteroids = function(){\r\n  this.asteroids = [];\r\n//   debugger;\r\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\r\n    this.asteroids.push(new Asteroid({\r\n        pos: Util.randomPos(Game.DIM_X, Game.DIM_Y),\r\n        game: this\r\n    }));\r\n  }\r\n};\r\n\r\nGame.prototype.addShip = function(){\r\n    const shipPos = Util.randomPos(Game.DIM_X, Game.DIM_Y);\r\n    this.ship = new Ship({\r\n        pos: shipPos,\r\n        game: this\r\n    });\r\n}\r\n\r\nGame.prototype.allObjects = function(){\r\n    if(this.allObjectsArr === undefined){   \r\n      this.allObjectsArr = [this.ship].concat(this.asteroids);\r\n    }\r\n    \r\n    return this.allObjectsArr;\r\n}\r\n\r\nGame.prototype.draw = function(ctx) {\r\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\r\n  for (let i = 0; i < this.allObjects().length; i++) {\r\n      this.allObjects()[i].draw(ctx);\r\n  }\r\n};\r\n\r\nGame.prototype.moveObjects = function(){\r\n    for (let i = 0; i < this.allObjects().length; i++) {\r\n        this.allObjects()[i].move();\r\n    }\r\n};\r\n\r\nGame.prototype.wrap = function(pos) {\r\n  let x = pos[0];\r\n  let y = pos[1];\r\n\r\n  if (x >= Game.DIM_X) {\r\n    x = x - Game.DIM_X;\r\n    // x = 0;\r\n  }\r\n\r\n  if (y >= Game.DIM_Y) {\r\n    y = y - Game.DIM_Y;\r\n    // y = 0;\r\n  }\r\n\r\n  if (x < 0) {\r\n    x += Game.DIM_X;\r\n    // x = Game.DIM_X - 1;\r\n  }\r\n\r\n  if (y < 0) {\r\n    y += Game.DIM_Y;\r\n    // y = Game.DIM_Y - 1;  \r\n  }\r\n\r\n  return [x, y];\r\n}\r\n\r\nGame.prototype.checkCollisions = function(){\r\n    for (let i = 0; i < this.allObjects().length - 1; i++) {\r\n      for (let j = i + 1; j < this.allObjects().length; j++) {\r\n            if(j !== i){\r\n              if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {\r\n                    this.allObjects()[i].collideWith(this.allObjects()[j]);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nGame.prototype.step = function(){\r\n    this.moveObjects();\r\n    this.checkCollisions();\r\n}\r\n\r\nGame.prototype.remove = function(object) {\r\n  index = this.allObjects().indexOf(object);\r\n  this.allObjects().splice(index, 1);\r\n}\r\n\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(ctx){\n    this.ctx = ctx;\n    this.game = new Game();\n}\n\nGameView.prototype.start = function(){\n    setInterval(() => {\n      this.game.step();\n      this.game.draw(this.ctx);\n      // console.log(`one frame of game`);\n    }, 20);\n\n    // debugger;\n    // this.game.moveObjects();\n    // this.game.draw(this.ctx);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\r\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{//DOM(Document Object Model)\r\n    const canvas = document.getElementById(\"game-canvas\");\r\n    const ctx = canvas.getContext(\"2d\");\r\n    const gameView = new GameView(ctx);\r\n    gameView.start(); // Should result in asteroids on screen\r\n\r\n    // the window.x = x code will not be in production version\r\n    window.ctx = ctx;\r\n    window.MovingObject = MovingObject; // Do not need to include window. when invoking MovingObject\r\n    window.Asteroid = Asteroid;\r\n\r\n    console.log(\"loaded\");\r\n})  \r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\r\n  this.pos = options.pos; // [x, y]\r\n  this.vel = options.vel;\r\n  this.radius = options.radius;\r\n  this.color = options.color;\r\n  this.game = options.game;\r\n}\r\n\r\nMovingObject.prototype.draw = function(ctx) {\r\n  ctx.beginPath();\r\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\r\n  ctx.strokeStyle = this.color;\r\n  ctx.lineWidth = 1;\r\n  ctx.stroke();\r\n  ctx.fillStyle = this.color;\r\n  ctx.fill();\r\n}   \r\n\r\nMovingObject.prototype.move = function(){\r\n    let newPos = [this.pos[0]+this.vel[0] ,this.pos[1]+this.vel[1]];\r\n    this.pos = this.game.wrap(newPos)\r\n}\r\n\r\nMovingObject.prototype.isCollidedWith = function(otherObject) {\r\n  // We know the object's radious\r\n  // Distance between objects' positions\r\n  let sumOfRadii = this.radius = otherObject.radius;\r\n\r\n  let distance = Math.sqrt(Math.pow( (this.pos[0] - otherObject.pos[0]) , 2) +\r\n                           Math.pow( (this.pos[1] - otherObject.pos[1]) , 2));\r\n\r\n  if (distance < sumOfRadii ){\r\n    return true;\r\n  } else {\r\n    return false;\r\n  }\r\n  \r\n}\r\n\r\nMovingObject.prototype.collideWith = function(otherObject){\r\n    console.log(\"COLLISION\");\r\n    this.game.remove(this); \r\n    this.game.remove(otherObject);\r\n}\r\n\r\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Ship(options) {\n  MovingObject.call(this, {\n    \"pos\": options.pos,\n    \"vel\": [0,0],\n    \"radius\": Ship.RADIUS,\n    \"color\": Ship.COLOR,\n    \"game\": options.game\n  });\n\n\n\n\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.RADIUS = 10;\nShip.COLOR = \"green\";\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\r\n  //this is what happen when we do 1.\r\n  inherits: function inherits(childClass, parentClass) {\r\n    const Surrogate =  function(){};\r\n    Surrogate.prototype = parentClass.prototype;\r\n    childClass.prototype = new Surrogate();\r\n    childClass.prototype.constructor = childClass;\r\n    // childClass.prototype.__proto__ = parentClass.prototype; // DO NOT WRITE TO __proto__\r\n  },\r\n  //1\r\n  randomVec(length) {\r\n    const deg = 2 * Math.PI * Math.random(); // randomizes angle\r\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length); // uses Math trig functions to create x:y ratio, length is magnitude\r\n  },\r\n  // Scale the length of a vector by the given amount.\r\n  scale(vec, m) {\r\n    return [vec[0] * m, vec[1] * m];\r\n  },\r\n  randomPos(maxX, maxY){\r\n    let x = Math.floor(Math.random() * maxX);\r\n    let y = Math.floor(Math.random() * maxY);\r\n\r\n    return [x, y];\r\n  }\r\n};\r\n  \r\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });