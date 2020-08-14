
import './style.css'
import * as Phaser from 'phaser'

import Intro from './game/scenes/intro'
import Scene1 from './game/scenes/scene1'
import Scene2 from './game/scenes/scene2'



const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Intro, Scene1, Scene2 ],
    parent: "game",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        },

    },
};

const game = new Phaser.Game(config);
game.scene.start('intro')
