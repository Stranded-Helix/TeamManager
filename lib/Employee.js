class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

Employee.prototype.getName = () => this.name;

Employee.prototype.getId = () => this.id;

Employee.prototype.getEmail = () => this.email;

Employee.prototype.getRole = () => `Employee`;

module.exports = {
    Employee
}