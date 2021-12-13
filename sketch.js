//estados de jogo
var PLAY= 1;
var GAMEOVER= 0;
var estadoJogo= 1;

var faca;
var fruta;
var monstro;
var frutaAleatoria;
var posicao;
var fim_de_jogo;
var aleatorio;
var faca_Img;
var fruta1_Img;
var fruta2_Img;
var fruta3_Img;
var fruta4_Img;
var monstro_Img;
var fim_de_jogo_Img;
var fim_de_jogo_sound;
var faca_swoosh;
var score= 0;
var grupodefruta;
var grupodemonstro;


//carregar as imagens das variaveis
function preload () {
faca_Img= loadImage ("knife.png");
fruta1_Img= loadImage ("fruit1.png");
fruta2_Img= loadImage ("fruit2.png");
fruta3_Img= loadImage ("fruit3.png");
fruta4_Img= loadImage ("fruit4.png");
fim_de_jogo_Img= loadImage ("fimdeJogo.png");
monstro_Img= loadAnimation ("alien1.png","alien2.png");

//carregando os sons
fim_de_jogo_sound= loadSound ("gameover.mp3");
faca_swoosh= loadSound ("knifeSwoosh.mp3");
}

function setup () {
  createCanvas (600,600);

  //criando a espada
  faca= createSprite (40,200,20,20);
  faca.addImage (faca_Img);
  faca.scale= 0.5;

  //raio colisor
faca.setCollider ("rectangle",0,0,40,40);

//criando os grupos das variaveis e os pontos
score= 0;
grupodefruta= new Group ();
grupodemonstro= new Group ();
}

function draw () {
background ("lightblue");

//estado do jogo JOGAR
if (estadoJogo=== PLAY) {

  //chamar funcao das frutas e funcao de monstro
  criarFrutas ();
criarmonstros ();

  //movendo a espada com o mouse
  faca.y= World.mouseY;
  faca.x= World.mouseX;

  //aumentar a pountucao se a espada colidir nas frutas
  if (grupodefruta.isTouching(faca)) {
  grupodefruta.destroyEach ();

  //adicionando som da faca
  faca_swoosh.play ();
  //pontuacao
  score=score+2;
  
  }else {
  //terminar jogo se a espada colidir no monstro
  if (grupodemonstro.isTouching(faca)) {
  estadoJogo= GAMEOVER;

  //adicionando o som do game over 
  fim_de_jogo_sound.play ();

  //destruindo os grupos, evitando vazamento de memoria e tirar velocidade nos grupos
  grupodefruta.destroyEach ();
  grupodemonstro.destroyEach ();
  grupodefruta.setVelocityYEach (0);
  grupodemonstro.setVelocityYEach (0);

  //mudar animacao da espada quando for o fim de Jogo e voltar a sua posicao 
  faca.addImage (fim_de_jogo_Img);
  faca.scale= 1;
  faca.x= 300;
  faca.y= 300;
  }
  }
}

drawSprites ();

//mostrar pountuacao
textSize (25);
text ("Pontuacao: "+ score,250,50);
}

//chamando as funcoes 
function criarFrutas () {
  if(World.frameCount % 80=== 0) {
   var posicao= Math.round(random(1,2));
    fruta= createSprite (400,200,20,20);
// usando a variavel aleatoria para mudar a posicao das frutas, para cada vez o jogo ser mais desafiador
if (posicao== 1) {
  fruta.x= 600;
  fruta.velocityX= -(7+(score/5));
}
else {
  if (posicao== 2) {
    fruta.x= 0;

    //aumantando a velocidade da fruta a cada pontucao de 5 ou 10
fruta.velocityX= (7+(score/5));
  }
}

//diminuindo o tamanho da fruta
fruta.scale= 0.2;

aleatorio= Math.round(random(1,4));
if (aleatorio== 1) {
  fruta.addImage (fruta1_Img);
}
else if (aleatorio== 2) {
  fruta.addImage (fruta2_Img);
}
else if (aleatorio== 3) {
  fruta.addImage (fruta3_Img);
}
else {
  fruta.addImage (fruta4_Img);
}

//fazendo com que as frutas aparecam no jogo de forma aleatoria
fruta.y= Math.round(random(50,550));

//adicionando tempo para cada fruta diferente aparecer no jogo
grupodefruta.setlifetime= 100;

grupodefruta.add (fruta);
  }
}

function criarmonstros(){
  if(World.frameCount%200===0){
    monstro=createSprite(400,200,20,20);
    monstro.addAnimation("moving", monstro_Img);
    monstro.y=Math.round(random(100,550));
    monstro.velocityX=-(8+(score/10));
    monstro.setLifetime=50;
    
    grupodemonstro.add(monstro);
  }
}//estados de jogo
var PLAY= 1;
var GAMEOVER= 0;
var estadoJogo= 1;

