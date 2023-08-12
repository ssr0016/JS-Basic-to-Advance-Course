//OOP
//Ang OOP sa javascript ay dalawang klase

//1. Constructor function
function Tao(fName, lName, bT){
    this.fName = this.fName
    this.lName = this.lName
    this.bT = bT;
    
    this.getfullname = () => {
        return `${this.fName} ${this.lName}`;
    }
    
}



//2. class
//ito ang class
//bakit uppercase ang unang letter? kasi pag lowercase mas prone sa error
class Person{
    //property
    constructor(firstName, lastName, bt){
        //pag sinabing this it refers to class
        this.firstName = firstName;
        this.lastName = lastName;
        this.bt =  bt;
    }
        getFullname(){
            return `${this.firstName} ${this.lastName}`;
        };
    }
//instantiate object
const person1 = new Person("Samson", "Recluta", "D");
//pwede na natin ito ireuse
const person2 = new Person("Angela", "Navarro", "S")

//kung gusto natin kuning ang specific gagamit lang tayo ng dot .
// console.log(person1.getFullname());
// console.log(person2.firstName);

 
const tao1 = new Tao("Delailah", "Navarro", "S");
const tao2 = new Tao("Jeffrey", "Navarro", "N");

console.log(tao1.fName);

