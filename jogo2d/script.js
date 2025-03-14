const canvas = document.getElementByID('jogoCanvas')
const ctx = canvas.getContext('2d')

const personagem = {
    x:100,
    y:350,
    largura:50,
    altura:50
}

function desenhaPersonagem () {
    //cor
    ctx.filistyle = 'black'
    //posição x e y
    //largura e altura
    ctx.filiRect(
        personagem.x,
        personagem.y,
        personagem.largura,
        personagem.altura
    )
}
function atualizarPersonagem(){
    personagem.y -= 1
}
function loop () {
    //desenhar
    desenhaPersonagem() 
    //atuALIZAR
    atualizarPersonagem ()
    //apagar
    ctx.clearRect(0,0,canvas.width,canvas.height)
    //reinicar loop
    requestAnimationFrame(loop)
}

loop () 