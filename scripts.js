



let canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');


//canvas.style.backgroundImage = 'url("most-common-types-grasses-zoysia-grass-0423-1e347b60421744439c37163f385b9802.jpg")';
canvas.style.height = "100vh"
canvas.style.width = "100vw"
canvas.style.backgroundColor = "rgba(81, 150, 87, 1)"

document.height = "100vh"
document.width = "100vw"


//sprite
const sprite = new Image()
sprite.src = "Unarmed_Run_without_shadow.png";
//var need for animation
var sw =  64;
var sh =  64;
let sx = undefined
let sy = undefined
let gameLoop = 0;
let gameFrames = 5;
let dh = canvas.height * .2;
let dw = canvas.width * .2;
let frameX = 0
let frameY = 0 
let x = 0;
let y = 0;


function framerate(){

    if(gameLoop >= gameFrames){
        if(frameX<7){
            frameX++;

        }
        else{
            frameX=0;
        }
        gameLoop = 0
        
    }
    else {
        gameLoop++
    }




}

window.addEventListener('keydown',function(event){
    if(event.key == 'w'){
        frameY = 3;
        framerate();
        y = y - 1;
    }
    else if(event.key == 's'){
        frameY = 0;
        framerate();
        y = y + 1;
    }
    else if(event.key == 'd'){
        frameY = 2;
        framerate();
        x = x + 1;
    }
    else if(event.key == 'a'){
        frameY = 1;
        framerate();
        x = x - 1;
        
    }
    else{
        frameY = 0;
    }
});









function animation(){

    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(sprite,frameX*64,frameY*64,sw,sh,x,y,sw,sh);

    



    requestAnimationFrame(animation);
}

sprite.onload =  function(){
    animation();
}



