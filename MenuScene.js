class MenuScene extends Phaser.Scene {
	constructor() {
		super({ key: 'MenuScene' })
	}

	create() {
		this.add.text( 150, 250, 'Click to game!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('MenuScene')
			this.scene.start('GameScene')
		})
	}
}