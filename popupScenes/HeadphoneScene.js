class HeadphoneScene extends Phaser.Scene {
  constructor() {
    super({ key: 'HeadphoneScene' })
  }
  preload() {
    this.load.image('hpInfo', '/assets/imgs/messageBox.jpg')
  }

  create() {
    this.hpInfo = this.add.image(400, 300, 'hpInfo')
    console.log(`im in headphonescene create`)
    this.add.text( 150, 250, 'Click to go back!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('HeadphoneScene')
			this.scene.resume('GameScene')
  })}

}