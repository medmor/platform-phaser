import { generateGameTextures } from "./graphicHelpers"
import Inputs from "./inputs"
import Player from "./player"
import Platforms from "./platforms"
import Thornes from './thornes'
import Coins from './coins'
import Sound from "./sound"

export default class extends Phaser.Scene {

  graphics: Phaser.GameObjects.Graphics = null
  inputs: Inputs
  player: Player
  platforms: Platforms
  thornes: Thornes
  coins: Coins
  door: Phaser.Geom.Rectangle

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
