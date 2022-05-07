const Employee = require("../lib/Employee");

describe("Employee class", () => {
  const employee = Employee("Heather", 1, "heatherknoyes@gmail.com");

  it("Should set initial properties based on object creation", () => {
    expect(employee.name).toBe("Heather");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("heatherknoyes@gmail.com");
  });

  describe("getRole", () => {
    it("Should return role", () => {
      expect(employee.getRole()).toBe("Employee");
    });
  });

  // describe("getId", () => {
  //   it("Correct guess returns true", () => {
  //     expect(new Letter("j").guess("j")).toBe(true);
  //   });

  //   it("Incorrect guess returns false", () => {
  //     expect(new Letter("j").guess("l")).toBe(false);
  //   });
  // });

  // describe("getName", () => {
  //   it("Correct guess returns true", () => {
  //     expect(new Letter("j").guess("j")).toBe(true);
  //   });

  //   it("Incorrect guess returns false", () => {
  //     expect(new Letter("j").guess("l")).toBe(false);
  //   });
  // });

  // describe("getEmail", () => {
  //   it("Correct guess returns true", () => {
  //     expect(new Letter("j").guess("j")).toBe(true);
  //   });

  //   it("Incorrect guess returns false", () => {
  //     expect(new Letter("j").guess("l")).toBe(false);
  //   });
  // });
});
