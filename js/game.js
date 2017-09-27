;(function(){
  function Game(){
    this.canvas = document.getElementsByTagName('canvas')[0]
    this.ctx = this.canvas.getContext('2d')
    this.resoursePath = './game.json'
    this.images=[]
    this.mainLoop()
  }

  Game.prototype = {
    constructor : Game,
    mainLoop : function(){
      this.loadImg()
    },

    init : function(){
      this.ctx.drawImage(this.images[9].img,100,100,50,100)
    },

    loadImg : function(){
      var self = this
      var xhr =new XMLHttpRequest()
      xhr.open('get', './game.json')
      xhr.send()
      xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState == 4 && xhr.status == 200){
          var result = JSON.parse(xhr.responseText)
         result.images.forEach(function(item){
          var img = new Image()
          img.src = item.src
           img.onload = function(){
            self.images.push(
              {
                name : item.name,
                img : img
              }
            )
            if(self.images.length == result.images.length){
              self.init()
            }
          } 
        }) 
        }
      })
    }
  }

  window.Game = Game
})()