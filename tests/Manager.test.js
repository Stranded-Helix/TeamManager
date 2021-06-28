const {Manager} = require("../lib/Manager.js");

describe ("Manager Object", () => {
    const anyNumber = 3;
    const name = "Garrett";
    const email = "test@test.com";
    const testManager = new Manager(name, anyNumber, email);
    it("should return the name of the Manager", () => {
        expect(testManager.name).toBe(name);
    })
    it("should return the ID of the Manager", () => {
        expect(testManager.id).toBe(anyNumber);
    });
    it("should return the email of the Manager", () => {
        expect(testManager.email).toBe(email);
    });
    it("should return role of Manager", () => {
        expect(testManager.getRole()).toBe("Manager");
    });
})