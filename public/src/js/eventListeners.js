
let degree = 0;
function start(sign){
    var wheel = document.getElementById("wheel");
    if(sign == '+'){
        if(degree <= 60)
            degree+=3;
        else
            degree=60;
        wheel.style.transform = "rotate("+degree+"deg)";
    } else if(sign == '-'){
        if(degree >= -60)
            degree-=3;
        else
            degree=-60;
            wheel.style.transform = "rotate("+degree+"deg)";
    }
}
function stop(){
    if(degree < 0){
        while(degree != 0)
            wheel.style.transform = "rotate("+(degree++)+"deg)";
    }else if(degree > 0) {
        while(degree != 0)
            wheel.style.transform = "rotate("+(degree--)+"deg)";
    }
}
window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'd': 
            keys.d.pressed = true;
            start('+');
            break;
        case 'ArrowRight': 
            keys.d.pressed = true;
            start('+');
            break;
        case 'a': 
            keys.a.pressed = true;
            start('-');
            break;
        case 'ArrowLeft': 
            keys.a.pressed = true;
            start('-');
            break;


        case 'Escape':
            togglePause();
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'd': 
            keys.d.pressed = false;
            stop();
            break;
        case 'ArrowRight': 
            keys.d.pressed = false;
            stop();
            break;
        case 'a': 
            keys.a.pressed = false;
            stop();
            break;
        case 'ArrowLeft': 
            keys.a.pressed = false;
            stop();
            break;
    }
});