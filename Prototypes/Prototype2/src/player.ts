PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
import * as PIXI from 'pixi.js'
import { Game } from './game'


  

export class Player extends PIXI.AnimatedSprite {



    private game: Game
    xspeed = 0
  


    constructor(game: Game, textures, x: number, y: number) {
        
    
        super(textures)
        this.game = game
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

        /*
         * An AnimatedSprite inherits all the properties of a PIXI sprite
         * so you can change its position, its anchor, mask it, etc
         */
        //PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
        this.x = x
        this.y = y
        this.scale.set(10)
        this.animationSpeed = 0.07;
        this.play();

        this.game.pixi.stage.addChild(this);
        
        

    }
   
    
    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.xspeed = -5
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 5
                break;
                

        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "D":
            case "ARROWRIGHT":
            this.xspeed =0
               
                break;
                case "A":
            case "ARROWLEFT":
            this.xspeed = 0
                break;
                
        }
 
    }
 
}