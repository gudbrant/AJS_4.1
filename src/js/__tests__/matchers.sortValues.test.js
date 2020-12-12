import sortedArr from "../matchers.sortValues";

test("should sort", () => {
  const received = sortedArr([
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 }
  ]);
  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 }
  ];

  expect(received).toEqual(expected);
});

// Дан массив с информацией о героях, например:

// [
//   {name: 'мечник', health: 10},
//   {name: 'маг', health: 100},
//   {name: 'лучник', health: 80},
// ]

// В отсортированном порядке должно выглядеть следующим образом:

// [
//   {name: 'маг', health: 100},
//   {name: 'лучник', health: 80},
//   {name: 'мечник', health: 10},
// ]
