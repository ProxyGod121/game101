



let canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');


canvas.style.backgroundImage = 'url("most-common-types-grasses-zoysia-grass-0423-1e347b60421744439c37163f385b9802.jpg")';
canvas.style.height = "100vh"
canvas.style.width = "100vw"

document.height = "100vh"
document.width = "100vw"

context.drawImage(backgroundimg,0,0 ,canvas.height,canvas.width);
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




const spriteanimation = () => {
    context.clearRect(0,0,canvas.width,canvas.height);
    document.addEventListener('keydown', function(event){
        
        let keydown = event.key;

        switch(keydown) {
            case 'w':
                context.drawImage(sprite,sx*frameX,4* sy,sw,sh,0,0,dw,dh )
                if(gameLoop % gameFrames == 0  ){
                    if(frameX < 8) frameX++;
                    else frameX = 0;
                }



            break    



        } 

        requestAnimationFrame(spriteanimation)







    });
}


spriteanimation();







