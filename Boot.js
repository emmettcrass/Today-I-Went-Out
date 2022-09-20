class Boot extends Phaser.Scene
{
    constructor ()
    {
        super({key: 'Boot'});
    }

    preload ()
    {
        this.load.image('loading', 'assets/loading.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
