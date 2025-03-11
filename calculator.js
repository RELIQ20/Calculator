const display = document.getElementById('display');

function append(input){
    display.value += input;
}

function cleared(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value.replace(/%/g, '/100'));
    }
    catch{
        display.value = "error";
    }
}

function parenthesis(){
    const currentparenthesis = display.value;
    const openpar =  (currentparenthesis.match(/\(/ig) || []).length;
    const closepar = (currentparenthesis.match(/\)/ig) || []).length;

    if (openpar > closepar){
        display.value += ')';
    }else{
        display.value += '(';
    }
}

function backspace(){
    const currentval = display.value;
    display.value = currentval.slice(0, -1);
}


