var screen = document.getElementById("screen");


function appendToScreen(param){
    screen.value += param;
}

function appendToPlus(param){
    if(screen.value.at(-1) == "+"){
        document.getElementById("plus").disbaled = true; 
        }
    else{
        screen.value += param;
    }
}
function appendToMinus(param){
    if(screen.value.at(-1) == "-"){
        document.getElementById("minus").disbaled = true; 
    }
    else{
        screen.value += param;
    }
}
function appendToMultiply(param){
    if(screen.value.at(-1) == "*"){
        document.getElementById("multiply").disbale; 
    }
    else{
        screen.value += param;
    }
}
function appendToDivide(param){
    if(screen.value.at(-1) == "/"){
        document.getElementById("divide").disbaled = true; 
    }
    else{
        screen.value += param;
    }
}

     
function clearScreen(){
    screen.value = ""
}

function calculateResult(){
    try{
    screen.value = eval(screen.value)
        
}catch(error){
    screen.value = "Syntex Error"
}

}

function clearOne(){
    screen.value = screen.value.slice(0,-1) 
}



