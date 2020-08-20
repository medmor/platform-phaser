import { generateGameTextures } from "../../utils/graphicHelpers"
import Sound from "../../utils/sound"

export default class extends Phaser.Scene {

    graphics: Phaser.GameObjects.Graphics = null
    loadingText: Phaser.GameObjects.Text = null


    constructor() {
        super('intro')
    }

    init() {
        this.graphics = this.add.graphics()
        this.loadingText = this.add.text(400, 300, 'loading', { fontSize: '80px', color: '#ff0000', fontFamily: 'Arial' })
            .setOrigin(.5)
    }

    preload() {
        //Sound.load()
        generateGameTextures(this.graphics)
        this.game.scene.start('ui')
        this.load.audio('coin', 'https://raw.githubusercontent.com/medmor/platform-phaser/local/docs/sounds/coin.wav')
    }

    create() {
        (this.scene.get('ui') as any).togglePlayerInventory()
        this.loadingText.setInteractive()
        this.loadingText.setText('Press enter to play')
        this.input.on('gameobjectdown', (p: any, go: any) => {
            this.scene.start('scene1')
        });
        this.input.keyboard.on('keydown', function (event: KeyboardEvent) {
            if (event.key === "Enter") this.scene.start('scene1')
        }, this);
        this.sound.play('coin')
    }


}