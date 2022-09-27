class SnortScene extends Phaser.Scene {
    constructor() {
      super({ key: 'SnortScene' })
    }
    preload() {
      this.load.image('snortInfo', '/assets/imgs/messageBox.jpg')
    }
  
    create() {
      this.snortInfo = this.add.image(400, 300, 'snortInfo')
      console.log(`im in SnortScene create`)
      this.add.text( 150, 250, 'Click to go back!', {fill: '#000000', fontSize: '20px'})
          this.input.on('pointerdown', () => {
              this.scene.stop('SnortScene')
              this.scene.resume('GameScene')
    })}
  
  }