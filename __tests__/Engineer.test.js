const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  const engineer = new Engineer(
    "Heather",
    1,
    "heatherknoyes@gmail.com",
    "heatherknoyes"
  );

  it("Should set initial properties based on object creation", () => {
    expect(engineer.name).toBe("Heather");
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("heatherknoyes@gmail.com");
    expect(engineer.github).toBe("heatherknoyes");
  });

  describe("getRole", () => {
    it("Should return role", () => {
      expect(engineer.getRole()).toBe("Engineer");
    });
  });

  describe("getGithub", () => {
    it("Should return github", () => {
      expect(engineer.getGithub()).toBe("heatherknoyes");
    });
  });
});
