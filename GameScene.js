class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
    this.onHeadphones = false
  }

  create() {
    // var music = this.sound.add('broomMusic');

    // music.play();

    this.headphones = this.physics.add.image(640, 140, '#')
    this.headphones = this.physics.add.image(640, 230, '#')
    this.headphones.setImmovable(true)

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

    function detectOverlap() {
      this.onHeadphones = true
      console.log(`detect on headphones ${this.onHeadphones}`)
     }
    this.collectItem

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
      this.grub.setVelocityX(150);
    } else if (this.cursors.left.isDown) {
      this.grub.setVelocityX(-150);
    } else {
      this.grub.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.grub.setVelocityY(-150);
    } else if (this.cursors.down.isDown) {
      this.grub.setVelocityY(150);
    } else {
      this.grub.setVelocityY(0);
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
  if (this.cursors.left.isUp && this.grub.body.velocity.x !== 0 && this.grub.body.velocity.y !== 0) {
    this.grub.anims.play('idleL', true);
  }

// start animation when created

// this.grub.on('animationcomplete', () => { // if an animation ends play the idle animation
//      grub.anims.play('idleR');
//  });

// if (this.cursors.right.isUp && this.grub.body.velocity.x !== 0 && this.grub.body.velocity.y !== 0) {
//   this.grub.anims.play('idleR', true);
// }
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