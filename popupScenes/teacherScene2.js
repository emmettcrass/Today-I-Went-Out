class teacherScene2 extends Phaser.Scene {
    constructor() {
      super({ key: 'teacherScene2' })
    }
    preload() {
      this.load.image('t2Info', '/assets/imgs/messageBox.jpg')
    }
  
    create() {
      this.t2Info = this.add.image(400, 300, 't2Info')
      console.log(`im in teacherScene2 create`)
      this.add.text( 150, 250, 'Click to go back!', {fill: '#000000', fontSize: '20px'})
          this.input.on('pointerdown', () => {
              this.scene.stop('teacherScene2')
              this.scene.resume('GameScene')
    })}
  
  }