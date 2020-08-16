import Player from "../characters/player"
import Platforms from "../world/platforms"
import Thornes from '../world/thornes'
import Coins from '../world/coins'
import Inputs from "../utils/inputs"
import Sound from "../utils/sound"

export default class extends Phaser.Scene {

  inputs: Inputs
  player: Player
  platforms: Platforms
  thornes: Thornes
  coins: Coins
  door: Phaser.Geom.Rectangle

  lastTime = 0

  constructor(){
    super('scene3')
  }

  init(){ }

  preload(){ }

  create(){
  }

  update(elapsedTime){
  }

}