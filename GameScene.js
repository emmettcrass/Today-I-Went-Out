class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
    this.onHeadphones = false
  }

  preload() {
    this.load.atlas('player', '/assets/imgs/player.png', '/assets/imgs/player.json');
    this.load.image('table', '/assets/imgs/table.PNG');
    this.load.image('bed', '/assets/imgs/bed.PNG');
    this.load.image('tv', '/assets/imgs/tv.PNG');
  }

  create() {
    this.headphones = this.physics.add.image(640, 140, '#')
    this.headphones = this.physics.add.image(640, 230, '#')

    this.table = this.physics.add.image(700, 162, 'table')
    this.table.setSize(198, 69, true)
    this.table.body.setOffset(0, 0)
    this.table.setImmovable(true)

    this.tv = this.physics.add.image(370, 150, 'tv')
    this.tv.setSize(250, 125, true)
    this.tv.body.setOffset(0, 0)
    this.tv.setImmovable(true)

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
    this.physics.add.collider(this.player, this.tv)
    this.physics.add.collider(this.player, this.table)
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
    this.scene.pause('GameScene')
    console.log(`made it to pause`)
    this.scene.launch('HeadphoneScene')
  }
}