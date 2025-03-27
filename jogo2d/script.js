const canvas = document.getElementById('JogoCanvas');
const ctx = canvas.getContext('2d');
let gravidade = 0.5;
let gameOver = false;
let pontos = 0; // Pontuação atual
let melhorPontuacao = localStorage.getItem('melhorPontuacao') || 0; // Recupera a melhor pontuação do localStorage ou 0

document.addEventListener('keypress', (evento) => {
    if (evento.code === 'Space' && !personagem.pulando) {
        personagem.velocidade_y = 15;
        personagem.pulando = true;
    }
});

let personagem = {
    x: 100,
    y: canvas.height - 50,
    largura: 50,
    altura: 50,
    velocidade_y: 0,
    velocidade_x: 0,
    pulando: false,
    imagem: new Image()
};
personagem.imagem.src='./pou.png'

let obstaculo = {
    x: canvas.width - 100,
    y: canvas.height - 100,
    largura: 30,
    altura: 100,
    velocidade_x: 10
};

// Função para desenhar o personagem
function desenharPersonagem() {
    // ctx.fillStyle = 'red';
    // ctx.fillRect()
    ctx.drawImage (
        personagem.imagem,
        personagem.x,
        personagem.y,
        personagem.largura,
        personagem.altura
    )
};

// Função para atualizar a posição do personagem
function atualizaPersonagem() {
    if (personagem.pulando) {
        personagem.y -= personagem.velocidade_y;
        personagem.velocidade_y -= gravidade;
        
        if (personagem.y >= canvas.height - personagem.altura) {
            personagem.y = canvas.height - personagem.altura;
            personagem.pulando = false;  
            personagem.velocidade_y = 0;
        }
    }
}

// Função para desenhar o obstáculo
function desenharObstaculo() {
    ctx.fillStyle = 'black';
    ctx.fillRect(
        obstaculo.x,
        obstaculo.y,
        obstaculo.largura,
        obstaculo.altura
    );
}

// Função para atualizar a posição do obstáculo
function atualizarObstaculo() {
    obstaculo.x -= obstaculo.velocidade_x;
    
    // Se o obstáculo sair da tela, reposicioná-lo
    if (obstaculo.x <= 0 - obstaculo.largura) {
        obstaculo.x = canvas.width;
        pontos++; // Incrementar a pontuação a cada obstáculo evitado
    }
}

// Função para verificar colisões
function verificaColisao() {
    if (obstaculo.x < personagem.x + personagem.largura &&
        obstaculo.largura + obstaculo.x > personagem.x &&
        personagem.y < obstaculo.y + obstaculo.altura &&
        personagem.y + personagem.altura > obstaculo.y) {
        
        // Quando houver colisão, a pontuação máxima é salva, se necessário
        if (pontos > melhorPontuacao) {
            melhorPontuacao = pontos;
            localStorage.setItem('melhorPontuacao', melhorPontuacao); // Salva no localStorage
        }

        obstaculo.velocidade_x = 0;
        personagem.velocidade_y = 0;
        ctx.fillStyle = 'black';
        ctx.font = '50px Arial';
        ctx.fillText('SI FUDEU 🤣🫵', 50, 100);
        ctx.font = '30px Arial';
        ctx.fillText('Pontuação Máxima: ' + melhorPontuacao, 50, 150); // Exibe a melhor pontuação
        gameOver = true;
        document.getElementById('reiniciarBtn').style.display = 'block'; // Mostra o botão de reiniciar
    }
}

// Função para desenhar a pontuação e a melhor pontuação na tela
function desenharPontuacao() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Pontuação: ' + pontos, 20, 30); // Exibe a pontuação atual
    ctx.fillText('Melhor Pontuação: ' + melhorPontuacao, 20, 60); // Exibe a melhor pontuação
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    pontos = 0;
    personagem.y = canvas.height - 50;
    personagem.velocidade_y = 0;
    personagem.pulando = false;
    obstaculo.x = canvas.width - 100;
    obstaculo.velocidade_x = 10;
    gameOver = false;
    document.getElementById('reiniciarBtn').style.display = 'none'; // Esconde o botão de reiniciar
    loop(); // Reinicia o loop do jogo
}

// Função do loop do jogo
function loop() {
    if (!gameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        desenharPersonagem();
        atualizaPersonagem();
        desenharObstaculo();
        atualizarObstaculo();
        verificaColisao();
        desenharPontuacao(); // Desenha a pontuação e a melhor pontuação na tela

        requestAnimationFrame(loop);
    }
}

// Adiciona o evento de clique no botão de reiniciar
document.getElementById('reiniciarBtn').addEventListener('click', reiniciarJogo);

// Inicia o jogo
loop();
