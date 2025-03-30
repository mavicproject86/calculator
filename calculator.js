let display = document.getElementById("input")

function gettingvalue(value){
    display.value += value;   
}

function cleardisplay(){
    display.value = "";
}

function result(){
    const display = document.getElementById("input");
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "error"
    }
}