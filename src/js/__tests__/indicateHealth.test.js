import indicateHealth from "../functions.indicateHealth";

test("Здоровье более 50", () => {
  const object = { name: "Маг", health: 90 };
  const received = indicateHealth(object);

  expect(received).toBe("healthy");
});

test("Здоровье от 50 и до 15", () => {
  const object = { name: "Маг", health: 30 };
  const received = indicateHealth(object);

  expect(received).toBe("wounded");
});

test("Здоровье менее 15", () => {
  const object = { name: "Маг", health: 10 };
  const received = indicateHealth(object);

  expect(received).toBe("critical");
});

// Здоровье более 50 - зелёный;
// Здоровье от 50 и до 15 - жёлтый;
// Менее 15 - красный.

// {name: 'Маг', health: 90}

// И возвращает ответ в виде одной из строк: healthy, wounded, critical
