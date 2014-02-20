(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.titleTxt = this.add.bitmapText(x, 200, 'game', {font: '16px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);
      this.startButton = this.add.button(this.world.centerX, 300, 'startButton', function(){this.game.state.start('game');}, this, 2, 1, 0);
      this.startButton.anchor.setTo(0.5, 0.5);
      this.highscoreButton = this.add.button(this.world.centerX, 400, 'highscoreButton', function(){this.game.state.start('highscore');}, this, 2, 1, 0);
      this.highscoreButton.anchor.setTo(0.5, 0.5);
      this.optionsButton = this.add.button(this.world.centerX, 500, 'optionsButton', function(){this.game.state.start('options');}, this, 2, 1, 0);
      this.optionsButton.anchor.setTo(0.5, 0.5);
      
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