//Example of a basic Object
const student = {
    fname : "Arka Ghosh",
    marks : 90.6,
    printmarks : function () {
        console.log("Marks = ", this.marks);
    }
};


//Outside an object, a function is defined in two ways
//Opt 1:
function Example1() {
    console.log("Just for example 1");
};
//Opt 2:
const Example2 = () => {
    console.log("Just for example 2");
};


//Employee is the object
const employee = {
    //Opt 1 of defining a function inside object
    calcTax1() {
        console.log("Tax rate is 10%");
    },
    //Opt 2 of defining a function inside object
    calcTax2 : function() {
        console.log("Tax rate is 20%");
    }
};

const newemp1 = {
    salary : 5000
};

const newemp2 = {
    salary : 3000,
    //Here this will be used as method of same name declared in object has greater priority over prototype
    calcTax1() {
        console.log("Tax rate is 30%");
    }
};

//Usage of special property ccalled prototype used for reference/inherit to another object
//Syntax: <Inheriting Object>.__proto__ = <Main Object>;
//If object and prototype have same method, then object's method will be used
newemp1.__proto__ = employee;
newemp2.__proto__ = employee;





//Using Classes in JS
//No need of separating functions or methods inside class
//Many Objects can be created out of a single class
class Toyota {
    start () {
        console.log("Start");
    };

    stop () {
        console.log("Stop");
    };

    setbrand(brand) {
        //'this.brand' is the property of the object
        //'brand' is the parameter recieved inside the function
        this.brand = brand; //Here, 'this.brand' means 'for each different object'
    };
};

//If object is to be created out of the class then
//Syntax: let <object name> = new <Class name>;
let fortuner = new Toyota();
fortuner.setbrand("Fortuner");
let lexus = new Toyota();
lexus.setbrand("Lexus");





//Creation of Constructors inside Classes
//Made automatically if not made by user
//Used to invoke automatically
//Used mainly if work needs to perform during the creation of the object
class Tesla {
    constructor(brand, milage) {
        console.log("Automatically invoked");
        this.brand = brand;
        this.milage = milage;
    };

    start () {
        console.log("Start");
    };

    stop () {
        console.log("Stop");
    };
};

let cybertruck = new Tesla("Truck", 30); //Invokes constructor
console.log(cybertruck); //Prints the object from the class
let modelx = new Tesla(); //Invokes constructor
console.log(modelx); //Undefined in brand





//Inheritance: Passing properties and methods from parent to child class
//Method Overriding: If parent and child both have same method, then child's method is used
class Person {
    constructor () {
        this.species = 'homo sapiens';
    };

    eat () {
        console.log("Eat");
    };

    sleep () {
        console.log("Sleep");
    };

    work () {
        console.log("Do nothing");
    };
};

class Doctor extends Person {
    work () {
        console.log("Recover people");
    };
};

class Engineer extends Person {
    work () {
        console.log("Solve poblems build something");
    };
};

let eng = new Engineer();
let doc = new Doctor();
//Upon executing 'calling.hello' in console window
//The output will show Hello as the child inherits the parent class





//'super' Keyword: Used to call the constructor of its parent class to access the parent's properties and methods
//Parent class constructor must be invoked using 'super' keyboard before using child's constructor
class newPerson {
    constructor (branch) {
        this.species = 'homo sapiens';
        this.branch = branch;
    };

    eat () {
        console.log("Eat");
    };

    work () {
        console.log("Do nothing");
    };
};

class newEngineer extends Person {
    constructor(stream) {
        super(stream); //To invoke parent class constructor
    };

    work () {
        super.eat(); //Used to access 'eat' method of the parent class
        console.log("Solve poblems build something");
    };
};

let neweng = new newEngineer("Computer Science Engineer");