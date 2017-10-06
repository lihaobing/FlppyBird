
define(['./background','./brid','./guandao'],function (Background,Brid,Guandao) {
  function Game() {
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.images = {}
    this.resourcePath = './game.json'
    this.timer = null
    this.init()
    this.time1 = Date.now()
    this.backgroundList = []
    this.guanlist = []
  }

  Game.prototype = {
    contructor: Game,

    mainLoop: function () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      //  this.ctx.drawImage(this.images.bg1,100 ,100) 
      this.move()
        this.brid.init()
      if (Date.now() - this.time1 >= 2000) {
          this.guanlist.push(
            new Guandao(
              {
                w : 148,
                h : 1664,
                game : this,
                img :[this.images.pipe1,this.images.pipe2]
              }
            )
          )
        this.time1 = Date.now()
        // console.log(this.houseList)
      }
    },

    init: function () {
      this.loadImg(function () {
        this.Background()
        this.gametime()
        this.brid = new Brid({
          w: 255,
          h: 60,
          x: 100,
          y: 100,
          img: this.images.bird,
          game: this
        })
      }.bind(this))
    },
    gametime: function () {
      this.timer = window.setInterval(function () {
        this.mainLoop()
      }.bind(this), 1000 / 50)
    },
    Background: function () {
      this.backgroundList.push(
        new Background(
          {
            w: 300,
            h: 256,
            y: 280,
            speed: 1,
            img: this.images.bg1,
            game: this
          }
        )
      )
      this.backgroundList.push(
        new Background(
          {
            w: 48,
            h: 48,
            y: 552,
            speed: 3,
            img: this.images.bg3,
            game: this
          }
        )
      )
      this.backgroundList.push(
        new Background(
          {
            w: 300,
            h: 216,
            y: 350,
            speed: 2,
            img: this.images.bg2,
            game: this
          }
        )
      )

    },

    move: function () {
      this.backgroundList.forEach(function (item) {
        item.updata()
        // item.render()
      })
      this.guanlist.forEach(function (item) {
        item.init()
        // item.render()
      })
    },
    loadImg: function (callback) {
      var self = this
      var xhr = new XMLHttpRequest()
      xhr.open('get', this.resourcePath)
      xhr.send()
      xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var result = JSON.parse(xhr.responseText)
          // console.log(result)
          var count = 0
          result.images.forEach(function (item) {
            var img = new Image()
            img.src = item.src
            img.addEventListener('load', function () {
              count++
              self.images[item.name] = img
              if (count === result.images.length) {
                // console.log(self.images)
                callback()
              }
            })
          })
        }
      })
    }
  }

 return Game
})