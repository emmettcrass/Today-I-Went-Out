class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
    this.onHeadphones = false
  }

  // preload() {
  //   grub.preload(this);
  // }

  create() {
    this.bedroom = this.add.image(400, 288, 'bedroom', null, { isStatic: true })
    // var music = this.sound.add('broomMusic');

    // music.play();

    this.headphones = this.matter.add.sprite(640, 140, '#', null, { isStatic: true })
    this.headphones = this.matter.add.sprite(640, 230, '#', null, { isStatic: true })
    this.smallAgenda = this.matter.add.sprite(500, 95, 'smallAgenda')
    

    this.desk = this.matter.add.sprite(640, 162, 'desk', null, { isStatic: true })
    // this.desk.setSize(198, 69, true)
    // // this.desk.body.setOffset(0, 0)
    // this.desk.setImmovable(true)

    this.chair = this.matter.add.sprite(665, 250, 'chair', null, { isStatic: true })
    // this.chair.setSize(120, 10, true)
    // this.chair.body.setOffset(0, -5)
    // this.chair.setImmovable(true)

    this.dresser = this.matter.add.sprite(360, 190, 'dresser', null, { isStatic: true })
    // this.dresser.setSize(215, 10, true)
    // this.dresser.body.setOffset(0, -40)
    // this.dresser.setImmovable(true)

    this.broomBordHor = this.matter.add.sprite(400,45, '#', null, { isStatic: true })
    // this.broomBordHor.setSize(815, 10, true)
    // this.broomBordHor.setImmovable(true)

    this.broomBordVer1 = this.matter.add.sprite(70,85, '#', null, { isStatic: true })
    // this.broomBordVer1.setSize(815, 10, true)
    // this.broomBordVer1.setCircle(30, [0], [0])
    // this.broomBordVer1.setAngle(60, true)
    // this.broomBordVer1.setImmovable(true)

    this.bed = this.matter.add.sprite(90, 460, 'bed', null, { isStatic: true })
    // this.bed.setSize(170, 230, true)
    // this.bed.body.setOffset(0, 0)
    // this.bed.setImmovable(true)

    //make grub
    this.grub = this.matter.add.sprite(370, 400, 'grub');
    // this.grub.setSize(80, 188, true)
    // this.grub.body.setOffset(42, 22)

    //use this if you want frame names
    // var frameNames = this.textures.get('grub').getFrameNames();
  

    //keeps the grub in screen//
    // this.grub.setCollideWorldBounds(true)
    this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

    //set collisions
    // this.matter.add.collider(this.grub, this.headphones)
    // this.matter.add.collider(this.grub, this.dresser)
    // this.matter.add.collider(this.grub, this.desk)
    // this.matter.add.collider(this.grub, this.bed)
    // this.matter.add.collider(this.grub, this.broomBordHor)
    // this.matter.add.collider(this.grub, this.broomBordVer1)
    // this.matter.add.collider(this.grub, this.chair)
    // this.matter.add.collider(this.grub, this.smallAgenda)

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

    // this.matter.add.overlap(this.grub, this.headphones, this.collectItem, null, this)

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
  } else if (this.cursors.left.isUp && this.cursors.isDown !== 1) {
    this.grub.anims.play('idleL', true);
  } else if (this.cursors.right.isUp && this.cursors.isDown !== 1) {
    this.grub.anims.play('idleR', true);
  } else {
    this.grub.play('idleDown', true);
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