class HeadphoneScene extends PhaserScene {
    constructor() {
    super({ key:
      'HeadphoneScene'
    })
}

preload() {
  this.load.image('hpInfo', 'https://via.placeholder.com/200x150.png');
}

create() {
  this.hpInfo = this.add.image(400, 300, 'hpInfo');
}

update() {
  
}

