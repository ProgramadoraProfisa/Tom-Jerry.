var tom 
var jerry
var tomandando
var wallpaper

function preload() {
tomandando= loadAnimation("images/cat2.png","images/cat3.png"
);
 wallpaper= loadImage("images/garden.png")

//carregue as imagens aqui
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
 tom.addAnimation("fofin",tomandando)

 tom= createSprite (5,90,40,10);
jerry= createSprite (100,90,40,10);

}

function draw() {

    background(wallpaper);
    
    
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui


}
