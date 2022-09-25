class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
    this.onHeadphones = false
  }

  preload() {
    this.load.atlas('grub', '/assets/imgs/anim/grubAnim.png', '/assets/imgs/anim/grubAnim.json');
    this.load.image('desk', '/assets/imgs/bRoom/desk.png');
    this.load.image('bed', '/assets/imgs/bRoom/bed.png');
    this.load.image('dresser', '/assets/imgs/bRoom/dresser.png');
  }

  create() {
    this.headphones = this.physics.add.image(640, 140, '#')
    this.headphones = this.physics.add.image(640, 230, '#')

    this.desk = this.physics.add.image(700, 162, 'desk')
    this.desk.setSize(198, 69, true)
    this.desk.body.setOffset(0, 0)
    this.desk.setImmovable(true)

    this.dresser = this.physics.add.image(370, 150, 'dresser')
    this.dresser.setSize(250, 125, true)
    this.dresser.body.setOffset(0, 0)
    this.dresser.setImmovable(true)

    this.bed = this.physics.add.image(84, 295, 'bed')
    this.bed.setSize(165, 325, true)
    this.bed.body.setOffset(0, 0)
    this.bed.setImmovable(true)

    //make grub
    this.grub = this.physics.add.sprite(370, 400, 'grub');
    this.grub.setSize(173, 229, true)
    this.grub.body.setOffset(20, 15)
    var frameNames = this.textures.get('grub').getFrameNames();

    //grub animations//

    console.log(frameNames);
    console.log("you made it");
    this.anims.create({
      key: 'walkRight',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkR-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'walkLeft',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkL-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'walkD',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkD-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'walkUp',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkU-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'walkUhp',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkUhp-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'walkDhp',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkDhp-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'walkLhp',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkLhp-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'walkRhp',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkRhp-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'idleL',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'idleL-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'idleR',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 12,
          zeroPad: 2,
          prefix: 'idleR-',
          suffix: '.png'
        }),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'idleRhp',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 12,
          zeroPad: 2,
          prefix: 'idleRhp-',
          suffix: '.png'
        }),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'idleLhp',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 12,
          zeroPad: 2,
          prefix: 'idleLhp-',
          suffix: '.png'
        }),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'idleDown',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 1,
          zeroPad: 2,
          prefix: 'idleDown-',
          suffix: '.png'
        }),
      frameRate: 1,
      repeat: -1,
    });
    //this works//
    /*this.anims.create({
      key: 'walk',
      frames: [
          { key: 'grub',frame:"rw-001.png" },
          { key: 'grub',frame:"rw-002.png" },
          { key: 'grub',frame:"rw-003.png" },
          { key: 'grub',frame:"rw-004.png" },
          { key: 'grub',frame:"rw-005.png" },
          { key: 'grub',frame:"rw-006.png" },
      ],
      frameRate: 6,
      repeat: -1
    });
    */

    //keeps the grub in screen//
    this.grub.setCollideWorldBounds(true)

    //set collisions
    this.physics.add.collider(this.grub, this.headphones)
    this.physics.add.collider(this.grub, this.dresser)
    this.physics.add.collider(this.grub, this.desk)
    this.physics.add.collider(this.grub, this.bed)

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

    this.physics.add.overlap(this.grub, this.headphones, this.collectItem, null, this)

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
    this.grub.setVelocity(0)

    if (this.cursors.right.isDown) {
      this.grub.setVelocityX(150)
    } else if (this.cursors.left.isDown) {
      this.grub.setVelocityX(-150)
    } else {
      this.grub.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.grub.setVelocityY(-150)
    } else if (this.cursors.down.isDown) {
      this.grub.setVelocityY(150)
    } else {
      this.grub.setVelocityY(0)
    }

  //   if (this.grub.body.velocity.x !== 0 || this.grub.body.velocity.y !== 0) {
  //     this.grub.play('walkRight', true);
  //   } else {
  //     this.grub.play('idleDown', true);
  //   }
  // }
  if (this.grub.body.velocity.x !== 0 && this.grub.body.velocity.x < 0) {
    this.grub.play('walkLeft', true);
  } else if (this.grub.body.velocity.x !== 0 && this.grub.body.velocity.x > 0) {
      this.grub.play('walkRight', true);
  } else if (this.grub.body.velocity.y !== 0 && this.grub.body.velocity.y < 0) {
    this.grub.play('walkUp', true);
  } else if (this.grub.body.velocity.y !== 0 && this.grub.body.velocity.y > 0) {
    this.grub.play('walkD', true);
  } else {
    this.grub.play('idleDown', true);
  }


if (this.cursors.right.isUp) {
  this.grub.anims.play('idleR', true);
}
}
  //this destroys the headphone item when collected, pauses GameScene and starts HeadphoneScene
  collectItem(grub, headphones) {
    headphones.destroy()
    this.onHeadphones = true
    console.log(`made it to collectitem`)
    this.scene.pause('GameScene')
    console.log(`made it to pause`)
    this.scene.launch('HeadphoneScene')
  }
}