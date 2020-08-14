import {Howl, Howler} from 'howler';

export default class SoundManager{
  static music : Howl = null
  static jump : Howl = null
  static hit : Howl = null
  static coin: Howl = null



  static load(){
    this.music = new Howl({
      src: ['https://github.com/medmor/pixi-flappyball/raw/master/sounds/music.mp3'],
      volume: .6,
      loop: true
      });
    this.jump = new Howl({src: ['https://github.com/medmor/pixi-flappyball/raw/master/sounds/jump.wav']})
    this.hit = new Howl({src: ['https://github.com/medmor/pixi-flappyball/raw/master/sounds/hit.wav']})
    this.coin = new Howl({src: ['https://github.com/medmor/princess-hiba/raw/master/sounds/coin.wav']})
    
      

    this.music.on('load', ()=>{
      //this.music.play()
    })
  }
}