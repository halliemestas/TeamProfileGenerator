const Intern = require("./../lib/Intern");

//initialize an Employee
describe("Intern", () => {
    describe("Initialization", () => {
        const obj = new Intern("Hallie", 1, "email@gmail.com", "UCD");
      it("should create an object with 'officeNumber' property when called with the 'new' keyword", () => {
         expect(obj).toEqual({name:"Hallie", id: 1, email:"email@gmail.com", school:"UCD"})
      });
      it("getRoles", () => {
        expect(obj.getRole()).toBe("Intern");
      }
        ); 
    });
});