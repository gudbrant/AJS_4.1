import sum from './basic';

export const magician = { name: 'маг', health: 90 };

export default function firstAid(e) {
  if (e.health > 50) {
    console.log('healthy');
    return 'healthy';
  } if ((e.health > 15) && (e.health <= 50)) {
    console.log('wounded');
    return 'wounded';
  } if (e.health <= 15) {
    console.log('critical');
    return 'critical';
  }
  return '';
}

firstAid(magician);

console.log('worked');

console.log(sum([1, 2]));
