var screen = document.getElementById('screen');
var operandoa;
var operandob;
var operacion;
var resultado;
var arrayNumeros = [];
//Obtener los numeros
function print(valor){
    if(arrayNumeros.includes('.') && valor == '.'){
        return;
    }else{
        arrayNumeros = [];
        screen.append(valor);
        arrayNumeros.push(valor);
    };
};
//obtener operacion
function getOperation(operation){
    operandoa = parseFloat(screen.innerHTML);
    operacion = operation;
    arrayNumeros = [];
    limpiar();
};
//obtener resultado
function getResult(){
    operandob = parseFloat(screen.innerHTML);
    limpiar()
    switch(operacion){
        case '+':
            resultado = operandoa + operandob;
            break;
        case '-':
            resultado = operandoa - operandob;
            break;
        case '*':
            resultado = operandoa * operandob;
            break;
        case '/':
            resultado = operandoa / operandob;
            break;
    };
    screen.innerHTML = resultado;
};
//metodos
function limpiar(){
    screen.innerHTML = '';
};
function resetear(){
    screen.innerHTML = '';
    operandoa = 0;
    operandob = 0;
    operacion = '';
};

