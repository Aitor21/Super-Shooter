window.onload = function ()
{
  'use strict';

  var game
  var ns = window['SuperShooter'];

  game = new Phaser.Game(1080, 1920, Phaser.AUTO, 'SuperShooter');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('Endgame', ns.Endgame);
  game.state.add('game', ns.Game);
  game.state.start('boot');
};