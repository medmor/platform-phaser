import * as Phaser from 'phaser'

import Intro from './game/scenes/intro'
import Scene1 from './game/scenes/scene1'
import Scene2 from './game/scenes/scene2'
import UIScene from './game/scenes/ui'

export default class extends Phaser.Game {

  constructor(){
    super(config)
  }

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Intro, Scene2, UIScene ],
    parent: "game",
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        },

    },
};