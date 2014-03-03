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
    this.enemyBullet;
    this.asteroid = null;
    this.asteroids = null;
    this.score = 0;
    this.scoreString = '';
    this.scoreText;
    this.lives;
    this.stateText;
    this.firingTimer = 0;
    this.ship;
  }

  Game.prototype =
  {
    create: function ()
    {
    var x = this.game.width / 2;
    var y = this.game.height / 2;
   
//posicion del jugador inicial
    this.player = this.add.sprite (460, 890, 'spaceship');

//generar bullets jugador
    this.bullets = this.add.group();
    this.bullets.createMultiple(3 , 'bullet');
    this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill();}, this);

//generar enemigos
    this.enemys = this.add.group();
    this.enemys.createMultiple(15, 'enemy');
    this.enemys.setAll('outOfBoundsKill', true);

//generar grupo asteroides
    this.asteroids = this.add.group();
    this.asteroids.createMultiple(12, 'asteroids');
    this.asteroids.setAll('outOfBoundsKill', true);

//generar bullets enemigo
    this.enemyBullets = this.add.group();
    this.enemyBullets.createMultiple(30, 'enemyBullet');
    this.enemyBullets.setAll('events.onOutOfBounds.add', 'events.onOutOfBounds', true);
    
    //  The score
    this.scoreString = 'Score : ';
    this.scoreText = this.add.text(10, 30, this.scoreString + this.score, { fontSize: '34px', fill: '#fff' });

    //  Lives
    this.lives = this.add.group();
    this.add.text(this.world.width - 350, 30, 'Lives : ', { fontSize: '34px', fill: '#fff' });

    //  Text
    this.stateText = this.add.text(this.world.centerX,this.world.centerY,'', { fontSize: '84px', fill: '#fff' });
    this.stateText.anchor.setTo(0.5, 0.5);
    this.stateText.visible = false;


    for (var i = 0; i < 3; i++) 
    {
        this.ship = this.lives.create(this.world.width - 150 + (70 * i), 60, 'spaceship');
        this.ship.anchor.setTo(2, 0.5);
        this.ship.alpha = 0.3;
    }

    },

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
      this.player.y -=6,2;
    }

    else if (this.input.keyboard.isDown(Phaser.Keyboard.S)&& this.player.y<960)
    {
      this.player.y +=6,2;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.A) && this.player.x>8)
    {
      this.player.x -=6,2;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.D) &&this.player.x<960)
    {
      this.player.x +=6,2;
    }

//disparo nave

    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
      this.fireBullet();
    }


    this.physics.overlap(this.bullets, this.enemys, function(bullet,enemy) { bullet.kill(); enemy.kill();if(enemy.kill() && bullet.kill()){this.score += 20;this.scoreText.content = this.scoreString + this.score;}}, null, this); //Añade puntuacion y mata al enemigo y bullet
    this.physics.overlap(this.player, this.enemys, function(player,enemy) { enemy.kill(); player.damage(0.34); this.live = this.lives.getFirstAlive();if (this.live){this.live.kill();}}, null, this); //reduce 1na vida de player y mata enemigo.
    this.physics.overlap(this.enemys, this.enemys, function(enemy) { enemy.kill();}, null, this);
    this.physics.overlap(this.asteroids, this.asteroids,  function(asteroid){asteroid.kill();}, null, this);
    this.physics.overlap(this.enemys, this.asteroids, function(enemy){enemy.kill();}, null, this);
    this.physics.overlap(this.player, this.asteroids, function(player) {player.kill();this.live = this.lives.getFirstAlive();if (this.live){this.live.kill();}}, null, this);//hace falta mejorar con el tiempo my friend...
    this.physics.overlap(this.bullets, this.asteroids, function(asteroid) {asteroid.kill();}, null, this);

  },
  
  fireBullet: function() 
{

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

}


  window['SuperShooter'] = window['SuperShooter'] || {};
  window['SuperShooter'].Game = Game;

}());
