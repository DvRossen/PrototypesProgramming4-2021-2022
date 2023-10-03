import * as PIXI from 'pixi.js'
import { Assets } from './assets'
import { Player } from './player'

export class Game {

    
    private player: Player
    private _pixi: PIXI.Application

    
    public get pixi(): PIXI.Application { return this._pixi }

    constructor() {
        this._pixi = new PIXI.Application({ width: 1600, height: 800, backgroundColor: 0x5500DD })
        document.body.appendChild(this._pixi.view)
        new Assets(this)
    }

    public loadCompleted() { 
        let frames = this.PlayerIdleFrames()
        this.player = new Player(this, frames, 250, 250)
        this._pixi.ticker.add((delta: number) => this.update(delta))
    }


    private update(delta: number) {
        this.player.x += this.player.xspeed
        this.player.update(delta)
        if( this.player.action == "attack"){
        if(this.player.currentFrame == 5){
        this.player.stopAction()
        }
    } 
    }

    public PlayerIdleFrames(): PIXI.Texture[] {
        let frames: PIXI.Texture[] = [];

        for (let i = 0; i <= 9; i++) {
            frames.push(PIXI.Texture.from(`Pixel_Knight_Idle${i}.png`));
        }
        return frames
    }

    public PlayerAttackFrames(): PIXI.Texture[] {
        let frames: PIXI.Texture[] = [];
      for(let i = 0 ; i <= 5; i++){
        frames.push(PIXI.Texture.from(`Pixel_Knight_Attack${i}.png`));
      }
        return frames
    }

    public PlayerWalkFrames(): PIXI.Texture[] {
        let frames: PIXI.Texture[] = [];

         for (let i = 0; i <= 3; i++) {
            frames.push(PIXI.Texture.from(`Pixel_Knight_Walk${i}.png`));
        }
            return frames
        
   
}
}