var faca;
var fruta;
var monstro;
var frutaAleatoria;
var posicao;
var fim_de_jogo;
var aleatorio;
var faca_Img;
var fruta1_Img;
var fruta2_Img;
var fruta3_Img;
var fruta4_Img;
var monstro_Img;
var fim_de_jogo_Img;
var fim_de_jogo_sound;
var faca_swoosh;
var score= 0;
var grupodefruta;
var grupodemonstro;


//carregar as imagens das variaveis
function preload () {
faca_Img= loadImage ("knife.png");
fruta1_Img= loadImage ("fruit1.png");
fruta2_Img= loadImage ("fruit2.png");
fruta3_Img= loadImage ("fruit3.png");
fruta4_Img= loadImage ("fruit4.png");
fim_de_jogo_Img= loadImage ("fimdeJogo.png");
monstro_Img= loadAnimation ("alien1.png","alien2.png");

//carregando os sons
fim_de_jogo_sound= loadSound ("gameover.mp3");
faca_swoosh= loadSound ("knifeSwoosh.mp3");
}

function setup () {
  createCanvas (600,600);

  //criando a espada
  faca= createSprite (40,200,20,20);
  faca.addImage (faca_Img);
  faca.scale= 0.5;

  //raio colisor
faca.setCollider ("rectangle",0,0,40,40);

//criando os grupos das variaveis e os pontos
score= 0;
grupodefruta= new Group ();
grupodemonstro= new Group ();
}

function draw () {
background ("lightblue");

//estado do jogo JOGAR
if (estadoJogo=== PLAY) {

  //chamar funcao das frutas e funcao de monstro
  criarFrutas ();
criarmonstros ();

  //movendo a espada com o mouse
  faca.y= World.mouseY;
  faca.x= World.mouseX;

  //aumentar a pountucao se a espada colidir nas frutas
  if (grupodefruta.isTouching(faca)) {
  grupodefruta.destroyEach ();

  //adicionando som da faca
  faca_swoosh.play ();
  //pontuacao
  score=score+2;
  
  }else {
  //terminar jogo se a espada colidir no monstro
  if (grupodemonstro.isTouching(faca)) {
  estadoJogo= GAMEOVER;

  //adicionando o som do game over 
  fim_de_jogo_sound.play ();

  //destruindo os grupos, evitando vazamento de memoria e tirar velocidade nos grupos
  grupodefruta.destroyEach ();
  grupodemonstro.destroyEach ();
  grupodefruta.setVelocityYEach (0);
  grupodemonstro.setVelocityYEach (0);

  //mudar animacao da espada quando for o fim de Jogo e voltar a sua posicao 
  faca.addImage (fim_de_jogo_Img);
  faca.scale= 1;
  faca.x= 300;
  faca.y= 300;
  }
  }
}

drawSprites ();

//mostrar pountuacao
textSize (25);
text ("Pontuacao: "+ score,250,50);
}

//chamando as funcoes 
function criarFrutas () {
  if(World.frameCount % 80=== 0) {
   var posicao= Math.round(random(1,2));
    fruta= createSprite (400,200,20,20);
// usando a variavel aleatoria para mudar a posicao das frutas, para cada vez o jogo ser mais desafiador
if (posicao== 1) {
  fruta.x= 600;
  fruta.velocityX= -(7+(score/5));
}
else {
  if (posicao== 2) {
    fruta.x= 0;

    //aumantando a velocidade da fruta a cada pontucao de 5 ou 10
fruta.velocityX= (7+(score/5));
  }
}

//diminuindo o tamanho da fruta
fruta.scale= 0.2;

aleatorio= Math.round(random(1,4));
if (aleatorio== 1) {
  fruta.addImage (fruta1_Img);
}
else if (aleatorio== 2) {
  fruta.addImage (fruta2_Img);
}
else if (aleatorio== 3) {
  fruta.addImage (fruta3_Img);
}
else {
  fruta.addImage (fruta4_Img);
}

//fazendo com que as frutas aparecam no jogo de forma aleatoria
fruta.y= Math.round(random(50,550));

//adicionando tempo para cada fruta diferente aparecer no jogo
grupodefruta.setlifetime= 100;

grupodefruta.add (fruta);
  }
}

function criarmonstros(){
  if(World.frameCount%200===0){
    monstro=createSprite(400,200,20,20);
    monstro.addAnimation("moving", monstro_Img);
    monstro.y=Math.round(random(100,550));
    monstro.velocityX=-(8+(score/10));
    monstro.setLifetime=50;
    
    grupodemonstro.add(monstro);
  }
}