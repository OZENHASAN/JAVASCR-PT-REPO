const person ={
    name:"Hasan",
    age: 25,
    salary:3000
};

const langs =["Pyton","java","C++","php"];

const name ="Hasann"

// For In 
//Obje üzerinde gezinme 
// for(let prop in person) {
//     console.log(prop,person[prop])
// }
//Array üzerinde dolaşma
// for (let index in langs){
//     console.log(index,langs[index]);
// }
//String
// for (let index in name){
//     console.log(index,name[index]);
// }

// for(let value of person){ //Hata verir çünkü object üzerinde dolaşılmaz for of ile 
//     console.log(value) 
// };

// for(let value of langs){
//     console.log(value)
// };

for(let character of name){
    console.log(character)
};