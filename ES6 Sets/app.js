const myset = new Set();

myset.add(100);
myset.add(3.14);
myset.add("Mustafa");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1 ,b:2});

// const myset2 = new Set([100,3.14,"mustafa"]);

// console.log(myset);
// console.log(myset2);

//Size
// console.log(myset.size);

//delete
// myset.delete("Mustafa");
//has metodu 

// console.log(myset.has("Mustafa"));
// console.log(myset.has(3.14));
// console.log(myset.has([1,2,3]))

//For Each

// myset.forEach(function(value){
//     console.log(value)
// })

//For Of 
// for(let value of myset){
//     console.log(myset);
// }

const array = Array.from(myset);

console.log(array);
