class teacherScene1 extends Phaser.Scene {
    constructor() {
      super({ key: 'teacherScene1' })
    }
  
    create() {
      //teacherTS

      this.teacherTired = this.add.image(400, 300, 'teacherTired')

      // this.teacherTired = this.add.image(400, 300, 'teacherTired')
      this.teacherFrustrated = this.add.image(400, 300, 'teacherFrustrated')
      //grub TS
      this.grubNormal = this.add.image(400, 300, 'grubNormal')





      this.messageBox = this.add.image(400, 270, 'messageBox')
      this.nextButton = this.add.image(490, 365, 'nextButton').setInteractive();
  
  
      
      this.add.text( 250, 250, 'Welcome to Human Game!', {fill: '#000000', fontSize: '20px'})
      this.add.text( 450, 360, 'Continue!', {fill: '#000000', fontSize: '14px'})
  
      this.nextButton.on('pointerover', () => {
  
        this.nextButton.setTint(0xf3f2c8);
    
      })
    
      this.nextButton.on('pointerout', () => {
    
        this.nextButton.clearTint();
    
      })
  
      this.nextButton.on('pointerdown', () => {
        this.scene.stop('MenuScene')
        this.scene.start('GameScene')
      })
      console.log(`im in teacherScene1 create`)
      this.add.text( 150, 250, 'Click to go back!', {fill: '#000000', fontSize: '20px'})
          this.input.on('pointerdown', () => {
              this.scene.stop('teacherScene1')
              this.scene.resume('GameScene')
    })}


  
  }

  