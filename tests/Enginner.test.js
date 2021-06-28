const {Engineer} = require("../lib/Engineer.js");

describe ("Engineer Object", () => {
    const anyNumber = 3;
    const name = "Garrett";
    const email = "test@test.com";
    const testEngineer = new Engineer(name, anyNumber, email);
    it("should return the name of the Engineer", () => {
        expect(testEngineer.name).toBe(name);
    })
    it("should return the ID of the Engineer", () => {
        expect(testEngineer.id).toBe(anyNumber);
    });
    it("should return the email of the Engineer", () => {
        expect(testEngineer.email).toBe(email);
    });
    it("should return role of Engineer", () => {
        expect(testEngineer.getRole()).toBe("Engineer");
    });
})