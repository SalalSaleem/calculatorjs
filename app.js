var screen = document.getElementById("screen");

function appendToScreen(param){
   var a = screen.value += param;
    lastElm = a.charAt(a.length-1);
    if(lastElm == "+"){
    document.getElementById("plus").disabled = true;
    }
    else if(lastElm == "-"){
        document.getElementById("minus").disabled = true;
        }
}

function clearScreen(){
    screen.value = ""
}

function calculateResult(){
    screen.value = eval(screen.value);
}

function clearOne(){
    screen.value = screen.value.slice(0,-1) 
}


