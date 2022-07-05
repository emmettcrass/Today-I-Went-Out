class PalScene extends Phaser.Scene {
	constructor() {
		super({ key: 'PalScene' })
	}

	create() {
		this.add.text( 150, 250, 'Click to menu!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('PalScene')
			this.scene.start('MenuScene')
		})
	}
}
