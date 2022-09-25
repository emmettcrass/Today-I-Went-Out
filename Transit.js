class Transit extends Phaser.Scene {
    constructor() {
      super({
        key: 'Transit'
      })
      this.onHeadphones = false
    }
  
    preload() {
      this.load.atlas('player', '/assets/imgs/player.png', '/assets/imgs/player.json');
      this.load.image('transit', '/assets/imgs/Transit.png');
      this.load.image('agenda', '/assets/imgs/agenda.png');
      this.load.image('chair', '/assets/imgs/chair.png');
      this.load.image('dresser', '/assets/imgs/dresser.png');
  
      this.load.plugin('rexglowfilter2pipelineplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexglowfilter2pipelineplugin.min.js', true);
  
      this.load.scenePlugin({
        key: 'rexuiplugin',
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI'
    });     
  
    }
  
    create() {

  this.add.image(0, 0, 'transit').setOrigin(0).setScale(0.5);
  
  
  
      this.headphones = this.physics.add.image(640, 140, 'boxShoe')
      this.headphones = this.physics.add.image(640, 230, 'boxShoe')    

      this.bed = this.physics.add.image(84, 295, 'bed')
      this.bed.setSize(165, 325, true)
      this.bed.body.setOffset(0, 0)
      this.bed.setImmovable(true)
  
      //make player
      this.player = this.physics.add.sprite(370, 400, 'player');
      this.player.setSize(98, 165, true)
      this.player.body.setOffset(20, 15)
      var frameNames = this.textures.get('player').getFrameNames();
  
      //player animations//
  
      console.log(frameNames);
      console.log("you made it");
      this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNames('player', {
            start: 1,
            end: 6,
            zeroPad: 3,
            prefix: 'rw-',
            suffix: '.png'
          }),
        frameRate: 6,
        repeat: -1,
      });
      //this works//
      /*this.anims.create({
        key: 'walk',
        frames: [
            { key: 'player',frame:"rw-001.png" },
            { key: 'player',frame:"rw-002.png" },
            { key: 'player',frame:"rw-003.png" },
            { key: 'player',frame:"rw-004.png" },
            { key: 'player',frame:"rw-005.png" },
            { key: 'player',frame:"rw-006.png" },
        ],
        frameRate: 6,
        repeat: -1
      });
      */
  
      //keeps the player in screen//
      this.player.setCollideWorldBounds(true)
  
      //set collisions
      this.physics.add.collider(this.player, this.heaphones)
      this.physics.add.collider(this.player, this.bed)
  
  
      this.physics.add.overlap(this.player, this.headphones, this.collectItem, null, this)

  
      // Set cursor keys here!
      this.cursors = this.input.keyboard.createCursorKeys()
  
      //lets change scenes
      this.add.text(300, 20, 'Click to edu!', {
        fill: '#ffffff',
        fontSize: '20px'
      })
      this.input.on('pointerdown', () => {
        this.scene.stop('Transit')
        this.scene.start('EduScene')
      })
  
    }
  
    update() {
      // Update based on keypress here!
      this.player.setVelocity(0)
  
      if (this.cursors.right.isDown) {
        this.player.setVelocityX(150)
      } else if (this.cursors.left.isDown) {
        this.player.setVelocityX(-150)
      } else {
        this.player.setVelocityX(0);
      }
  
      if (this.cursors.up.isDown) {
        this.player.setVelocityY(-150)
      } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(150)
      } else {
        this.player.setVelocityY(0)
      }
  
      if (this.player.body.velocity.x !== 0 || this.player.body.velocity.y !== 0) {
        this.player.play('walk', true);
      } else {
        this.player.play('idle', true);
      }
    }
    //this destroys the headphone item when collected, pauses GameScene and starts HeadphoneScene
    collectItem(player, headphones) {
      headphones.destroy()
      this.onHeadphones = true
      console.log(`made it to collectitem`)
      this.scene.pause('Transit')
      console.log(`made it to pause`)
      this.scene.launch('HeadphoneScene')
    }
  }
  
  