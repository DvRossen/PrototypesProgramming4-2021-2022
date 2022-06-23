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

        this.player = new Player(this, this.player.idleFrames, this.player.walkFrames);
        this.pixi.stage.addChild(this.player)


        this._pixi.ticker.add((delta: number) => this.update(delta))
    }

    private update(delta: number) {
        this.player.update(delta)
        this.player.x += this.player.xspeed
    
        
    }
     createPlayerFrames(){
        // create an array of textures from an image path
        
       
        let idleFrames: PIXI.Texture[] = [];
        let walkFrames: PIXI.Texture[] =[];

        for (let i = 0; i < 10; i++) {
            idleFrames.push(PIXI.Texture.from(`Pixel Knight Idle000${i}.png`));
        }
        for (let i = 0; i < 4; i++) {
            walkFrames.push(PIXI.Texture.from(`Pixel Knight Walk000${i}.png`));
        }
         
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
