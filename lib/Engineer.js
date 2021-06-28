const employee = require(`./Employee.js`);

class Engineer extends employee.Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
}

Engineer.prototype.getRole = () => `Engineer`;

module.exports = {
    Engineer
};