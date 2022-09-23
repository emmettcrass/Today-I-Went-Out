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


		
		this.add.text( 350, 250, '!', {fill: '#000000', fontSize: '20px'})
		this.nextButton.on('pointerdown', () => {
			this.scene.stop('MenuScene')
			this.scene.start('GameScene')
		})
	}
}