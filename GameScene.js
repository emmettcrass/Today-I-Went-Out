class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' })
    this.onHeadphones = false
  }

  preload() {
    this.load.image('chair', '/assets/imgs/chair.PNG')
    this.load.image('table', '/assets/imgs/table.PNG')
    this.load.image('bed', '/assets/imgs/bed.PNG')
    this.load.image('tv', '/assets/imgs/tv.PNG')
  }

  create() {
    this.headphones = this.physics.add.image(640, 140, '#')
    this.headphones = this.physics.add.image(640, 230, '#')

    this.table = this.physics.add.image(700, 162, 'table')
    this.table.setSize(198, 69, true)
    this.table.body.setOffset(0,0)
    this.table.setImmovable(true)
    this.tv = this.physics.add.image(370, 150, 'tv')
    this.tv.setSize(250, 125, true)
    this.tv.body.setOffset(0,0)
    this.tv.setImmovable(true)
    this.bed = this.physics.add.image(84, 295, 'bed')
    this.bed.setSize(165, 325, true)
    this.bed.body.setOffset(0,0)
    this.bed.setImmovable(true)
    //make chair player
    this.chair = this.physics.add.image(370, 400, 'chair')
    //keeps the chair in screen//
    this.chair.setCollideWorldBounds(true)

    //set collisions
    this.physics.add.collider(this.chair, this.heaphones)
    this.physics.add.collider(this.chair, this.tv)
    this.physics.add.collider(this.chair, this.table)
    this.physics.add.collider(this.chair, this.bed)

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

    this.physics.add.overlap(this.chair, this.headphones, this.collectItem, null, this)

    /* function detectOverlap() {
      this.onHeadphones = true
      console.log(`detect on headphones ${this.onHeadphones}`)
     }
    this.collectItem*/

    // Set cursor keys here!
    this.cursors = this.input.keyboard.createCursorKeys()

    //lets change scenes
    this.add.text(300, 20, 'Click to edu!', { fill: '#ffffff', fontSize: '20px' })
    this.input.on('pointerdown', () => {
      this.scene.stop('GameScene')
      this.scene.start('EduScene')
    })
  }

  update() {
    // Update based on keypress here!
    this.chair.setVelocity(0)

    if (this.cursors.right.isDown) {
      this.chair.setVelocityX(150)
    }
    if (this.cursors.left.isDown) {
      this.chair.setVelocityX(-150)
    }
    if (this.cursors.up.isDown) {
      this.chair.setVelocityY(-150)
    }
    if (this.cursors.down.isDown) {
      this.chair.setVelocityY(150)
    }
  }
  //this destroys the headphone item when collected, pauses GameScene and starts HeadphoneScene
  collectItem(chair, headphones) {
    headphones.destroy()
    this.onHeadphones = true
    console.log(`made it to collectitem`)
    this.scene.pause('GameScene')
    console.log(`made it to pause`)
    this.scene.launch('HeadphoneScene')
  }
}
