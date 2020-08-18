import  'phaser'

import Intro from './game/scenes/others/intro'
import Level1 from './game/scenes/levels/level1'
import Level2 from './game/scenes/levels/level2'
import UIScene from './game/scenes/others/ui'
import WinScene from './game/scenes/others/win'
import Gameover from './game/scenes/others/gameover'

export default class extends Phaser.Game {

  constructor(){
    super(config)
  }

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Intro, Level1, Level2, UIScene, WinScene, Gameover ],
    parent: "game",
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        },

    },
};