;(function(){
  function Background(json){
    this.img = json.img
    this.w = json.w
    this.h = json.h
    this.game = json.game
    this.x = 0
    this.y = json.y
    this.speed = json.speed
    this.startSpeed=0
  }

  Background.prototype = {
    constructor : Background,
    updata : function(){
      this.startSpeed -= this.speed
      if(this.startSpeed<=-(parseInt( this.game.canvas.width/this.w)+1)*this.w){
      // console.log(this.speed)
          this.startSpeed = 0
        }
      this.render()
    },
    render : function(){
      var ctx = this.game.ctx
      for (var i=0; i<(parseInt( this.game.canvas.width/this.w)+1)*2;i++){
        ctx.drawImage(this.img, 0, 0, this.w, this.h, this.w *i+ this.startSpeed,this.y,this.w,this.h)
      }
    }
    
  }

  window.Background = Background
})()
define(function(){
  function Background(json){
    this.img = json.img
    this.w = json.w
    this.h = json.h
    this.game = json.game
    this.x = 0
    this.y = json.y
    this.speed = json.speed
    this.startSpeed=0
  }

  Background.prototype = {
    constructor : Background,
    updata : function(){
      this.startSpeed -= this.speed
      if(this.startSpeed<=-(parseInt( this.game.canvas.width/this.w)+1)*this.w){
      // console.log(this.speed)
          this.startSpeed = 0
        }
      this.render()
    },
    render : function(){
      var ctx = this.game.ctx
      for (var i=0; i<(parseInt( this.game.canvas.width/this.w)+1)*2;i++){
        ctx.drawImage(this.img, 0, 0, this.w, this.h, this.w *i+ this.startSpeed,this.y,this.w,this.h)
      }
    }
    
  }

  return Background
})