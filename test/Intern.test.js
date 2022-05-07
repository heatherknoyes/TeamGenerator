const Intern = require("../lib/Intern");

describe("Intern class", () => {
  const intern = new Intern(
    "Heather",
    1,
    "heatherknoyes@gmail.com",
    "Georgia Tech"
  );

  it("Should set initial properties based on object creation", () => {
    expect(intern.name).toBe("Heather");
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("heatherknoyes@gmail.com");
    expect(intern.school).toBe("Georgia Tech");
  });

  describe("getRole", () => {
    it("Should return role", () => {
      expect(intern.getRole()).toBe("Intern");
    });
  });

  describe("getSchool", () => {
    it("Should return school", () => {
      expect(intern.getSchool()).toBe("Georgia Tech");
    });
  });
});
