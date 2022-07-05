class BathScene extends Phaser.Scene {
	constructor() {
		super({ key: 'BathScene' })
	}

	create() {
		this.add.text( 150, 250, 'Click to Pal!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('BathScene')
			this.scene.start('PalScene')
		})
	}
}
