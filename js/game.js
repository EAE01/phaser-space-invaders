class Game{
  constructor(){
    console.log('Initialising game')
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: this.preload.bind(this), create: this.create.bind(this), update: this.update.bind(this) });
  }

  preload(){

  }

  create(){

  }

  update(){

  }
}