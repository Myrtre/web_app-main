function onLoad() {
    window.game = new Game();
    
    this.onResize();
    
    loop();
};


function onResize(){
    //if((window.innerWidth < 1000) || (window.innerHeight < 800)){
    //    alert("Nem leszünk jóba a méretekkel"); return;
    //}
    window.game.resize(
        window.innerWidth,
        window.innerHeight
    );
}