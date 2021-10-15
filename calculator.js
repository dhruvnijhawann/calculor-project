var operand1=0;
var operand2=null;
var operator=null;
var display = document.getElementById('ans');
var x,y,z,sign;

function main(){
    var value = this.getAttribute('data-value');
    if(value=='+' || value=='-'|| value=='*' ||value=='/'||value=='%'||value=='^'){
        operator=value;
        y=operator;
        operand1=parseFloat(display.textContent);
        x=operand1;
        display.innerText="";
    }
    else if(value=='+/-'){
        z=parseFloat(display.innerText);
        sign=-z;
        display.innerText=sign;
        
    }
    else if(value=='='){
        if(y=='^')
        {
            operand2=parseFloat(display.textContent);
            if(operand2>=0){
                var pow=1;
                for(var j=0;j<operand2;j++){
                  pow=pow*x;
                }
                display.innerText=pow;
                operand1=pow;
                }
            else{
                var oper2=-operand2;
                var p=1;
                for(var j=0;j<oper2;j++){
                    p=p*x;
                }
                var pp=(1/p);
                display.innerText=pp;
                operand1=pp;
            }
        }
        else{
            operand2=parseFloat(display.textContent);
            var a = eval ((x + " " + y + " " + operand2));
            display.innerText=a;
            operand1=a;
        }
        
    }
    else if(value=='100'){
        var operand1=0;
        var operand2=null;
        var operator=null;
        display.innerText="";
    }
    else{
        display.innerText +=value;
    }
}

var buttons = document.getElementsByClassName('btn');
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',main)
}


