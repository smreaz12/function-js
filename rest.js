//---Rest operator in function---//
//rest operator use korar maddome amra kono function e jekono length er perametar bosate pari//

function addNumber(...num){
    sum=0;
    for(let n of num){
        sum+=n;
    }
    console.log(sum);
}

addNumber(22);
addNumber(45,90);
addNumber(67,97,10);
addNumber(12,99,100,44,13);
addNumber(55,90,14,56,39,98,17,908,45,76,98,38,435,76,19,50,65,59,7654,70);