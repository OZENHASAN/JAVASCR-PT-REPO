//Kalıtım-Inheritence
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos= function(){
    console.log("İsim:" + this.name + "Yaş:" +this.age);
 }
// const person =new Person("Vera",22);

// console.log(person);

function Employee (name,age,salary){
    this.name; 
    this.age;
    this.salary;
}
Employee.prototype =Object.create(Person.prototype);

const emp = new Employee("Vera",22,3000);
console.log(emp);
emp.showInfos();