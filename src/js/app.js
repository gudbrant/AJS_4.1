import sum from './basic';

export const magician = { name: 'маг', health: 90 };

export default function firstAid(e) {
  if (e.health > 50) {
    console.log('healthy'); //eslint-disable-line
    return 'healthy';
  } if ((e.health > 15) && (e.health <= 50)) {
    console.log('wounded'); //eslint-disable-line
    return 'wounded';
  } if (e.health <= 15) {
    console.log('critical'); //eslint-disable-line
    return 'critical';
  }
  return '';
}

firstAid(magician);

console.log('worked'); //eslint-disable-line

console.log(sum([1, 2])); //eslint-disable-line
