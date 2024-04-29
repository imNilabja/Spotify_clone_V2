
var a = 2;
var b = 2;
var op = "+";

if (Math.random()<= 0.1){
    if (op == "*") {
        console.log(a + b); 
    }else  if (op == "+") {
        console.log(a - b); 
    }else  if (op == "-") {
        console.log(a / b); 
    }else  if (op == "/") {
        console.log(a**b); 
    }
} else {
    if (op == "*") {
        console.log(a * b); 
    }else  if (op == "+") {
        console.log(a + b); 
    }else  if (op == "-") {
        console.log(a - b); 
    }else  if (op == "/") {
        console.log(a/b); 
    }
}