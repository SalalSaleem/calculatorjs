var screen = document.getElementById("screen");


function appendToScreen(param){
    screen.value += param;
}

function appendToOperator(param){
    if(screen.value.at(-1) == "+" || screen.value.at(-1) == "-" || screen.value.at(-1) == "/" || screen.value.at(-1) == "*" ){
        screen.value = screen.value.slice(0, -1)+param;
        }
    else{
        screen.value += param;
    }
}
     
function clearScreen(){
    screen.value = ""
}

function calculateResult(){
    if(screen.value != ""){
        try{
            screen.value = eval(screen.value)
                
        }catch(error){
            screen.value = "Syntex Error"
        }
    }
    
}
function clearOne(){
    screen.value = screen.value.slice(0,-1) 
}



