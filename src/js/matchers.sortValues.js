export default function sortValues(arr) {
  arr.sort((before, after) => before.health - after.health);
  const sortedArr = arr.reverse();
  return sortedArr;
}

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
