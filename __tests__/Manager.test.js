const Manager = require("./../lib/Manager");

//initialize an Employee
describe("Manager", () => {
    describe("Initialization", () => {
        const obj = new Manager("Hallie", 1, "email@gmail.com", 10);
      it("should create an object with 'officeNumber' property when called with the 'new' keyword", () => {
         expect(obj).toEqual({name:"Hallie", id: 1, email:"email@gmail.com", officeNumber:10})
      });
      it("getRoles", () => {
        expect(obj.getRole()).toBe("Manager");
      }
        ); 
    });
});