const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("Manny", 2319, "mannysg88@gmail.com", 104);

  expect(manager.name).toBe("Manny");
  expect(manager.id).toBe(2319);
  expect(manager.email).toBe("mannysg88@gmail.com");
  expect(manager.office).toBe(104);
});

test("gets name of manager", () => {
  const manager = new Manager("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(manager.getName()).toBe("Manny");
});

test("gets id of manager", () => {
  const manager = new Manager("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(manager.getId()).toBe(2319);
});

test("gets email of manager", () => {
  const manager = new Manager("Manny", 2319, "mannysg88@gmail.com", "mannygarcia98");
  expect(manager.getEmail()).toBe("mannysg88@gmail.com");
});

test("gets office number of manager", () => {
  const manager = new Manager("Manny", 2319, "mannysg88@gmail.com", 104);
  expect(manager.getOffice()).toBe(104);
});

test("gets role of manager", () => {
  const manager = new Manager("Manny", 2319, "mannysg88@gmail.com", 104);
  expect(manager.getRole()).toBe("Manager");
});
