let palavra

function setup() {
  createCanvas(800, 800);
  palavra = palavraAleatoria();
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 400);
    
 stroke("yellow");
 fill("yellow");
 circle(50,50,50,100);
  
  stroke("grey");
 fill("#4CAF50");
 triangle(100,400,100);
 
 triangle(100,200,0, 350,200, 350); 
  
 fill("#CAC9C9")
 rect(300,150,100,200);
  
 stroke("black");
 fill("black");
  line(10,350,400,350); 
}

function palavraAleatoria() {
 
  let palavras = ["CCM EDITE", "Agrinho 2025", "Turvo-Paraná", "Juntos somos mais", "A cidade precisa do campo", "O campo precisa da cidade"];
 
  return random(palavras);
}

function inicializaCores() {
  background("#5BC5F5");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}
