var CANVAS, ctx, ALTURA, LARGURA, TEMPORIZADOR, FRAMES=0

var estados = {
    current:'',

    jogar: function(){ 
        this.current = "jogar"
		FRAMES=0
    },

    jogando: function(){
        this.current = "jogando"
    },

    perdeu:function(){
        this.current = "perdeu"
        clearInterval(TEMPORIZADOR)
        alert("perdeu")
    },

    acabou:function(){
        this.current = "acabou"
        clearInterval(TEMPORIZADOR)
        alert("acabou")
    }
}

function status(status, callback)
{
    if( estados.current == status ) callback.call(estados)
}

function atualiza(fnc)
{
    fnc()
}

function desenha(fnc)
{
    fnc()
}

var GAME = {
    main:function(fnc){
        this.load()
        fnc()
        TEMPORIZADOR = setInterval(function(){
			fnc()
			if(estados.current == "jogando")FRAMES++
		}, 30)
    },
    
    load:function(){
        LARGURA     = 400
        ALTURA      = 400
    
        CANVAS       = document.createElement("canvas")
        CANVAS.width = LARGURA
        CANVAS.height= ALTURA
        ctx          = CANVAS.getContext("2d")

        document.body.appendChild(CANVAS)
		estados.jogar()
    },

    cursor:function(evt, fnc){
        CANVAS.addEventListener(evt, fnc)
    },
	
    key:function(evt, fnc){
        document.body.addEventListener(evt, fnc)
    }
}
