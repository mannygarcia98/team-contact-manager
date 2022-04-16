const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");

  expect(engineer.name).toBe("Manny");
  expect(engineer.id).toBe(2319);
  expect(engineer.email).toBe("mannysg88@gmail.com");
  expect(engineer.github).toBe("mannygarcia98");
});

test("gets name of engineer", () => {
  const engineer = new Engineer("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(engineer.getName()).toBe("Manny");
});

test("gets id of engineer", () => {
  const engineer = new Engineer("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(engineer.getId()).toBe(2319);
});

test("gets email of engineer", () => {
  const engineer = new Engineer("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(engineer.getEmail()).toBe("mannysg88@gmail.com");
});

test("gets github of engineer", () => {
  const engineer = new Engineer("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(engineer.getGithub()).toBe("mannygarcia98");
});

test("gets role of engineer", () => {
  const engineer = new Engineer("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(engineer.getRole()).toBe("Engineer");
});
