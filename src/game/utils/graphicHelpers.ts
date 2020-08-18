import { generatePlayerTexture } from './graphicsFunctions/playerTexture'
import { generateGroundTexture } from './graphicsFunctions/groundTexture'
import { generateBlockTexture } from './graphicsFunctions/blockTexture'
import { generateThorneTexture } from './graphicsFunctions/thorneTexture'
import { generateCoinTexture } from './graphicsFunctions/coinTexture'
import { generateDoorTexture } from './graphicsFunctions/doorTexture'
import { generateBlockThorneTexture } from './graphicsFunctions/blockThorneTexture'
import { generateHeartTexture } from './graphicsFunctions/heartTexture'

export function generateGameTextures(graphics: Phaser.GameObjects.Graphics){
    generatePlayerTexture(graphics)
    generateGroundTexture(graphics)
    generateBlockTexture(graphics)
    generateThorneTexture(graphics)
    generateCoinTexture(graphics)
    generateDoorTexture(graphics)
    generateBlockThorneTexture(graphics)
    generateHeartTexture(200, 200, 300, 300, 50, 50, 0xffffff, graphics)
}

