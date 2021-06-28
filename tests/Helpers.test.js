const helper = require("../lib/Helpers.js");

describe ("checkName", () => {
    it("should return true if at least one character provided ", () => {
        expect(helper.checkName('any string')).toBeTruthy();
    });
    it("should return false if provide no string", () => {
        expect(helper.checkName()).toBeFalsy();
    })
});

describe ("checkNumber", () => {
    it("should return true if a number is provided", () => {
        const anyNumber = 7;
        expect(helper.checkNumber(anyNumber)).toBeTruthy();
    });
    it("should return false if a string is provided", () => {
        expect(helper.checkNumber("any string")).toBeFalsy();
    });
    it("should return false if nothing is provided", () => {
        expect(helper.checkNumber()).toBeFalsy();
    });
})

describe ("checkEmail", () => {
    it("should return true if a string containing @ is provided", () => {
        expect(helper.checkEmail("stringWith@")).toBeTruthy();
    });
    it("should return false if provided a string without an @", () => {
        expect(helper.checkEmail("stringWithout")).toBeFalsy();
    });
    it("should return false if provided with nothing", () => {
        expect(helper.checkEmail()).toBeFalsy();
    });
})
