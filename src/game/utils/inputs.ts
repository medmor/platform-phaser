

export default class {

  cursors: Phaser.Types.Input.Keyboard.CursorKeys
  jump: Phaser.Input.Keyboard.Key

  constructor(scene: Phaser.Scene){
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.jump = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  horizontale = ()=> this.cursors.left.isDown ? -10 : this.cursors.right.isDown ? 10 : 0

  verticale = ()=> this.jump.isDown ? -16  : 0
}