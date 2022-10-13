class MenuScene extends Phaser.Scene {
	constructor() {
		super({ key: 'MenuScene' })
	}

	preload() {
		this.load.image('messageBox', '/assets/imgs/messageBox.png');
		this.load.image('nextButton', '/assets/imgs/nextButton.png');
	  }
	  
	create() {

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
	}
}

  

