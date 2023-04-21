
var runnable = true;
var game = new Game();

function StartGame(){
    console.log('started');
    game.start();
}

function Restart(){
    console.log('restart');
    runnable = true;
    game = new Game();
    game.reset();
    game.start();
}

function onResize(){
    console.log(window.innerWidth)
    if((window.innerWidth < 950) || (window.innerHeight < 650)){
        alert("Nem leszünk jóba a méretekkel");
        runnable = false;
    }
    else{
        window.game.resize(
            window.innerWidth,
            window.innerHeight 
            );
        runnable = true;
    }
};