var screen = document.getElementById("screen");


function appendToScreen(param){
    screen.value += param;
}

function appendToOperator(param){
    if(screen.value.at(-1) == "+"){
            document.getElementById("plus").disbaled = true; 
    }
    else{
        screen.value += param;
    }
}
function appendToOperator(param){
    if(screen.value.at(-1) == "-"){
            document.getElementById("minus").disbaled = true; 
    }
    else{
        screen.value += param;
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


