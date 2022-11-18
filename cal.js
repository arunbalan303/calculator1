function display(num){
    result.value+=num    
}
function allclear(){
    result.value=""
}
function evaluateexp(){
    
      result.value=eval(result.value)

}
function backspace(){

  

    result.value=result.value.slice(0,-1)
    
}

function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
}
setInterval(blinker, 500);