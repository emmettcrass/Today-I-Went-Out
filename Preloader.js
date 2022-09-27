class Preloader extends Phaser.Scene
{
    constructor() {
        super({
          key: 'Preloader'
        })
      }

	preload()
	{
        //scenes
        //audio
        this.load.audio('broomMusic', 'assets/audio/audionautix-water-wood-and-stone.mp3');
        //bedroom
        this.load.image('desk', '/assets/imgs/bRoom/desk.png');
        this.load.image('bed', '/assets/imgs/bRoom/bed.png');
        this.load.image('dresser', '/assets/imgs/bRoom/dresser.png');
        this.load.image('bedroom', '/assets/imgs/bRoom/bedroom.png');
        this.load.image('smallAgenda', '/assets/imgs/bRoom/smallAgenda.png');
        this.load.image('yarnLittle', '/assets/imgs/bRoom/yarnLittle.png');
        this.load.image('yarn', '/assets/imgs/bRoom/Yarn.png');
        this.load.image('boxShoe', '/assets/imgs/bRoom/boxShoe.png');
        this.load.image('chair', '/assets/imgs/bRoom/chair.png');
        this.load.image('headphones', '/assets/imgs/bRoom/hpLittle.png');
        //classroom
        this.load.image('class', '/assets/imgs/class/class.png');
        this.load.image('fileCabinet', '/assets/imgs/class/fileCabinet.png');
        this.load.image('grubSeat', '/assets/imgs/class/grubSeat.png');
        this.load.image('kneeSeat', '/assets/imgs/class/kneeSeat.png');
        this.load.image('snortSeat', '/assets/imgs/class/snortSeat.png');
        //restroom
        // this.load.image('restroom', '/assets/imgs/potty/bkgd.png');
        // this.load.image('litterbox', '/assets/imgs/potty/litterbox.png');
        // this.load.image('hydrant', '/assets/imgs/potty/hydrant.png');
        //transit
        this.load.image('transit', '/assets/imgs/transit/Transit.png');
        //general
        this.load.image('agenda', '/assets/imgs/agenda.png');
        this.load.image('door', '/assets/imgs/door.png');
        this.load.image('loading', '/assets/imgs/loading.png');
        this.load.image('messageBox', '/assets/imgs/messageBox.png');
        this.load.image('nextButton', '/assets/imgs/nextButton.png');
        this.load.image('invisible', '/assets/imgs/invisible.png');

        //characters
        //grub
        // this.load.animation('grubAnim', 'assets/imgs/anim/grubAnim.json');
        this.load.atlas('grub', 'assets/imgs/anim/grubAnim.png', 'assets/imgs/anim/grubAnim.json');
        this.load.image('grubDetermined', '/assets/imgs/chars/grub/grubDetermined.png');
        this.load.image('grubNormal', '/assets/imgs/chars/grub/grubNormal.png');
        this.load.image('grubProud', '/assets/imgs/chars/grub/grubProud.png');
        this.load.image('grubThink', '/assets/imgs/chars/grub/grubThink.png');
        //knee
        this.load.image('kneeLs', '/assets/imgs/chars/knee/kneeLs.png');
        //noot
        this.load.image('nootChill', '/assets/imgs/chars/noot/nootChill.png');
        this.load.image('nootConfuse', '/assets/imgs/chars/noot/nootConfuse.png');
        this.load.image('nootEmpath', '/assets/imgs/chars/noot/nootEmpath.png');
        this.load.image('nootLs', '/assets/imgs/chars/noot/nootLs.png');
        //snort
        this.load.image('snortChill', '/assets/imgs/chars/snort/snortChill.png');
        this.load.image('snortUnsure', '/assets/imgs/chars/snort/snortUnsure.png');
        this.load.image('snortLs', '/assets/imgs/chars/snort/snortLs.png');
        //teacher
        this.load.image('teacherFrustrated', '/assets/imgs/chars/teacher/teacherFrustrated.png');
        this.load.image('teacherLs', '/assets/imgs/chars/teacher/teacherLs.png');
        this.load.image('teacherTired', '/assets/imgs/chars/teacher/teacherTired.png');
        //effects
        this.load.image('glow', '/assets/imgs/chars/glow.png');
    }

	create()
	{
        // this.grub.animations.add('walkleft');
        // this.grub.animations.add('walklefthp');
        // this.grub.animations.add('walkrighthp');
        // this.grub.animations.add('walkright');
        // this.grub.animations.add('walkup');
        // this.grub.animations.add('walkuphp');
        // this.grub.animations.add('walkdown');
        // this.grub.animations.add('walkdownhp');

        //lets make some animations boys
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
          this.scene.start('MenuScene');
		}
	}

    //this works//
    /*this.anims.create({
      key: 'walk',
      frames: [
          { key: 'grub',frame:"rw-001.png" },
          { key: 'grub',frame:"rw-002.png" },
          { key: 'grub',frame:"rw-003.png" },
          { key: 'grub',frame:"rw-004.png" },
          { key: 'grub',frame:"rw-005.png" },
          { key: 'grub',frame:"rw-006.png" },
      ],
      frameRate: 6,
      repeat: -1
    });
    */