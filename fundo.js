var fundo = {
    y:0,
    x:0,
    indexSprite:0,

    atualiza:function(){
      this.moveFundo()
    },

    desenha:function(){
      bg[this.indexSprite].desenha(this.x, this.y)
    },

  	moveFundo:function(){
      if(estados.current == "jogando")
      {
        if( this.indexSprite < bg.length-1 ) this.indexSprite++	
        else estados.acabou()
      }
    }
}