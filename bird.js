var bird = {
    y:0,
    x:0,
	altura:50,
	largura:50,
    cor:'#fff',
	gravidade:1.6,
	velocidadeQueda:0,
	forcaDoPulo:16.5,
	indexSprite:0,
	atraso: 2,

    atualiza:function(){
        this.cair()
		this.animateSprite()
    },

    desenha:function(){
		/*
		ctx.fillStyle = this.cor
		ctx.fillRect( this.x, this.y, this.largura, this.altura)
		*/
		runBird[this.indexSprite].desenha(this.x, this.y)
    },

	cair:function(){
		this.velocidadeQueda += this.gravidade
		this.y += this.velocidadeQueda
		
		//Define o limite da queda
		if( this.y > ALTURA - this.altura  && estados.current != "perdeu" )
		{
			this.y              = ALTURA - this.altura
			this.velocidadeQueda= 0
		}
    },
    
	pula:function(){		
		if(this.y > 80)
		{
			this.velocidadeQueda = -this.forcaDoPulo
		}
	},

	animateSprite:function(){
		if(estados.current == "jogando")
		{
			if( this.atraso == 0 )
			{
				( this.indexSprite >= runBird.length-1 ) ? this.indexSprite=0 : this.indexSprite++	
				this.atraso=2
			}
			else 
				this.atraso--
		}
	},
}