const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Manny", 2319, "mannysg88@gmail.com");

  expect(employee.name).toBe("Manny");
  expect(employee.id).toBe(2319);
  expect(employee.email).toBe("mannysg88@gmail.com");
});

test("gets name of employee", () => {
  const employee = new Employee("Manny", 2319, "mannysg88@gmail.com");

  expect(employee.getName()).toBe("Manny");
});

test("gets id of employee", () => {
  const employee = new Employee("Manny", 2319, "mannysg88@gmail.com");

  expect(employee.getId()).toBe(2319);
});

test("gets email of employee", () => {
  const employee = new Employee("Manny", 2319, "mannysg88@gmail.com");

  expect(employee.getEmail()).toBe("mannysg88@gmail.com");
});
