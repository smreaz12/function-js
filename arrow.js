//---arrow function---//

const a = ()=>{

}

//
const addNumber=()=>{
    console.log("Hi Everyone");
}

addNumber();


//
const add_Number=(num1,num2)=>{
    return num1+num2;
}

console.log(add_Number(3,8));



//amra jodi function er modde sudumatro return korte cai tahole eibabe korte pari//

const allnumber = (num1,num2,num3)=> num1+num2+num3;

console.log(allnumber(4,7,10));



//amra jodi kono single parameter niye kaj korte cai tahole eibabe function use korte pari//
const multi_number = num=> num*num;

console.log(multi_number(5));








//--------------//
//sadaronoto function er modde amra object define korar khetre object ke return korte hoy//
const greeting=()=>{
    return user={
       name:"REAZ",
       age:22,
    }
}
console.log(greeting());

//
//function er modde object define korar khetre () use korte pari, jeita dara bujay object ke return kora hocce//
const greeting1=()=>({name:"reaz",age:22,});
console.log(greeting());