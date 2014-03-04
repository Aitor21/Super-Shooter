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
      this.load.image('spaceship', 'http://127.0.0.1:9000/assets/spaceship with fire.gif');
      this.load.image('bullet', 'http://127.0.0.1:9000/assets/orange arrow bullet.png');
      this.load.image('enemy', 'http://127.0.0.1:9000/assets/alien96.gif');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
      this.load.spritesheet('startButton', 'http://127.0.0.1:9000/assets/button_sprite_sheet.png', 193, 71);
      //this.load.spritesheet('highscoreButton', 'assets/button_sprite_sheet.png', 193, 71);
      this.load.spritesheet('backButton', 'assets/button_sprite_sheet.png', 193, 71);
      this.load.spritesheet('asteroides medianos', 'http://127.0.0.1:9000/assets/asteroides medianos.png', 64, 64);
    },


    create: function ()
    {
      this.asset.cropEnabled = false;
      //player.body.setSize(100, 100, 0, 0); Esto servira para los hitboxes 
    },

    update: function ()
    {
      if (!!this.ready)
      {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function ()
    {
      this.ready = true;
    }
  };

  window['SuperShooter'] = window['SuperShooter'] || {};
  window['SuperShooter'].Preloader = Preloader;

}());