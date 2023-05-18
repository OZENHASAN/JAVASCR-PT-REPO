// const Obj= {
//     test1: function(){
//         console.log("Test 1");
//     },
//     test2: function(){
//         console.log("test2");
//     }
// }
// // console.log(Obj);
// const emp = Object.create(Obj);
// emp.name= "Hasan";
// emp.age =23;
// console.log(emp);
function Person (){
    
}

Person.prototype.test1=function(){
    console.log("test1");
}
Person.prototype.test2=function(){
    console.log("test2");
}
function Employee(name,age){
    this.name=name;
    this.age=age;
}
Employee.prototype= Object.create(Person.prototype);

const emp = new Employee("Mustafa",24);
console.log(emp);
