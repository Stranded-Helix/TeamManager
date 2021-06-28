const employee = require(`./Employee.js`);

class Manager extends employee.Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
    }
}

Manager.prototype.getRole = () => `Manager`;

module.exports = {
    Manager
};