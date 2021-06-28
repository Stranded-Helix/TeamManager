const employee = require(`./Employee.js`);

class Intern extends employee.Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
}

Intern.prototype.getRole = () => `Intern`;

module.exports = {
    Intern
};