var OperationA;
var OperationB;
var Operation;

window.onload=function init(){

    var display = document.getElementById('display')
    var mc = document.getElementById("mc");
    var mcsum = document.getElementById("mcsum");
    var mcres = document.getElementById("mcres");
    var div = document.getElementById("div");
    var BTNseven = document.getElementById("BTNseven");
    var BTNeight = document.getElementById("BTNeight");
    var BTNnine = document.getElementById("BTNnine");
    var multipilcation = document.getElementById("multiplication");
    var BTNfour = document.getElementById("BTNfour");
    var BTNfive = document.getElementById("BTNfive");
    var res = document.getElementById("res");
    var BTNone= document.getElementById("BTNone");
    var BTNtwo = document.getElementById("BTNtwo");
    var BTNthree = document.getElementById("BTNthree");
    var sum = document.getElementById("sum");
    var res = document.getElementById("res");
    var C = document.getElementById("C");
    var BTNcero = document.getElementById("BTNcero");
    var point = document.getElementById("point");
    var equal = document.getElementById("equal");

    point.onclick = function(e) {
        display.textContent += ".";
    }
    BTNcero.onclick = function(e) {
        display.textContent += "0";
    }
    BTNone.onclick = function(e) {
        display.textContent += "1";
    }
    BTNtwo.onclick = function(e) {
        display.textContent += "2";
    }
    BTNthree.onclick = function(e) {
        display.textContent += "3";
    }
    BTNfour.onclick = function(e) {
        display.textContent += "4";
    }
    BTNfive.onclick = function(e) {
        display.textContent += "5";
    }
    BTNsix.onclick = function(e) {
        display.textContent += "6";
    }
    BTNseven.onclick = function(e) {
        display.textContent += "7";
    }
    BTNeight.onclick = function(e) {
        display.textContent += "8";
    }
    BTNnine.onclick = function(e) {
        display.textContent += "9";
    }

    C.onclick = function(e){
       reset();

    }
    sum.onclick = function(e){
        OperationA = display.textContent;
        Operation = "+";
        clear();
    }
    res.onclick = function(e){
        OperationA = display.textContent;
        Operation = "-";
        clear();
    }
    div.onclick = function(e){
        OperationA = display.textContent;
        Operation = "/";
        clear();
    }
    multipilcation.onclick = function(e){
        OperationA = display.textContent;
        Operation = "*";
        clear();
    }
    equal.onclick = function(e){
        OperationB = display.textContent;
        result();
    }
}
//Functions
function reset() {
    display.textContent = "";
    OperationA= 0;
    OperationB = 0;
    Operation = "";
}
function clear() {
    display.textContent = "";
}
function result() {
    var res;
    switch (Operation) {
        case "+": res = parseFloat(OperationA) + parseFloat(OperationB);
            break;
        case "-": res = parseFloat(OperationA) - parseFloat(OperationB);
            break;
        case "*": res = parseFloat(OperationA) * parseFloat(OperationB);
            break;
        case "/": res = parseFloat(OperationA) / parseFloat(OperationB);
            break;
        default: res = OperationB;
            break;
    }
    reset();
    display.textContent = res;
}
