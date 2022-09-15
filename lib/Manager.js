const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getSpecial()
    {
        return this.officeNumber;
    }

    getRole()
    {
        return "Manager";
    }
}

module.exports = Manager;