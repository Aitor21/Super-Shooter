(function() {
  'use strict';

  function Menu()
  {
    this.titleTxt = null;
    this.startTxt = null;
    this.instructionsText = null;
  }

  Menu.prototype =
  {

    create: function ()
    {
      var x = this.game.width / 2, y = this.game.height / 2;

      this.titleTxt = this.add.bitmapText(x, 100, 'Super Shooter', {font: '72px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);
      this.startButton = this.add.button(this.world.centerX, 300, 'startButton', function(){this.game.state.start('game');}, this, 2, 1, 0);
      this.startButton.anchor.setTo(0.5, 0.5);
      this.instructionsText = this.add.bitmapText (10, 785, 'Como jugar:', {font: '32px minecraftia', align: 'center'});
      this.instructionsText = this.add.bitmapText (10, 830, 'Controls: W, A, S, D controlan la nave', {font: '32px minecraftia', align: 'center'});
      this.instructionsText = this.add.bitmapText (10, 875, 'Espacio para disparar', {font: '32px minecraftia', align: 'center'});
      this.instructionsText = this.add.bitmapText (10, 925, 'Si chocas contra los asteroides, mueres', {font: '16px minecraftia', align: 'center'});
      this.instructionsText = this.add.bitmapText (10, 950, 'Puedes chocar contra las naves enemigas tres veces', {font: '16px minecraftia', align: 'center'})
    },

    update: function () {

    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['SuperShooter'] = window['SuperShooter'] || {};
  window['SuperShooter'].Menu = Menu;

}());