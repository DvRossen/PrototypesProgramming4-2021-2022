import * as PIXI from 'pixi.js'
import { Assets } from './assets'
import { Player } from './player'

export class Game {

    // fields
    private player: Player
    private _pixi: PIXI.Application

    // Properties
    public get pixi(): PIXI.Application { return this._pixi }

    constructor() {

        
        this._pixi = new PIXI.Application({ width: 1600, height: 1600, backgroundColor: 0x5500DD })
        document.body.appendChild(this._pixi.view)

        new Assets(this)

        // this._pixi.loader
        //     .add("spritesheet", "spritesheet.json")
    }

    public loadCompleted() {
        let frames = this.createPlayerFrames()
        this.player = new Player(this, frames, 800, 800)

        this._pixi.ticker.add((delta: number) => this.update(delta))
    }

    private update(delta: number) {
        this.player.update(delta)
        this.player.x += this.player.xspeed
    
        
    }

    private createPlayerFrames(): PIXI.Texture[] {
        // create an array of textures from an image path
        
       
        let frames: PIXI.Texture[] = [];

        for (let i = 0; i < 10; i++) {
            // magically works since the spritesheet was loaded with the pixi loader
            frames.push(PIXI.Texture.from(`Pixel_Knight_Idle000${i}.png`));
        }
        return frames
    }
}
// import * as PIXI from 'pixi.js'
// export class Game{

//     pixi: PIXI.Application
//     loader : PIXI.Loader
//     PlayerTextures: PIXI.Texture[] = [];

// //maakt canvas aan
// constructor(){
    
// this.pixi = new PIXI.Application({width: 1600, height:1600})
// document.body.appendChild(this.pixi.view)


// //laad player texture
// this.loader = new PIXI.Loader()
// this.pixi.loader.add("spritesheet", "Idle_JSON.json");
// this.loader.load(()=>this.loadCompleted())

// }

// //Voegt instanse van player toe
// loadCompleted() {
//   for (let i = 0; i < 10; i++) {
//     const texture = PIXI.Texture.from(`Pixel_Knight_Idle000${i}.png`);
//     this.PlayerTextures.push(texture);
//     console.log("test load")
// }
// }
// createPlayer(){
   
//     const player = new PIXI.AnimatedSprite(this.PlayerTextures)
//     player.x = 500
//     player.y = 500
//     player.anchor.set(0.5)
//     player.play()
//     this.pixi.stage.addChild(player)
// }
// update(delta : number){
//     // console.log("loop test")
//     // this.player.x += 2
//     // this.player.y=800
// }
// }

// new Game()
