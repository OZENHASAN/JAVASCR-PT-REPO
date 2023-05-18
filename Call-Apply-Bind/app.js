//Call,apply,bind 

const obj1 = {
    number1 :10,
    number2:20 
};

const obj2 = {
    number1 :30,
    number2:40 
};
function addNumber (number3,number4){
    
    console.log(this.number1 + this.number2 + number3 + number4);
}
// addNumber(100,200);
// addNumber.call(obj1,100,200);
// addNumber.call(obj2,50,60);

// addNumber.apply(obj1,[100,200]);
// addNumber.apply(obj2,[100,200]);

//Bind
function getNumberTotal(number3,number4){
        return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 =getNumberTotal.bind(obj1);
const copyFunc2 = getNumberTotal.bind(obj2);
console.log(copyFunc1(100,200));