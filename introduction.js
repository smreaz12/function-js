//--Function--//

function number(){
    console.log("This is a test function");
}

number();



function addNumber(num1,num2){
    const sum = num1+num2;
    console.log(sum);
}

addNumber(22,25);
addNumber(22,10);


//
function addNumber(num1,num2,num3=0,num4=0){
    const sum = num1+num2+num3+num4;
    console.log(sum);
}

addNumber(22,25);
addNumber(22,10);
addNumber(33,8,12);
addNumber(55,10,65,12);