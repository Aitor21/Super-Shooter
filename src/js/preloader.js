(function()
{
  'use strict';

  function Preloader()
  {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype =
  {

    preload: function ()
    {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);
      this.load.image('background', 'assets/Background Shooter1.png'); // ingaen del fondo del juego
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('spaceship', 'assets/spaceship with fire.gif');
      this.load.image('bullet', 'assets/bala azul.png');
      this.load.image('enemy', 'assets/alien96.gif');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
      this.load.spritesheet('startButton', 'assets/Boton sprite.png', 327, 108);
      this.load.spritesheet('asteroides medianos', 'assets/asteroides medianos.png', 64, 64);
    },


    create: function ()
    {
      this.asset.cropEnabled = false;
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