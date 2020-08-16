import { generatePlayerTexture } from './graphicsFunctions/playerTexture'
import { generateGroundTexture } from './graphicsFunctions/groundTexture'
import { generateBlockTexture } from './graphicsFunctions/blockTexture'
import { generateThorneTexture } from './graphicsFunctions/thorneTexture'
import { generateCoinTexture } from './graphicsFunctions/coinTexture'
import { generateDoorTexture } from './graphicsFunctions/doorTexture'
import { generateBlockThorneTexture } from './graphicsFunctions/blockThorneTexture'

export function generateGameTextures(graphics){
    generatePlayerTexture(graphics)
    generateGroundTexture(graphics)
    generateBlockTexture(graphics)
    generateThorneTexture(graphics)
    generateCoinTexture(graphics)
    generateDoorTexture(graphics)
    generateBlockThorneTexture(graphics)
}

