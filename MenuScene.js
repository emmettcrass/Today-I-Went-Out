class MenuScene extends Phaser.Scene {
	constructor() {
		super({ key: 'MenuScene' })
	}

    preload() { 
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });      
    }

    create() {
        var dialog = this.rexUI.add.dialog({
                x: 400,
                y: 300,
				fontSize: '16px',

                background: this.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x1565c0),

                content: createLabel(this, 'Hello, your name is Grub.\nHurry to gather your tools,\nyou\'ve got a big day ahead!'),

                actions: [
                    createLabel(this, 'Let\'s go!')
                ],

                space: {
                    left: 20,
                    right: 20,
                    top: 10,
                    bottom: -20,
                    content: 25,
                    action: 15,
                },

                align: {
                    content: 'center',
                    actions: 'right',
                },
            })

            .layout()
            //.drawBounds(this.add.graphics(), 0xff0000)
            .popUp(1000);

        var tween = this.tweens.add({
            targets: dialog,
            scaleX: 1,
            scaleY: 1,
            ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 1000,
            repeat: 0, // -1: infinity
            yoyo: false
        });

        this.print = this.add.text(0, 0, '');
        dialog
            .on('button.click', function (button, groupName, index, pointer, event) {
                this.print.text += groupName + '-' + index + ': ' + button.text + '\n';
            }, this)
            .on('button.over', function (button, groupName, index, pointer, event) {
                button.getElement('background').setStrokeStyle(1, 0xffffff);
            })
            .on('button.out', function (button, groupName, index, pointer, event) {
                button.getElement('background').setStrokeStyle();
            });

		this.add.text( 150, 250, 'Click to game!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('MenuScene')
			this.scene.start('GameScene')
		})
	} 

	update() {}
}

var createLabel = function (scene, text) {
    return scene.rexUI.add.label({
        width: 40, // Minimum width of round-rectangle
        height: 40, // Minimum height of round-rectangle
      
        background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x5e92f3),

        text: scene.add.text(0, 0, text, {
            fontSize: '24px'
        }),

        space: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        }
    });
}