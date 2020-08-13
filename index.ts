
import './style.css'
import * as Phaser from 'phaser'

import Scene from './game/scene'



var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Scene ],
    parent: "game",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
};

const game = new Phaser.Game(config);
