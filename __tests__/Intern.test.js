const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Manny", 2319, "mannysg88@gmail.com", "University A");

  expect(intern.name).toBe("Manny");
  expect(intern.id).toBe(2319);
  expect(intern.email).toBe("mannysg88@gmail.com");
  expect(intern.school).toBe("University A");
});

test("gets name of intern", () => {
  const intern = new Intern("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(intern.getName()).toBe("Manny");
});

test("gets id of intern", () => {
  const intern = new Intern("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(intern.getId()).toBe(2319);
});

test("gets email of intern", () => {
  const intern = new Intern("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(intern.getEmail()).toBe("mannysg88@gmail.com");
});

test("gets school of intern", () => {
  const intern = new Intern("Manny", 2319, "mannysg88@gmail.com", "University A");
  expect(intern.getSchool()).toBe("University A");
});

test("gets role of intern", () => {
  const intern = new Intern("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(intern.getRole()).toBe("Intern");
});
