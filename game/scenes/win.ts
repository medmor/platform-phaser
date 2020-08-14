
export default class extends Phaser.Scene {


  lastTime = 0

  constructor(){
    super('scene2')
  }

  init(){
    console.log('init')
  }

  preload(){
    console.log('preload')
  }

  create(){
    console.log('create')
  }

  update(elapsedTime){


    this.lastTime = this.time.now
  }

}