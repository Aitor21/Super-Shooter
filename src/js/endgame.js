(function() {
  'use strict';

   function Endgame() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Endgame.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
        
      this.titleTxt = this.add.bitmapText(x, 200, 'Game Over', {font: '16px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);
    },

    update: function () {
		if (this.input.keyboard.isDown(Phaser.Keyboard.ENTER))
		{
			this.game.state.start('game');
		}
    },
  };

  window['SuperShooter'] = window['SuperShooter'] || {};
  window['SuperShooter'].Endgame = Endgame;

}());