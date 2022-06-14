class EduScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EduScene' })
	}

	create() {
		this.add.text( 150, 250, 'Click to Bath!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('EduScene')
			this.scene.start('BathScene')
		})
	}
}
