//Syntactic Sugar

function Employee(name,age,salary){
    this.name = name; 
    this.age= age;
    this.salary=salary;
}
Employee.prototype.showInfos = function(){
    console.log("İsim:" + this.name + "Yaş:" + this.age + "Yaş:"+this);
}
const emp = new Employee("Hasan",23,2000);
console.log(emp);