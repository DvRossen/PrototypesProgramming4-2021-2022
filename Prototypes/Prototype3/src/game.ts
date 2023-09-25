import * as PIXI from 'pixi.js'
import { Assets } from './assets'
import { JumpCat } from './jumpcat'

export class Game {

    // fields
    private jumpcat: JumpCat
    private _pixi: PIXI.Application

    // Properties
    public get pixi(): PIXI.Application { return this._pixi }

    constructor() {
        this._pixi = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x1099bb })
        document.body.appendChild(this._pixi.view)

        new Assets(this)
    }

    public loadCompleted() {
        let frames = this.createCatFrames()
        this.jumpcat = new JumpCat(this, frames, 100, 100)

        this._pixi.ticker.add((delta: number) => this.update(delta))
    }

    private update(delta: number) {
        this.jumpcat.update(delta)
    }

    private createCatFrames() {
        // create an array of textures from an image path



        // magically works since the spritesheet was loaded with the pixi loader



    }
}

