PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
import * as PIXI from 'pixi.js'

import { Game } from './game'

export class Player extends PIXI.AnimatedSprite {

    game: Game
 
    

    constructor(game: Game, textures, x: number, y: number) {
        super(textures)
        this.game = game
        this.x = x
        this.y = y
        this.scale.set(10)
        this.animationSpeed = 0.07;
        this.play();
        this.game.pixi.stage.addChild(this);
    }
    
}