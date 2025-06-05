let playerX = 50;
let playerY = 200;
let obstacleX;
let obstacleY;
let pontos = 0;

function setup() {
  createCanvas(600, 400);
  obstacleX = random(150, 450);
  obstacleY = random(50, 350);
}

function draw() {
  background(200, 230, 255);

  // Cidade (esquerda) e Campo (direita)
  fill(150);
  rect(0, 0, 60, height); // cidade
  fill(0, 200, 0);
  rect(width - 60, 0, 60, height); // campo

  // Player
  fill(255, 0, 0);
  rect(playerX, playerY, 20, 20);

  // Obstáculo
  fill(100);
  rect(obstacleX, obstacleY, 30, 30);

  // Movimentação
  if (keyIsDown(UP_ARROW)) playerY -= 3;
  if (keyIsDown(DOWN_ARROW)) playerY += 3;
  if (keyIsDown(LEFT_ARROW)) playerX -= 3;
  if (keyIsDown(RIGHT_ARROW)) playerX += 3;

  // Limites da tela
  playerX = constrain(playerX, 0, width - 20);
  playerY = constrain(playerY, 0, height - 20);

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
