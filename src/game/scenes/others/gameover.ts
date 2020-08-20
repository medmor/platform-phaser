
export default class extends Phaser.Scene {

    gameOverText: Phaser.GameObjects.Text = null

    constructor() {
        super('gameOver')
    }

    create() {
        this.gameOverText = this.add.text(400, 300, 'Game Over', { fontSize: '80px', color: '#ff0000', fontFamily: 'Arial' })
            .setOrigin(.5)
            .setInteractive()

        this.input.on('gameobjectdown', (p: any, go: any) => {
            this.scene.start('intro')
        });
    }

}