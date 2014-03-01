(function() {
  'use strict';
  //PROBLEMA CPN LAS LLAVES A LA HORA DE COMBINAR METEROITOS CON NAVES ENEMIGAS MIRARLO!
  function Game() {
    this.player = null;
    this.aliens = null;
    this.bulletTime=0;
    this.enemy = 0;
    this.asteroid = null;
  }

  Game.prototype = {
    create: function () {
    var x = this.game.width / 2; 
    var y = this.game.height / 2;
   

    this.player = this.add.sprite (460, 940, 'spaceship');
    
    this.bullets = this.add.group();
    this.bullets.createMultiple(2 , 'bullet');
    this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill()}, this);

    this.enemys = this.add.group();
    this.enemys.createMultiple(20, 'enemy');
    this.enemys.setAll('outOfBoundsKill', true);

//gustaria tener estos asteroides
    this.asteroids = this.add.group();
    this.asteroids.createMultiple(20, 'asteroids');
    this.asteroids.setAll('outOfBoundsKill', true);


    for (var y = 0; y < 7; y++)
    {
        for (var x = 0; x < 17; x++)
        {
            var asteroid = this.asteroids.create(12 + x * 59, y * 1000, 'player');
            asteroid.name = 'player' + x.toString() + y.toString();
            asteroid.events.onOutOfBounds.add(function (asteroid) {

    //  Move the alien to the top of the screen again
    asteroid.reset(asteroid.x, -200);

    //  And give it a new random velocity
    asteroid.body.velocity.y = 50 + Math.random() * 150;

}, this);
            asteroid.body.velocity.y = 40 + Math.random() * 100;
        }
    }
  },
  /*this.enemysCheck = this.enemys.getFirstExists(false)
    if (this.enemysCheck){
      this.enemysCheck.reset(Math.random()*0, 0);
      this.enemysCheck.body.velocity.y = 200;
      this.enemysCheck.body.velocity.x= 200;

    }*/

    
    },

  update: function() {
        
        var UPKey;
        var LEFTKey;
        var DOWNKey;
        var RIGHTKey;
        //naves enemigas
        this.enemysCheck = this.enemys.getFirstExists(false)
    if (this.enemysCheck){
      this.enemysCheck.reset(Math.random() * 1000,-10);
      this.enemysCheck.body.velocity.y = (Math.random()* 500);
      this.enemysCheck.body.velocity.x = (Math.random()* 500 - 250);

    }
//movimiento de la nave
    if (this.input.keyboard.isDown(Phaser.Keyboard.W) && this.player.y>5)
    {
      this.player.y -=6;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.S)&& this.player.y<960)
    {
      this.player.y +=6;
    }


    if (this.input.keyboard.isDown(Phaser.Keyboard.A) && this.player.x>8)
    {
      this.player.x -=6;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.D) &&this.player.x<960)
    {
      this.player.x +=6;
    }
//disparo nave
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
      this.fireBullet();
    }
    },
    
//disparos
    fireBullet: function() {

    var bullet;
    var bullets;
    var bulletTime = 0;

    if (this.time.now > this.bulletTime)
    {
      this.bullet = this.bullets.getFirstExists(false);
      if (this.bullet)
      {
        this.bullet.reset(this.player.x, this.player.y - 31);
        this.bullet.body.velocity.y = -800;
        this.bulletTime = this.time.now + 300;
      }
    }
  },


  };


  window['SuperShooter'] = window['SuperShooter'] || {};
  window['SuperShooter'].Game = Game;

}());
