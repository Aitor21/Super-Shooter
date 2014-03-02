(function()
{
  'use strict';
  //PROBLEMA CPN LAS LLAVES A LA HORA DE COMBINAR METEROITOS CON NAVES ENEMIGAS MIRARLO!
  function Game()
  {
    this.player = null;
    this.aliens = null;
    this.bulletTime=0;
    this.enemy = 0;
    this.asteroid = null;
    this.asteroids = null;
  }

  Game.prototype =
  {
    create: function ()
    {
    var x = this.game.width / 2;
    var y = this.game.height / 2;
   

    this.player = this.add.sprite (460, 940, 'spaceship');
    
    this.bullets = this.add.group();
    this.bullets.createMultiple(2 , 'bullet');
    this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill();}, this);

    this.enemys = this.add.group();
    this.enemys.createMultiple(15, 'enemy');
    this.enemys.setAll('outOfBoundsKill', true);

    this.asteroids = this.add.group();
    this.asteroids.createMultiple(12, 'asteroids');
    this.asteroids.setAll('outOfBoundsKill', true);
    
    },
//esto se puede ir a tomar por culo


   /* asteroidcreate: function ()
    {

    for (var y = 0; y < 12; y++)
    {
        for (var x = 0; x < 17; x++)
        {
            var asteroids = this.asteroid.create(12 + x * 59, y * 1000, 'asteroids');
            asteroid.name = 'asteroids' + x.toString() + y.toString();
            asteroid.events.onOutOfBounds.add(function (asteroid)
            {

              //  Move the alien to the top of the screen again
              //asteroid.reset(asteroid.x, -100);

              //  And give it a new random velocity
              asteroid.body.velocity.y = 50 + Math.random() * 150;
          
            }, this);

            asteroid.body.velocity.y = 40 + Math.random() * 100;
        }
    }
  },*/


  update: function()
  {
    var UPKey;
    var LEFTKey;
    var DOWNKey;
    var RIGHTKey;

//ASTEROIDES

    this.asteroidCheck = this.asteroids.getFirstExists(false);
    if (this.asteroidCheck)
    {
      this.asteroidCheck.reset(Math.random()*1000, -100);
      this.asteroidCheck.body.velocity.y = ((0.4 + Math.random())* 400);
      //this.asteroidCheck.body.velocity.y = 200;
    }
//naves enemigas
        
    this.enemysCheck = this.enemys.getFirstExists(false);
    if (this.enemysCheck)
    {
      this.enemysCheck.reset(Math.random() * 1000,-10);
      this.enemysCheck.body.velocity.y = ((0.2 + Math.random())* 500);
      this.enemysCheck.body.velocity.x = ((0.2 +Math.random())* 500 - 250);
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
      this.enemyFireBullet();
    }


    this.physics.overlap(this.bullets, this.enemys, function(bullet,enemy) { bullet.kill(); enemy.damage(1);}, null, this);
    this.physics.overlap(this.player, this.enemys, function(player,enemy) { enemy.kill(); player.damage(1);}, null, this);
    this.physics.overlap(this.enemys, this.enemys, function(enemy) { enemy.kill();}, null, this);

    /*if (this.player.health == 0){
      this.game.state.start('gameover');
    }
    var life = this.player.health;
    this.healthTxt = this.add.bitmapText(10, 10, 'Health: ' + life, {font: '16px minecraftia', align: 'center'});

    },*/



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
        this.bullet.reset(this.player.x, this.player.y - 31 );
        this.bullet.body.velocity.y = -900;
        this.bulletTime = this.time.now + 200;
      }
    }
  },

      enemyFireBullet: function()
      {

        var bulletenemy;
        var bulletsenemy;
        var bulletenemyTime = 0;
        if (this.time.now > this.bulletenemyTime)
    {
      this.bulletenemy = this.bulletsenemy.getFirstExists(false);
      if (this.bulletenemy)
      {
        this.bulletenemy.reset(this.enemys.x, this.enemys.y + 23 );
        this.bulletenemy.body.velocity.y = -900;
        this.bulletenemyTime = this.time.now + 200;
      }
    }
  },

  };


  window['SuperShooter'] = window['SuperShooter'] || {};
  window['SuperShooter'].Game = Game;

}());
