//Question 1 + 2:
let data = "Secret Data";

class User {
    constructor (name,email) {
        this.name = name;
        this.email = email;
    };

    viewdata() {
        console.log("Data: ", data);
    };
};

class Admin extends User{
    constructor (name,email) {
        super(name,email);
    };

    editdata () {
        data = prompt("Enter Data:");
    };
};

let student1 = new User("Aman","aman@gmail.com");
let student2 = new User("Akash","akash@gmail.com");
let teacher1 = new User("Dean","dean@gmail.com");

let admin1 = new Admin("Admin","admin@college.com");