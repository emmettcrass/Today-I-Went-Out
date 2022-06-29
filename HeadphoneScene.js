class HeadphoneScene extends Phaser.Scene {
  constructor() {
    super({ key: 'HeadphoneScene' })
  }
  preload() {
    this.load.image('hpInfo', 'https://via.placeholder.com/200x150.png')
  }

  create() {
    this.hpInfo = this.add.image(400, 300, 'hpInfo')
    console.log(`im in headphonescene create`)
  }

  update() {
    console.log(`im in headphonescene update`)
  }
}
