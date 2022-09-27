class GameScene extends Phaser.Scene
{
	constructor()
	{
		super(
		{
			key: 'GameScene'
		})
		this.onHeadphones = false
		this.onAgenda = false
    this.onboxShoe = false
    this.onYarn = false
	}

	create()
	{
		this.bedroom = this.add.image(400, 288, 'bedroom')
		// var music = this.sound.add('broomMusic');

		// music.play();

		this.desk = this.physics.add.image(640, 161, 'desk')
		this.desk.setSize(200, 69, true)
		this.desk.body.setOffset(0, 0)
		this.desk.setImmovable(true)

		this.chair = this.physics.add.image(681, 250, 'chair')
		this.chair.setSize(120, 10, true)
		this.chair.body.setOffset(0, -5)
		this.chair.setImmovable(true)

		this.dresser = this.physics.add.image(170, 190, 'dresser')
		this.dresser.setSize(215, 10, true)
		this.dresser.body.setOffset(0, -40)
		this.dresser.setImmovable(true)

		this.yarnLittle = this.physics.add.image(130, 156, 'yarnLittle')
		this.yarnLittle.setSize(49, 49, true)

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

    this.broomBordVer4 = this.physics.add.image(475, 52, 'invisible')
		this.broomBordVer4.setSize(1, 6, true)
		this.broomBordVer4.setImmovable(true)

    this.broomBordVer5 = this.physics.add.image(532, 129, 'invisible')
		this.broomBordVer5.setSize(1, 6, true)
		this.broomBordVer5.setImmovable(true)

    this.broomBordBox = this.physics.add.image(103, 130, 'invisible')
		this.broomBordBox.setSize(3, 8, true)
		this.broomBordBox.setImmovable(true)

    this.broomBordBox1 = this.physics.add.image(156, 130, 'invisible')
		this.broomBordBox1.setSize(3, 8, true)
		this.broomBordBox1.setImmovable(true)

    this.broomBordBox2 = this.physics.add.image(140, 130, 'invisible')
		this.broomBordBox2.setSize(1, 4, true)
		this.broomBordBox2.setImmovable(true)

    this.broomBordCroc = this.physics.add.image(187, 130, 'invisible')
		this.broomBordCroc.setSize(3, 8, true)
		this.broomBordCroc.setImmovable(true)

    this.broomBordCroc1 = this.physics.add.image(253, 130, 'invisible')
		this.broomBordCroc1.setSize(3, 8, true)
		this.broomBordCroc1.setImmovable(true)

    this.broomBordCroc2 = this.physics.add.image(200, 108, 'invisible')
		this.broomBordCroc2.setSize(1, 4, true)
		this.broomBordCroc2.setImmovable(true)
		//borders end

		this.bed = this.physics.add.image(90, 460, 'bed')
		this.bed.setSize(170, 230, true)
		this.bed.body.setOffset(0, 0)
		this.bed.setImmovable(true)

		this.headphones = this.physics.add.sprite(580, 160, 'headphones')
		this.smallAgenda = this.physics.add.sprite(500, 95, 'smallAgenda')
    this.boxShoe = this.physics.add.sprite(220, 145, 'boxShoe')

		//make grub

		this.grub = this.physics.add.sprite(400, 300, 'grub');
		this.grub.setSize(80, 188, true)
		this.grub.body.setOffset(42, 22)

		//use this if you want frame names
		// var frameNames = this.textures.get('grub').getFrameNames();

		//keeps the grub in screen//
		this.grub.setCollideWorldBounds(true)

		//set collisions
		this.physics.add.collider(this.grub, this.headphones);
    this.physics.add.collider(this.grub, this.yarnLittle);
    this.physics.add.collider(this.broomBordBox, this.yarnLittle);
    this.physics.add.collider(this.broomBordBox1, this.yarnLittle);
    this.physics.add.collider(this.broomBordBox2, this.yarnLittle);
    this.physics.add.collider(this.grub, this.boxShoe);
    this.physics.add.collider(this.broomBordCroc, this.boxShoe);
    this.physics.add.collider(this.broomBordCroc1, this.boxShoe);
    this.physics.add.collider(this.broomBordCroc2, this.boxShoe);
    this.physics.add.collider(this.broomBordVer5, this.headphones);
		this.physics.add.collider(this.broomBordVer4, this.smallAgenda);
    this.physics.add.collider(this.grub, this.smallAgenda);
		this.physics.add.collider(this.chair, this.headphones);
		this.physics.add.collider(this.desk, this.headphones);
		this.physics.add.collider(this.desk, this.smallAgenda);
		this.physics.add.collider(this.broomBordAgen, this.smallAgenda);
		this.physics.add.collider(this.grub, this.dresser);
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
    this.physics.add.overlap(this.grub, this.yarnLittle, this.collectYarn, null, this);
		this.physics.add.overlap(this.grub, this.boxShoe, this.seeCroc, null, this);
		// Set cursor keys here!
		this.cursors = this.input.keyboard.createCursorKeys()
    
		//lets change scenes
    this.messageBox = this.add.image(425, 510, 'messageBox').setScale(1.35, 0.48).setTint(0xf19940);
  


		this.add.text(200, 500, 'Check your agenda to see what you have planned!',
		{
			fill: '#ffffff',
			fontSize: '16px'
		})
		this.input.on('pointerdown', () =>
		{
			this.scene.stop('GameScene')
			this.scene.start('EduScene')
		});
	}

	update()
	{

		// Update based on keypress here!
		this.grub.setVelocity(0)
		// let hasActiveInput = false;

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

		// and now you check what is the actual velocity to update or start the correct animation

		// etc...
		// if grub is not moving start the idle animation

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
		// else if (this.cursors.left.isUp )
		// {
		// 	this.grub.anims.play('idle-left', true);
		// 	this.directionFlag = 'idle-left';
		// }
		// else if (this.cursors.right.isUp && this.cursors.isDown !== 1)
		// {
		// 	this.grub.anims.play('idle-right', true);
		// 	this.directionFlag = 'idle-right';
		
		else
		{
			this.grub.play('idle-down', true);
		}


		// start animation when created

		// this.grub.on('animationcomplete', ('walk-right', 'grub') => { // if an animation ends play the idle animation
		//      grub.anims.play('idle-right');
		//  });

		// if (this.cursors.right.isUp && this.grub.body.velocity.x !== 0 && this.grub.body.velocity.y !== 0) {
		//   this.grub.anims.play('idleR', true);
		// }
	}

	//this disableBodys the headphone item when collected, pauses GameScene and starts HeadphoneScene
	collectHp(grub, headphones)
	{
		headphones.disableBody(true, true)
		this.onHeadphones = true
		console.log(`made it to collectHp`)
		this.scene.pause('GameScene')
		console.log(`made it to pause`)
		this.scene.launch('HeadphoneScene')
	}

	collectAgenda(grub, smallAgenda)
	{
		smallAgenda.disableBody(true, true)
		this.onAgenda = true
		console.log(`made it to collectAgenda`)
		this.scene.pause('GameScene')
		console.log(`made it to pause`)
		this.scene.launch('AgendaScene')
	}
  collectYarn(grub, littleYarn)
	{
		littleYarn.disableBody(true, true)
		this.onYarn = true
		console.log(`made it to collectAgenda`)
		this.scene.pause('GameScene')
		console.log(`made it to pause`)
		this.scene.launch('AgendaScene')
	}
  seeCroc(grub, boxShoe)
	{
    boxShoe.disableBody(true, true)
		this.onboxShoe = true
		console.log(`made it to collectAgenda`)
		this.scene.pause('GameScene')
		console.log(`made it to pause`)
		this.scene.launch('AgendaScene')
	}
}