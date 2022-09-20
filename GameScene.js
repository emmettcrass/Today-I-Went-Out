class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
    this.onHeadphones = false
  }

  preload() {
    this.load.atlas('player', '/assets/imgs/player.png', '/assets/imgs/player.json');
    this.load.image('bed', '/assets/imgs/bed.png');
    this.load.image('desk', '/assets/imgs/desk.png');
    this.load.image('boxShoe', '/assets/imgs/boxShoe.png');
    this.load.image('bedroom', '/assets/imgs/bedroom.png');
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
    //the beginning pop up starts here//

    var dialog = this.rexUI.add.dialog({
      x: 400,
      y: 300,
fontSize: '16px',

      background: this.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x1565c0),

      content: createLabel(this, 'Hello, your name is Grub.\nHurry to gather your tools,\nyou\'ve got a big day ahead!'),

      actions: [
          createLabel(this, 'Let\'s go!')
      ],

      space: {
          left: 20,
          right: 20,
          top: 10,
          bottom: -20,
          content: 25,
          action: 15,
      },

      align: {
          content: 'center',
          actions: 'right',
      },
  })

  .layout()
  //.drawBounds(this.add.graphics(), 0xff0000)
  .popUp(1000);

var tween = this.tweens.add({
  targets: dialog,
  scaleX: 1,
  scaleY: 1,
  ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
  duration: 1000,
  repeat: 0, // -1: infinity
  yoyo: false
});

//pop up ends here

this.add.image(400, 300, 'bedroom')



    this.headphones = this.physics.add.image(640, 140, 'boxShoe')
    this.headphones = this.physics.add.image(640, 230, 'boxShoe')    

    this.desk = this.physics.add.image(700, 162, 'desk')
    this.desk.setSize(198, 69, true)
    this.desk.body.setOffset(0, 0)
    this.desk.setImmovable(true)

    this.boxShoe = this.physics.add.image(370, 150, 'boxShoe')
    this.boxShoe.setSize(250, 125, true)
    this.boxShoe.body.setOffset(0, 0)
    this.boxShoe.setImmovable(true)

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
    this.physics.add.collider(this.player, this.boxShoe)
    this.physics.add.collider(this.player, this.desk)
    this.physics.add.collider(this.player, this.bed)

    /*make an align grid
            this.aGrid = new AlignGrid({
              scene: this,
              rows: 12,
              cols: 14,
          });
          //
          //show the numbers
          //
          this.aGrid.showNumbers();
          */

    this.physics.add.overlap(this.player, this.headphones, this.collectItem, null, this)

    /* function detectOverlap() {
      this.onHeadphones = true
      console.log(`detect on headphones ${this.onHeadphones}`)
     }
    this.collectItem*/

    // Set cursor keys here!
    this.cursors = this.input.keyboard.createCursorKeys()

    //lets change scenes
    this.add.text(300, 20, 'Click to edu!', {
      fill: '#ffffff',
      fontSize: '20px'
    })
    this.input.on('pointerdown', () => {
      this.scene.stop('GameScene')
      this.scene.start('Transit')
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
    this.scene.pause('GameScene')
    console.log(`made it to pause`)
    this.scene.launch('HeadphoneScene')
  }
}

var createLabel = function (scene, text) {
  return scene.rexUI.add.label({
      width: 40, // Minimum width of round-rectangle
      height: 40, // Minimum height of round-rectangle
    
      background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x5e92f3),

      text: scene.add.text(0, 0, text, {
          fontSize: '24px'
      }),

      space: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
      }
  });
}

