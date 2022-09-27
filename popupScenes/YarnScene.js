class YarnScene extends Phaser.Scene {
    constructor() {
      super({ key: 'YarnScene' })
    }
    create() {
      this.bkgd = this.add.image(400, 300, 'messageBox').setScale(1.35, .75)
      this.Agenda = this.add.image(200, 300, 'agenda')
      console.log(`im in AgendaScene create`)
      this.add.text( 330, 260, 'It can help to have\na fidget object to let\nout overwhelming energy.', {fill: '#ffffff', fontSize: '20px'})

      this.nextButton = this.add.image(560, 365, 'nextButton').setInteractive();

      this.add.text( 520, 360, 'Continue!', {fill: '#000000', fontSize: '14px'})
  
      this.nextButton.on('pointerover', () => {
  
        this.nextButton.setTint(0xf3f2c8);
    
      })
    
      this.nextButton.on('pointerout', () => {
    
        this.nextButton.clearTint();
    
      })
          this.nextButton.on('pointerdown', () => {
              this.scene.stop('AgendaScene')
              this.scene.resume('GameScene')
    })}
  
  }