const Engineer = require("./../lib/Engineer");

//initialize an Employee
describe("Engineer", () => {
    describe("Initialization", () => {
        const obj = new Engineer("Hallie", 1, "email@gmail.com", "halliemestas");
      it("should create an object with 'officeNumber' property when called with the 'new' keyword", () => {
        expect(obj).toEqual({name:"Hallie", id: 1, email:"email@gmail.com", github:"halliemestas"})
      });
      it("getRoles", () => {
        expect(obj.getRole()).toBe("Engineer");
      }
        ); 
    });
});