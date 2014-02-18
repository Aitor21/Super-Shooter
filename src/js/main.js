window.onload = function () {
  'use strict';

  var game
    , ns = window['naves'];

  game = new Phaser.Game(640, 880, Phaser.AUTO, 'naves-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('highscore', ns.Highscore);
  game.state.add('options', ns.Options);
  game.state.add('game', ns.Game);

  game.state.start('boot');
};