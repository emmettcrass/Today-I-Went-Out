class KneeScene extends Phaser.Scene {
    constructor() {
      super({ key: 'KneeScene' })
    }
    preload() {
      this.load.image('kneeInfo', '/assets/imgs/messageBox.jpg')
    }
  
    create() {
      this.kneeInfo = this.add.image(400, 300, 'kneeInfo')
      console.log(`im in KneeScene create`)
      this.add.text( 150, 250, 'Click to go back!', {fill: '#000000', fontSize: '20px'})
          this.input.on('pointerdown', () => {
              this.scene.stop('KneeScene')
              this.scene.resume('GameScene')
    })}
  
  }