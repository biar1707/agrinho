let palavra

function setup() {
  createCanvas(800, 800);
  palavra = palavraAleatoria();
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 400);
  //retângulo
 stroke("#009688");
 fill("#9FE64C");
 square(20,20,50,100);
  //círculo
  stroke("#8BC34A");
 fill("#4CAF50");
 triangle(150,70,100);
  //triângulo
 
 triangle(300, 50, 400, 120, 200, 120); //largura, altura, reta AB, reta BC
   //quadrado
 
 square(150,200,100); //apenas largura, altura e um dos lados, visto que todos são iguais
  //linha
  
  ellipse(300,200, 100,30);

 stroke(" ");
 fill(" ");
  line(10,350,400,350); //largura e altura do início e fim da linha
}

function palavraAleatoria() {
 
  let palavras = ["CCM EDITE", "agrinho 2025", "juntos somos mais", "a cidade precisa do campo", "o campo precisa da cidade"];
 
  return random(palavras);
}

function inicializaCores() {
  background("green");
  fill("#8BC34A");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}
