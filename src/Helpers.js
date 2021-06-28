const inquirer = require("inquirer");

const checkName = (string) => {
    if (string && string.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

const checkNumber = (number) => {
    if (parseInt(number)) {
        return true;
    }
    else {
        return false;
    }
}

const checkEmail = (address) => {
    if (checkName(address) && address.includes('@')) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    checkName,
    checkNumber,
    checkEmail
}