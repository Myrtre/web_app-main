function onLoadStage(){
    console.log("The site is running");

    // Get Canvas 
    var canvas = document.getElementById('game_stage');
    canvas.width = window.innerWidth - 50;
    canvas.height = window.innerHeight - 200;

    // Try WebGL Compatibility
    var gl = canvas.getContext('webgl');
    if(!gl) { 
        console.log("WebGl not supported, falling to experimental");
        gl = canvas.getContext('experimental-webgl');
    }
    if(!gl){
        alert("Your browser does not support WebGL")
    }

    window.game = new Game(canvas, gl);

    this.onResize();

    loop();
};

function onResize(){
    window.game.resize(
        window.innerWidth,
        window.innerHeight
    );
};