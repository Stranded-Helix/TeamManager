const {Employee} = require("../lib/Employee.js");

describe ("Employee Object", () => {
    const anyNumber = 3;
    const name = "Garrett";
    const email = "test@test.com";
    const testEmployee = new Employee(name, anyNumber, email);
    it("should return the name of the Employee", () => {
        expect(testEmployee.name).toBe(name);
    })
    it("should return the ID of the Employee", () => {
        expect(testEmployee.id).toBe(anyNumber);
    });
    it("should return the email of the Employee", () => {
        expect(testEmployee.email).toBe(email);
    });
    it("should return role of Employee", () => {
        expect(testEmployee.getRole()).toBe("Employee");
    });
})