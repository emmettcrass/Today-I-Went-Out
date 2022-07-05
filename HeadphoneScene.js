class HeadphoneScene extends Phaser.Scene {
  constructor() {
    super({ key: 'HeadphoneScene' })
  }
  preload() {
    this.load.image('hpInfo', '/assets/imgs/placehold.jpg')
  }

  create() {
    this.hpInfo = this.add.image(400, 300, 'hpInfo')
    console.log(`im in headphonescene create`)
  }

  update() {
    console.log(`im in headphonescene update`)
  }
}
