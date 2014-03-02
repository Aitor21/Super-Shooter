(function() {
  'use strict';

  function Highscore() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Highscore.prototype = {

    create: function () {
      var x = this.game.width / 2, y = this.game.height / 2;


      this.titleTxt = this.add.bitmapText(x, 200, '>Highscore<', {font: '16px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      this.backButton = this.add.button(this.world.centerX, 600, 'backButton', function(){this.game.state.start('menu');}, this, 2, 1, 0);
      this.backButton.anchor.setTo(0.5, 0.5);
      
    },

    update: function () {

    },

    onDown: function () {
      
    }
  };

  window['SuperShooter'] = window['SuperShooter'] || {};
  window['SuperShooter'].Highscore = Highscore;

}());
