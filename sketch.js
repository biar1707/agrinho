let caminhao;
let obstaculos = [];
let pontos = 0;
let vidas = 3;
let estradaY;

function setup() {
  createCanvas(800, 500);
  estradaY = height / 2;
  caminhao = new Caminhao();
}

function draw() {
  background(135, 206, 235); // Céu

  // Desenhar cenário
  desenharCampo();
  desenharCidade();
  desenharEstrada();

  // Mostrar caminhão
  caminhao.mostrar();
  caminhao.mover();

  // Gerar obstáculos
  if (frameCount % 100 === 0) {

  // Verificar chegada no campo
  if (playerX > width - 80) {
    pontos++;
    resetarPosicao();

  // Verificar chegada no campo
  if (playerX > width - 80) {
    pontos++;
    resetarPosicao();
  }

  // Verificar colisão
  if (playerX < obstacleX + 30 &&
      playerX + 20 > obstacleX &&
      playerY < obstacleY + 30 &&
      playerY + 20 > obstacleY) {
    pontos = max(0, pontos - 1);
    resetarPosicao();
  }

  // Mostrar pontos
  fill(0);
  textSize(18);
  text("Pontos: " + pontos, 10, 20);
}

function resetarPosicao() {
  playerX = 50;
  playerY = 200;
  obstacleX = random(150, 450);
  obstacleY = random(50, 350);
}

  }

  // Verificar colisão
  if (playerX < obstacleX + 30 &&
      playerX + 20 > obstacleX &&
      playerY < obstacleY + 30 &&
      playerY + 20 > obstacleY) {
    pontos = max(0, pontos - 1);
    resetarPosicao();
  }

  // Mostrar pontos
  fill(0);
  textSize(18);
  text("Pontos: " + pontos, 10, 20);
}

function resetarPosicao() {
  playerX = 50;
  playerY = 200;
  obstacleX = random(150, 450);
  obstacleY = random(50, 350);
}

    obstaculos.push(new Obstaculo());
  }

  // Atualizar obstáculos
  for (let i = obstaculos.length - 1; i >= 0; i--) {
    obstaculos[i].mover();
    obstaculos[i].mostrar();

    // Verificar colisão
    if (caminhao.colidiu(obstaculos[i])) {
      vidas--;
      obstaculos.splice(i, 1);
      if (vidas <= 0) {
        gameOver();
      }
    } else if (obstaculos[i].x + obstaculos[i].w < 0) {
      obstaculos.splice(i, 1);
    }
  }

  // Verificar chegada na cidade
  if (caminhao.x > width - 120) {
    pontos++;
    caminhao.resetar();
    obstaculos = [];
  }

  // Mostrar pontuação e vidas
  fill(0);
  textSize(20);
  textAlign(LEFT);
  text(`Pontos: ${pontos}`, 20, 30);
  text(`Vidas: ${vidas}`, 20, 60);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    caminhao.subir();
  }
  if (keyCode === DOWN_ARROW) {
    caminhao.descer();
  }
}

function gameOver() {
  noLoop();
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 0, 0);
  text("GAME OVER", width / 2, height / 2);
}

// -------------------------------------
// Funções de cenário

function desenharCampo() {
  fill(34, 139, 34);
  rect(0, 0, 120, height);
  fill(0, 100, 0);
  ellipse(60, 100, 60);
  ellipse(90, 150, 80);
}

function desenharCidade() {
  fill(180);
  rect(width - 120, 0, 120, height);
  fill(100);
  for (let i = 0; i < 5; i++) {
    rect(width - 110 + i * 15, 100, 10, 80);
  }
}

function desenharEstrada() {
  fill(60);
  rect(0, estradaY - 80, width, 160);
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < width; i += 40) {
    line(i, estradaY, i + 20, estradaY);
  }
  noStroke();
}

// -------------------------------------
// Classes

class Caminhao {
  constructor() {
    this.x = 150;
    this.y = estradaY;
    this.w = 70;
    this.h = 40;
    this.velY = 8;
    this.velX = 3; // Velocidade para frente
  }

  mostrar() {
    // Corpo
    fill(255, 0, 0);
    rect(this.x, this.y, this.w, this.h, 5);

    // Janela
    fill(200);
    rect(this.x + 45, this.y + 5, 20, 15);

    // Rodas
    fill(0);
    ellipse(this.x + 10, this.y + this.h, 15);
    ellipse(this.x + this.w - 10, this.y + this.h, 15);
  }

  mover() {
    this.x += this.velX;
    this.y = constrain(this.y, estradaY - 60, estradaY + 60);
  }

  subir() {
    this.y -= this.velY;
  }

  descer() {
    this.y += this.velY;
  }

  resetar() {
    this.x = 150;
    this.y = estradaY;
  }

  colidiu(obs) {
    return !(
      this.x + this.w < obs.x ||
      this.x > obs.x + obs.w ||
      this.y + this.h < obs.y ||
      this.y > obs.y + obs.h
    );
  }
}

class Obstaculo {
  constructor() {
    this.x = width;
    this.y = random(estradaY - 60, estradaY + 60);
    this.w = random(30, 50);
    this.h = random(30, 50);
    this.vel = 6;
  }

  mostrar() {
    fill(50);
    rect(this.x, this.y, this.w, this.h, 5);
  }

  mover() {
    this.x -= this.vel;
  }
}
