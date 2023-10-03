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
        this.player = new Player(this, frames, 100, 100)
        this._pixi.ticker.add((delta: number) => this.update(delta))
    }


    private update(delta: number) {

        this.player.update(delta)
    } 
    

    public PlayerIdleFrames(): PIXI.Texture[] {
        let frames: PIXI.Texture[] = [];

        for (let i = 0; i <= 9; i++) {
            frames.push(PIXI.Texture.from(`Pixel Knight Idle000${i}.png`));
        }
        return frames
    }


}
