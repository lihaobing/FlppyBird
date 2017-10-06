; (function () {
  function Brid(json) {
    this.w = json.w
    this.h = json.h
    this.x = json.x
    this.y = json.y
    this.img = json.img
    this.game = json.game
    this.timeNow = Date.now()
    this.g = 1
    this.startI = 0
    this.startState = 0
    this.rotate = 0
    this.step = -10
  }

  Brid.prototype = {
    constructor: Brid,

    init: function () {
      this.dianji()
      this.fly()
      if (this.startState === 0) {
        this.g += .1
        this.rotate += .5
        this.y += this.g
      } else if (this.startState === 1) {
        // this.y -= this.step
        this.y += this.step
        this.g = 0
        this.step++
        this.rotate = 0
        // console.log(this.step)
        if (this.step === 0) {
          this.startState = 0
          this.step = -10
        }
      }
      var ctx = this.game.ctx
      ctx.save()
      ctx.translate(this.x + this.w / 6, this.y)
      ctx.rotate(Math.PI / 180 * 2 * this.rotate)
      ctx.drawImage(this.img, this.w / 3 * this.startI, 0, this.w / 3, this.h, -this.w / 6, -this.h / 2, this.w / 3, this.h)
      ctx.restore()
    },

    fly: function () {
      if (Date.now() - this.timeNow >= 200) {
        this.startI++
        this.startI >= 3 && (this.startI = 0)
        this.timeNow = Date.now()
      }
    },

    dianji: function () {
      document.onmousedown = (function () {
        // console.log('a  '+parseInt(this.y))
        this.startState = 1
      }.bind(this))
    }
  }

  window.Brid = Brid
})()
define(function () {
  function Brid(json) {
    this.w = json.w
    this.h = json.h
    this.x = json.x
    this.y = json.y
    this.img = json.img
    this.game = json.game
    this.timeNow = Date.now()
    this.g = 1
    this.startI = 0
    this.startState = 0
    this.rotate = 0
    this.step = -10
  }

  Brid.prototype = {
    constructor: Brid,

    init: function () {
      this.dianji()
      this.fly()
      if (this.startState === 0) {
        this.g += .1
        this.rotate += .5
        this.y += this.g
      } else if (this.startState === 1) {
        // this.y -= this.step
        this.y += this.step
        this.g = 0
        this.step++
        this.rotate = 0
        // console.log(this.step)
        if (this.step === 0) {
          this.startState = 0
          this.step = -10
        }
      }
      var ctx = this.game.ctx
      ctx.save()
      ctx.translate(this.x + this.w / 6, this.y)
      ctx.rotate(Math.PI / 180 * 2 * this.rotate)
      ctx.drawImage(this.img, this.w / 3 * this.startI, 0, this.w / 3, this.h, -this.w / 6, -this.h / 2, this.w / 3, this.h)
      ctx.restore()
    },

    fly: function () {
      if (Date.now() - this.timeNow >= 200) {
        this.startI++
        this.startI >= 3 && (this.startI = 0)
        this.timeNow = Date.now()
      }
    },

    dianji: function () {
      document.onmousedown = (function () {
        // console.log('a  '+parseInt(this.y))
        this.startState = 1
      }.bind(this))
    }
  }

  return Brid
})