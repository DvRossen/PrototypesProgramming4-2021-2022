PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
import * as PIXI from 'pixi.js'
import { Game } from './game'


export class Player extends PIXI.AnimatedSprite {
 
    idleFrames:PIXI.Texture[]
    walkFrames:PIXI.Texture[]
    
    private game: Game;
   public xspeed: number;
  
   constructor(game:Game, idleFrames:PIXI.Texture[],walkFrames:PIXI.Texture[] ) {
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        super(idleFrames)
        this.game = game
        this.idleFrames = idleFrames
        this.walkFrames = walkFrames
        console.log(idleFrames)
        /*
         * An AnimatedSprite inherits all the properties of a PIXI sprite
         * so you can change its position, its anchor, mask it, etc
         */
        //PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
    
        this.x = 800
        this.y = 800
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