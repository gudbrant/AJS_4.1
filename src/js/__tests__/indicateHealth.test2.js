import indicateHealth from "../functions.indicateHealth";

test("Should be healthy", () => {
  const result = indicateHealth({ name: "Маг", health: 60 });

  expect(result).toBe("healthy");
});

test("Should be wounded", () => {
  const result = indicateHealth({ name: "Маг", health: 27 });

  expect(result).toBe("wounded");
});

test("Should be critical", () => {
  const result = indicateHealth({ name: "Маг", health: 2 });

  expect(result).toBe("critical");
});

test("Should be critical 2", () => {
  const result = indicateHealth({ name: "Маг", health: -50 });

  expect(result).toBe("critical");
});

test("Should throw error", () => {
  const result = indicateHealth({ name: "Маг", health: "noValue" });

  expect(result).toBe(isNaN);
});

test("Should throw error 2", () => {
  const result = indicateHealth({ name: "Маг", health: "75NaN" });

  expect(result).toBe(isNaN);
});
