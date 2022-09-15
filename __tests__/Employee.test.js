const Employee = require("./../lib/Employee");

//initialize an Employee
describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an object with 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
        
        // Arrange
        const obj = new Employee("Hallie", 1, "email@gmail.com");
  
        // Assert
         expect(obj).toEqual({name:"Hallie", id: 1, email:"email@gmail.com"})
      });
    });
});
