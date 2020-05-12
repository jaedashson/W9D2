const Game = require("./game.js")

function GameView(ctx){
    this.ctx = ctx;
    this.game = new Game();
}

GameView.prototype.start = function(){
    setInterval(() => {
      this.game.step();
      this.game.draw(this.ctx);
      // console.log(`one frame of game`);
    }, 20);

    // debugger;
    // this.game.moveObjects();
    // this.game.draw(this.ctx);
}

module.exports = GameView;