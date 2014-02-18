(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('player', 'assets/player.png');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
      this.load.spritesheet('startButton', 'assets/button_sprite_sheet.png', 193, 71);
      this.load.spritesheet('highscoreButton', 'assets/button_sprite_sheet.png', 193, 71);
      this.load.spritesheet('backButton', 'assets/button_sprite_sheet.png', 193, 71);
      this.load.spritesheet('optionsButton', 'assets/button_sprite_sheet.png', 193, 71);
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['naves'] = window['naves'] || {};
  window['naves'].Preloader = Preloader;

}());
