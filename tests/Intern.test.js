const {Intern} = require("../lib/Intern.js");

describe ("Intern Object", () => {
    const anyNumber = 3;
    const name = "Garrett";
    const email = "test@test.com";
    const testIntern = new Intern(name, anyNumber, email);
    it("should return the name of the Intern", () => {
        expect(testIntern.name).toBe(name);
    })
    it("should return the ID of the Intern", () => {
        expect(testIntern.id).toBe(anyNumber);
    });
    it("should return the email of the Intern", () => {
        expect(testIntern.email).toBe(email);
    });
    it("should return role of Intern", () => {
        expect(testIntern.getRole()).toBe("Intern");
    });
})