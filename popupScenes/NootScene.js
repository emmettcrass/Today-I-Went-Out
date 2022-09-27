class NootScene extends Phaser.Scene {
    constructor() {
      super({ key: 'NootScene' })
    }
    preload() {
      this.load.image('nootInfo', '/assets/imgs/messageBox.jpg')
    }
  
    create() {
      this.nootInfo = this.add.image(400, 300, 'nootInfo')
      console.log(`im in NootScene create`)
      this.add.text( 150, 250, 'Click to go back!', {fill: '#000000', fontSize: '20px'})
          this.input.on('pointerdown', () => {
              this.scene.stop('NootScene')
              this.scene.resume('GameScene')
    })}
  
  }