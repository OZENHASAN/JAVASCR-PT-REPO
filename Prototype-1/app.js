// const object = new Object(); // Object Literal
// object.name ="Hasan "
// console.log(object);
function Employee(name,age){
    this.name=name,
    this.age=age
   
 }
 Employee.prototype.showInfos =function(){
    console.log("İsim:"+this.name + "Yaş:"+ this.age)};

const emp1 = new Employee("Hasan",21);
const emp2 = new Employee("Sukamadre",20);
emp2.showInfos();
console.log(emp1);
console.log(emp2);

