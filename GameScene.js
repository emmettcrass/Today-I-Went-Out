// const GRUB_KEY = 'grub'
// const HP_KEY = 'headphones'

class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
    this.onHeadphones = false
    this.onAgenda = false
  }

  preload() {
        this.load.audio('broomMusic', 'assets/audio/audionautix-water-wood-and-stone.mp3');
        //bedroom
        this.load.image('desk', '/assets/imgs/bRoom/desk.png');
        this.load.image('bed', '/assets/imgs/bRoom/bed.png');
        this.load.image('dresser', '/assets/imgs/bRoom/dresser.png');
        this.load.image('bedroom', '/assets/imgs/bRoom/bedroom.png');
        this.load.image('smallAgenda', '/assets/imgs/bRoom/smallAgenda.png');
        this.load.image('yarnLittle', '/assets/imgs/bRoom/yarnLittle.png');
        this.load.image('boxShoe', '/assets/imgs/bRoom/boxShoe.png');
        this.load.image('chair', '/assets/imgs/bRoom/chair.png');
        this.load.image('agenda', '/assets/imgs/agenda.png');
        this.load.image('door', '/assets/imgs/door.png');
        this.load.image('loading', '/assets/imgs/loading.png');
        this.load.image('messageBox', '/assets/imgs/messageBox.png');
        this.load.image('nextButton', '/assets/imgs/nextButton.png');
        this.load.image('headphones', '/assets/imgs/bRoom/hpLittle.png');

        this.load.atlas('grub', 'assets/imgs/anim/grubAnim.png', 'assets/imgs/anim/grubAnim.json');
        this.load.image('grubDetermined', '/assets/imgs/chars/grub/grubDetermined.png');
        this.load.image('grubNormal', '/assets/imgs/chars/grub/grubNormal.png');
        this.load.image('grubProud', '/assets/imgs/chars/grub/grubProud.png');
        this.load.image('grubThink', '/assets/imgs/chars/grub/grubThink.png');


  }

  create() {
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

    //borders
    this.broomBordHor = this.physics.add.image(400,40, '#')
    this.broomBordHor.setSize(815,10, true)
    this.broomBordHor.setImmovable(true)

    this.broomBordAgen = this.physics.add.image(400,45, '#')
    this.broomBordAgen.setSize(815,15, true)
    this.broomBordAgen.setImmovable(true)

    this.broomBordVer = this.physics.add.image(40,85, '#')
    this.broomBordVer.setSize(15, 810, true)
    this.broomBordVer.setImmovable(true)

    this.broomBordVer1 = this.physics.add.image(60,35, '#')
    this.broomBordVer1.setSize(10, 220, true)
    this.broomBordVer1.setImmovable(true)

    this.broomBordVer2 = this.physics.add.image(760,95, '#')
    this.broomBordVer2.setSize(10, 220, true)
    this.broomBordVer2.setImmovable(true)

    this.broomBordVer3 = this.physics.add.image(780,100, '#')
    this.broomBordVer3.setSize(15, 820, true)
    this.broomBordVer3.setImmovable(true)
    //borders end

    this.bed = this.physics.add.image(90, 460, 'bed')
    this.bed.setSize(170, 230, true)
    this.bed.body.setOffset(0, 0)
    this.bed.setImmovable(true)
    
    this.headphones = this.physics.add.sprite(580, 160, 'headphones')
  
    this.smallAgenda = this.physics.add.sprite(500, 95, 'smallAgenda')

  //make grub

    this.grub = this.physics.add.sprite(200, 300, 'grub');
    this.grub.setSize(80, 188, true)
    this.grub.body.setOffset(42, 22)

    //make grub animations
    this.anims.create({
      key: 'walk-right',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkR-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'walk-left',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkL-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'walk-down',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkD-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'walk-up',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkU-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'Hpwalk-up',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkUhp-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'Hpwalk-down',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkDhp-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'Hpwalk-left',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkLhp-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'Hpwalk-right',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 6,
          zeroPad: 2,
          prefix: 'walkRhp-',
          suffix: '.png'
        }),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'idle-left',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 12,
          zeroPad: 2,
          prefix: 'idleL-',
          suffix: '.png'
        }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'idle-right',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 12,
          zeroPad: 2,
          prefix: 'idleR-',
          suffix: '.png'
        }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'Hpidle-right',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 12,
          zeroPad: 2,
          prefix: 'idleRhp-',
          suffix: '.png'
        }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'Hpidle-left',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 12,
          zeroPad: 2,
          prefix: 'idleLhp-',
          suffix: '.png'
        }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create(
    {
      key: 'idle-down',
      frames: this.anims.generateFrameNames('grub', {
          start: 1,
          end: 1,
          zeroPad: 2,
          prefix: 'idleDown-',
          suffix: '.png'
        }),
      frameRate: 1,
      repeat: -1,
    });




    //use this if you want frame names
    // var frameNames = this.textures.get('grub').getFrameNames();
  

    //keeps the grub in screen//
    this.grub.setCollideWorldBounds(true)

    //set collisions
    this.physics.add.collider(this.grub, this.headphones);
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

    // Set cursor keys here!
    this.cursors = this.input.keyboard.createCursorKeys()


    //lets change scenes
    this.add.text(300, 20, 'Click to edu!', {
      fill: '#000000',
      fontSize: '20px'
    })
    this.input.on('pointerdown', () => {
      this.scene.stop('GameScene')
      this.scene.start('EduScene')
    });
  }


  update() {

    
    // Update based on keypress here!
    this.grub.setVelocity(0)
    // let hasActiveInput = false;

    if(this.cursors.right.isDown){
      this.grub.body.velocity.x += 170;
    }
    if(this.cursors.left.isDown){
      this.grub.body.velocity.x -= 170;
    }
    if(this.cursors.up.isDown){
      this.grub.body.velocity.y -= 170;
    }
    if(this.cursors.down.isDown){
      this.grub.body.velocity.y += 170;
    }
    
    // and now you check what is the actual velocity to update or start the correct animation

    // etc...
    // if grub is not moving start the idle animation

      if (this.grub.body.velocity.x !== 0 && this.grub.body.velocity.x < 0) {
        this.grub.play('walk-left', true);
        this.directionFlag = 'walk-left';
      } else if (this.grub.body.velocity.x !== 0 && this.grub.body.velocity.x > 0) {
          this.grub.play('walk-right', true);
          this.directionFlag = 'walk-right';
      } else if (this.grub.body.velocity.y !== 0 && this.grub.body.velocity.y < 0) {
        this.grub.play('walk-up', true);
        this.directionFlag = 'walk-up';
      } else if (this.grub.body.velocity.y !== 0 && this.grub.body.velocity.y > 0) {
        this.grub.play('walk-down', true);
        this.directionFlag = 'walk-down';
      } else if (this.cursors.left.isUp && this.cursors.isDown !== 1) {
        this.grub.anims.play('idle-left', true);
        this.directionFlag = 'idle-left';
      } else if (this.cursors.right.isUp && this.cursors.isDown !== 1) {
        this.grub.anims.play('idle-right', true);
        this.directionFlag = 'idle-right';
      } else {
        this.grub.play('idle-down', true);
      }
// start animation when created

// this.grub.on('animationcomplete', () => { // if an animation ends play the idle animation
//      grub.anims.play('idleR');
//  });

// if (this.cursors.right.isUp && this.grub.body.velocity.x !== 0 && this.grub.body.velocity.y !== 0) {
//   this.grub.anims.play('idleR', true);
// }
    }
  
  //this destroys the headphone item when collected, pauses GameScene and starts HeadphoneScene
  collectHp(grub, headphones) {
    headphones.destroy()
    this.onHeadphones = true
    console.log(`made it to collectHp`)
    this.scene.pause('GameScene')
    console.log(`made it to pause`)
    this.scene.launch('HeadphoneScene')
  }

  collectAgenda(grub, smallAgenda) {
    smallAgenda.destroy()
    this.onAgenda = true
    console.log(`made it to collectAgenda`)
    this.scene.pause('GameScene')
    console.log(`made it to pause`)
    this.scene.launch('HeadphoneScene')
  }
}
