; (function () {
  function Guandao(json) {
    this.w = json.w
    this.h = json.h
    this.y = 0
    this.x = 0
    this.game = json.game
    this.img = json.img
    this.speed = 0
    this.guanH = 0
    this.jieH1 = 0
    this.jieH2 = 0
    this.imgchoose()
  }

  Guandao.prototype = {
    constructor: Guandao,

    init: function () {
      this.x=this.game.canvas.width + this.speed
      this.pengzhuang()
      var ctx = this.game.ctx
      this.speed -= 3
      // console.log( this.jieH2 , this.jieH1 )
      ctx.drawImage(this.img[0], 0, this.jieH1, this.w, this.guanH,this.x , 0, this.w/2, this.guanH)
      ctx.drawImage(this.img[1], 0, 0, this.w, this.jieH2,this.x, this.y, this.w/2, this.jieH2)
    },

    imgchoose: function () {
      // this.num = Math.round(Math.random())
      // this.guanH = Math.abs(Math.random() * this.game.canvas.height / 2 - 100) + 100
      this.guanH = Math.abs(Math.random() *300) + 100
      this.jieH1 = this.h - this.guanH
      this.jieH2 = this.game.canvas.height - 150 - this.guanH
      this.y = this.game.canvas.height - this.jieH2
    },

    pengzhuang: function () {
     var brid = this.game.brid
     if(brid.x+brid.w/3>this.x&&brid.x<this.x+this.w/2){
      if(brid.y-30 <this.guanH){
      console.log(brid.y)
      console.log(this.guanH)
      console.log('上')
        window.clearInterval(this.game.timer)
      }else if(brid.y+brid.h/2>this.y){
      console.log('下')
      console.log(brid.y)
      console.log(this.y)
         window.clearInterval(this.game.timer)
      }
     }
    }
  }
  window.Guandao = Guandao
})()
define(function () {
  function Guandao(json) {
    this.w = json.w
    this.h = json.h
    this.y = 0
    this.x = 0
    this.game = json.game
    this.img = json.img
    this.speed = 0
    this.guanH = 0
    this.jieH1 = 0
    this.jieH2 = 0
    this.imgchoose()
  }

  Guandao.prototype = {
    constructor: Guandao,

    init: function () {
      this.x=this.game.canvas.width + this.speed
      this.pengzhuang()
      var ctx = this.game.ctx
      this.speed -= 3
      // console.log( this.jieH2 , this.jieH1 )
      ctx.drawImage(this.img[0], 0, this.jieH1, this.w, this.guanH,this.x , 0, this.w/2, this.guanH)
      ctx.drawImage(this.img[1], 0, 0, this.w, this.jieH2,this.x, this.y, this.w/2, this.jieH2)
    },

    imgchoose: function () {
      // this.num = Math.round(Math.random())
      // this.guanH = Math.abs(Math.random() * this.game.canvas.height / 2 - 100) + 100
      this.guanH = Math.abs(Math.random() *300) + 100
      this.jieH1 = this.h - this.guanH
      this.jieH2 = this.game.canvas.height - 150 - this.guanH
      this.y = this.game.canvas.height - this.jieH2
    },

    pengzhuang: function () {
     var brid = this.game.brid
     if(brid.x+brid.w/3>this.x&&brid.x<this.x+this.w/2){
      if(brid.y-30 <this.guanH){
      console.log(brid.y)
      console.log(this.guanH)
      console.log('上')
        window.clearInterval(this.game.timer)
      }else if(brid.y+brid.h/2>this.y){
      console.log('下')
      console.log(brid.y)
      console.log(this.y)
         window.clearInterval(this.game.timer)
      }
     }
    }
  }
  return Guandao
})