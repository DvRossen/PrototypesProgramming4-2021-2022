PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
import * as PIXI from 'pixi.js'
import { sound } from '@pixi/sound';
import { Game } from './game'

export class Player extends PIXI.AnimatedSprite {

    game: Game
    xspeed: number = 0
    facing: String = "left"
    action: String = ""
    

    constructor(game: Game, textures, x: number, y: number) {
        super(textures)
        sound.add("sword_hit", "sword_hit.mp3")
        this.game = game
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        this.x = x
        this.y = y
        this.scale.set(10)
        this.animationSpeed = 0.07;
        this.play();
        this.game.pixi.stage.addChild(this);
    }
    
    public stopAction(){
            this.xspeed =0
            this.textures = this.game.PlayerIdleFrames()
            this.play();
            this.action = ""
    }
    
    onKeyDown(e: KeyboardEvent): void {
        if( this.action == ""){
        
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.xspeed = -5
                if (e.repeat){return}
                else
                this.facing = "left"
                this.textures = this.game.PlayerWalkFrames()
                this.play();
                this.scale.x = 10
                break;
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 5
                if (e.repeat)return
                else 
                this.facing = "right"
                this.textures = this.game.PlayerWalkFrames()
                this.play();
                this.scale.x = -10
                break;
            case " ":
                this.xspeed = 0
                this.textures = this.game.PlayerAttackFrames()
                this.play();
                this.action = "attack" 
                setTimeout(() =>{ sound.play("sword_hit") }, 300)
                break;
        }
        }
    }

  onKeyUp(e: KeyboardEvent): void {
    if( this.action == ""){
        switch (e.key.toUpperCase()) {
            case "D":
            case "ARROWRIGHT":
            this.xspeed =0
            if (e.repeat)return
            else 
            this.textures = this.game.PlayerIdleFrames()
            this.play();
            this.scale.x = -10
            
                break;
                case "A":
            case "ARROWLEFT":
            this.xspeed = 0
            if (e.repeat)return
            else 
            this.textures = this.game.PlayerIdleFrames()
            this.play();
            this.scale.x = 10
                break;
            case " ": 
            
            if(this.currentFrame == 5){
                this.textures = this.game.PlayerIdleFrames()
            }
             break;   
        }
        }
 
    }
 
}