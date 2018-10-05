/*
    x, y -> a partir de que ponto devo pegar a imagem
*/
function Sprite(x, y, largura, altura, srcImg){
    this.x = x
    this.y = y 
    this.largura = largura
    this.altura  = altura

    this.desenha = function(xCanvas, yCanvas){
        img = new Image()
        img.src=srcImg
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
    }
}

bg = []

for(let x=0; x<=400; x++)
{
    bg.push( new Sprite(x, 0, 400, 400, "fundo.png") )
}


runBird = [
    new Sprite(0, 137, 64, 58,  "bird.png"),
    new Sprite(64, 130, 64, 60, "bird.png"),
    new Sprite(128, 133, 64, 60, "bird.png"),
    new Sprite(192, 136, 64, 60, "bird.png")
]
