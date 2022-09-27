class EduScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EduScene' })
	}

	create() {
		this.add.image(400, 300, 'class');
		this.add.text( 150, 250, 'Click to Bath!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('EduScene')
			this.scene.start('BathScene')
		})

		//borders
		this.broomBordHor = this.physics.add.image(400, 40, 'invisible')
		this.broomBordHor.setSize(815, 10, true)
		this.broomBordHor.setImmovable(true)

		this.broomBordAgen = this.physics.add.image(400, 45, 'invisible')
		this.broomBordAgen.setSize(815, 15, true)
		this.broomBordAgen.setImmovable(true)

		this.broomBordVer = this.physics.add.image(40, 85, 'invisible')
		this.broomBordVer.setSize(15, 810, true)
		this.broomBordVer.setImmovable(true)

		this.broomBordVer1 = this.physics.add.image(60, 35, 'invisible')
		this.broomBordVer1.setSize(10, 220, true)
		this.broomBordVer1.setImmovable(true)

		this.broomBordVer2 = this.physics.add.image(760, 95, 'invisible')
		this.broomBordVer2.setSize(10, 220, true)
		this.broomBordVer2.setImmovable(true)

		this.broomBordVer3 = this.physics.add.image(780, 100, 'invisible')
		this.broomBordVer3.setSize(15, 820, true)
		this.broomBordVer3.setImmovable(true)
		//borders end

		//characters
		this.grub = this.physics.add.sprite(400, 300, 'grub');
		this.grub.setSize(80, 188, true)
		this.grub.body.setOffset(42, 22)

		//use this if you want frame names
		// var frameNames = this.textures.get('grub').getFrameNames();

		//keeps the grub in screen//
		this.grub.setCollideWorldBounds(true)

		//set collisions
		this.physics.add.collider(this.grub, this.knee);
		this.physics.add.collider(this.grub, this.snort);
		this.physics.add.collider(this.chair, this.teacher);
		this.physics.add.collider(this.grub, this.desk);
		this.physics.add.collider(this.grub, this.bed);
		this.physics.add.collider(this.grub, this.broomBordHor);
		this.physics.add.collider(this.grub, this.broomBordVer);
		this.physics.add.collider(this.grub, this.broomBordVer1);
		this.physics.add.collider(this.grub, this.broomBordVer2);
		this.physics.add.collider(this.grub, this.broomBordVer3);
		this.physics.add.collider(this.grub, this.chair);

		this.physics.add.overlap(this.grub, this.headphones, this.collectHp, null, this);
		this.physics.add.overlap(this.grub, this.smallAgenda, this.collectAgenda, null, this);

		// Set cursor keys here!
		this.cursors = this.input.keyboard.createCursorKeys()

		//lets change scenes
		this.add.text(300, 20, 'Click to edu!',
		{
			fill: '#000000',
			fontSize: '20px'
		})
		this.input.on('pointerdown', () =>
		{
			this.scene.stop('GameScene')
			this.scene.start('EduScene')
		});
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
	

	//this disableBodys the headphone item when collected, pauses GameScene and starts HeadphoneScene
	collectHp(grub, headphones)
	{
		headphones.disableBody()
		this.onHeadphones = true
		console.log(`made it to collectHp`)
		this.scene.pause('GameScene')
		console.log(`made it to pause`)
		this.scene.launch('HeadphoneScene')
	}

	collectAgenda(grub, smallAgenda)
	{
		smallAgenda.disableBody()
		this.onAgenda = true
		console.log(`made it to collectAgenda`)
		this.scene.pause('GameScene')
		console.log(`made it to pause`)
		this.scene.launch('HeadphoneScene')
	}
}
	

// create()
// {
// 	// previous code...

// 	this.input.keyboard.once('keydown-SPACE', () => {
// 		// fade to black
// 		this.cameras.main.fadeOut(1000, 0, 0, 0)
// 	})

// 	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
// 		this.scene.start('phaser-logo')
// 	})
// }