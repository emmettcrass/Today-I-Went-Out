class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
    this.onHeadphones = false
  }

  create() {
    this.bedroom = this.add.image(400, 288, 'bedroom')
    var music = this.sound.add('broomMusic');

    music.play();

    this.headphones = this.physics.add.image(640, 140, '#')
    this.headphones = this.physics.add.image(640, 230, '#')
    this.smallAgenda = this.physics.add.image(500, 95, 'smallAgenda')
    

    this.desk = this.physics.add.image(640, 162, 'desk')
    this.desk.setSize(198, 69, true)
    this.desk.body.setOffset(0, 0)
    this.desk.setImmovable(true)

    this.chair = this.physics.add.image(665, 250, 'chair')
    this.chair.setSize(120, 10, true)
    this.chair.body.setOffset(0, -5)
    this.chair.setImmovable(true)

    this.dresser = this.physics.add.image(360, 190, 'dresser')
    this.dresser.setSize(215, 10, true)
    this.dresser.body.setOffset(0, -40)
    this.dresser.setImmovable(true)

    this.broomBordHor = this.physics.add.image(400,45, '#')
    this.broomBordHor.setSize(815, 10, true)
    this.broomBordHor.setImmovable(true)

    this.broomBordVer1 = this.physics.add.image(70,85, '#')
    this.broomBordVer1.setSize(815, 10, true)
    // this.broomBordVer1.setCircle(30, [0], [0])
    this.broomBordVer1.setAngle(60, true)
    this.broomBordVer1.setImmovable(true)

    this.bed = this.physics.add.image(90, 460, 'bed')
    this.bed.setSize(170, 230, true)
    this.bed.body.setOffset(0, 0)
    this.bed.setImmovable(true)

    //make grub
    // this.grub = this.physics.add.sprite(370, 400, 'grub');
    this.grub = this.physics.add.sprite(200, 300, 'grub');
    this.grub.setSize(80, 188, true)
    this.grub.body.setOffset(42, 22)

    //use this if you want frame names
    // var frameNames = this.textures.get('grub').getFrameNames();
  

    //keeps the grub in screen//
    this.grub.setCollideWorldBounds(true)

    //set collisions
    this.physics.add.collider(this.grub, this.headphones)
    this.physics.add.collider(this.grub, this.dresser)
    this.physics.add.collider(this.grub, this.desk)
    this.physics.add.collider(this.grub, this.bed)
    this.physics.add.collider(this.grub, this.broomBordHor)
    this.physics.add.collider(this.grub, this.broomBordVer1)
    this.physics.add.collider(this.grub, this.chair)
    this.physics.add.collider(this.grub, this.smallAgenda)

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
    this.grub.play('walkleft', true);
  } else if (this.grub.body.velocity.x !== 0 && this.grub.body.velocity.x > 0) {
      this.grub.play('walkright', true);
  } else if (this.grub.body.velocity.y !== 0 && this.grub.body.velocity.y < 0) {
    this.grub.play('walkup', true);
  } else if (this.grub.body.velocity.y !== 0 && this.grub.body.velocity.y > 0) {
    this.grub.play('walkdown', true);
  } else if (this.cursors.left.isUp && this.cursors.isDown !== 1) {
  //   this.grub.anims.play('idleleft', true);
  // } else if (this.cursors.right.isUp && this.cursors.isDown !== 1) {
  //   this.grub.anims.play('idleright', true);
  // } else {
    this.grub.play('idle-left', true);
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