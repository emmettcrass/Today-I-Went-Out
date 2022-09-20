class EduScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EduScene' })
	}


	preload() {
		this.load.atlas('player', '/assets/imgs/player.png', '/assets/imgs/player.json');

		//grubs
		this.load.image('grubDetermined', '/assets/imgs/grubDetermined.png');
		this.load.image('grubLs', '/assets/imgs/grubLs.png');
		this.load.image('grubNormal', '/assets/imgs/grubNormal.png');
		this.load.image('grubProud', '/assets/imgs/grubProud.png');
		this.load.image('grubThink', '/assets/imgs/grubThink.png');
		this.load.image('grubSeat', '/assets/imgs/grubSeat.png');

		//knees
		this.load.image('kneeSeat', '/assets/imgs/kneeSeat.png');
		this.load.image('kneeSeat', '/assets/imgs/kneeLs.png');

		//snort
		this.load.image('snortSeat', '/assets/imgs/snortSeat.png');
		this.load.image('snortChill', '/assets/imgs/snortChill.png');
		this.load.image('snortLs', '/assets/imgs/snortLs.png');
		this.load.image('snortUnsure', '/assets/imgs/snortUnsure.png');

		//teach
		this.load.image('teacherLs', '/assets/imgs/teacherLs.png');
		this.load.image('teacherFrustrated', '/assets/imgs/teacherFrustrated.png');
		this.load.image('teacherTired', '/assets/imgs/teacherTired.png');

		//objects
		this.load.image('class', '/assets/imgs/class.png');
		this.load.image('agenda', '/assets/imgs/agenda.png');
		this.load.image('chair', '/assets/imgs/chair.png');
		this.load.image('door', '/assets/imgs/door.png');
		this.load.image('fileCabinet', '/assets/imgs/fileCabinet.png');
	
		this.load.plugin('rexglowfilter2pipelineplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexglowfilter2pipelineplugin.min.js', true);
	
		this.load.scenePlugin({
		  key: 'rexuiplugin',
		  url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
		  sceneKey: 'rexUI'
	  });     
	
	  }

	create() {
		this.add.image(400, 300, 'class');
		this.add.text( 150, 250, 'Click to Bath!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('EduScene')
			this.scene.start('BathScene')
		})
	}
}
