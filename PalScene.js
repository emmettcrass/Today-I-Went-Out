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
	update() {
				this.grub.setVelocity(0)
		
				if (this.cursors.right.isDown)
				{
					this.grub.body.velocity.x += 170;
				}
				if (this.cursors.left.isDown)
				{
					this.grub.body.velocity.x -= 170;
				}
				if (this.cursors.up.isDown)
				{
					this.grub.body.velocity.y -= 170;
				}
				if (this.cursors.down.isDown)
				{
					this.grub.body.velocity.y += 170;
				}
		
				if (this.grub.body.velocity.x !== 0 && this.grub.body.velocity.x < 0)
				{
					this.grub.play('walk-left', true);
					this.directionFlag = 'walk-left';
				}
				else if (this.grub.body.velocity.x !== 0 && this.grub.body.velocity.x > 0)
				{
					this.grub.play('walk-right', true);
					this.directionFlag = 'walk-right';
				}
				else if (this.grub.body.velocity.y !== 0 && this.grub.body.velocity.y < 0)
				{
					this.grub.play('walk-up', true);
					this.directionFlag = 'walk-up';
				}
				else if (this.grub.body.velocity.y !== 0 && this.grub.body.velocity.y > 0)
				{
					this.grub.play('walk-down', true);
					this.directionFlag = 'walk-down';
				}
				else
				{
					this.grub.play('idle-down', true);
				}
	}
}
