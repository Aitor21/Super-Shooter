  (function() {
    'use strict';

    function Menu() {
      this.titleTxt = null;
      this.startTxt = null;
      this.highscoreTxt = null;
    }

    Menu.prototype = {

      create: function () {
        var x = this.game.width / 2
            y = this.game.height / 2;


        this.titleTxt = this.add.bitmapText(x, y, 'SuperShooter', {font: '24px minecraftia', align: 'center'});
        this.titleTxt.anchor.setTo(0.5, 0.5);
        
        y = y + this.titleTxt.height + 20;
        this.startTxt = this.add.bitmapText(x, y, 'START', {font: '16px minecraftia', align: 'center'});
        //<button type="START" onclick="alert('Hello world!')">START!</button>
        this.startTxt.anchor.setTo(0.5, 0.5);


        y = y + this.startTxt.height + 6;
        this.highscoreTxt = this.add.bitmapText(x, y, 'Highscore', {font: '16px minecraftia', align: 'center'});
        this.highscoreTxt.anchor.setTo(0.5, 0.5);

        this.input.onDown.add(this.onDown, this);
      },

      update: function () {

      },
      //var button;


     /* function preload() {

      this.load.spritesheet('button', '/home/user/SuperShooter/src/assets/button_sprite_sheet.png', 193, 71);

  }
      button = this.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);


      onDown: function () {
        this.game.state.start('game');
      }
    };

    window['supershooter'] = window['supershooter'] || {};
    window['supershooter'].Menu = Menu;


  }());*/     

  /*
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

  function preload() {

      game.load.spritesheet('button', '/home/user/SuperShooter/src/assets/button_sprite_sheet.png', 193, 71);
      game.load.image('background','assets/misc/starfield.jpg');

  }

  var button;
  var background;

  function create() {

      game.stage.backgroundColor = '#182d3b';

      background = game.add.tileSprite(0, 0, 800, 600, 'background');

      button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

  }

  function actionOnClick () {

      background.visible =! background.visible;

  }*/