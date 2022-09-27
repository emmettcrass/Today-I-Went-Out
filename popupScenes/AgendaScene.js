class AgendaScene extends Phaser.Scene {
    constructor() {
      super({ key: 'AgendaScene' })
    }
  
    create() {
      this.bkgd = this.add.image(400, 300, 'messageBox').setScale(1.35, .75)
      this.Agenda = this.add.image(200, 300, 'agenda')
      console.log(`im in AgendaScene create`)
      this.add.text( 330, 260, 'Lists that break things\ndown make them easier to\nmanage and rememeber.', {fill: '#ffffff', fontSize: '20px'})

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