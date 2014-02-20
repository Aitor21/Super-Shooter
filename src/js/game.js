(function() {
  'use strict';

  function Game() {
    this.player = null;
  }

  Game.prototype = {

    create: function () {
    var x = this.game.width / 2
        , y = this.game.height / 2;
        

    this.player = this.add.sprite (300, 300, 'spaceship');

    this.bullets = this.add.group();
    this.bullets.createMultiple(10, 'bullet');
    this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill()}, this);



  },

  update: function() {

    var wKey;
        var aKey;
        var sKey;
        var dKey;
        
        

    if (this.input.keyboard.isDown(Phaser.Keyboard.W))
    {
      this.player.y -=5;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.S))
    {
      this.player.y +=5;
    }


    if (this.input.keyboard.isDown(Phaser.Keyboard.A))
    {
      this.player.x -=5;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.D))
    {
      this.player.x +=5;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
      this.fireBullet();
    }
    },
    
    fireBullet: function() {

    var bullet;
    var bullets;
    var bulletTime = 0;

    if (this.time.now > bulletTime)
    {
      this.bullet = this.bullets.getFirstExists(false);

      if (this.bullet)
      {
        this.bullet.reset(this.player.x, this.player.y - 6);
        this.bullet.body.velocity.y = -999;
        this.bulletTime = this.time.now + 550;
      }
    }
  },

  };

  window['SuperShooter'] = window['SuperShooter'] || {};
  window['SuperShooter'].Game = Game;

}());
