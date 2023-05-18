//Mapler - Key- Value 

let myMap = new Map(); // Oluşturma 

const key1 ="Mustafa";
const key2 = {a:10,b:20};
const key3 = () => 2;
//SET
myMap.set(key1,"string deger");
myMap.set(key2,"object literal deger");
myMap.set(key3,"function deger");
//Get
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));
 
// Map BOYUTU (size)
    // console.log(myMap.size);

// const cities = new Map();

//     cities.set("Ankara",5);
//      cities.set("istanbul",15);
//      cities.set("izmir",4);

//For Each
// cities.forEach(function(value,key){
//     console.log(key,value)
// })
//For Of
// for(let [key,value] of cities){
//     console.log(key,value);
// }
//Map Keys
// for(let vall of cities.values()){
//     console.log(vall)
// }
//ARRAYLERDAN MAP OLUŞTURMA 

// const array =[["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array);
// console.log(lastMap);
//MAP'LERDEN ARRAY OLUŞTURMA 


const cities = new Map();
    const key = [1,2,3];
      cities.set("Ankara",5);
     cities.set("istanbul",15);
     cities.set("izmir",4);
    cities.set(key,"Array");
const array = Array.from(cities);
console.log(cities.get(key)); 