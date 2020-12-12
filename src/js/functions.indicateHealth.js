// TODO: write your code here

function indicateHealth(element) {
  let healthIndicator = "";
  switch (true) {
    case element.health > 50:
      healthIndicator = "healthy";
      break;
    case element.health >= 15 && element.health <= 50:
      healthIndicator = "wounded";
      break;
    case element.health < 15:
      healthIndicator = "critical";
      break;
    default:
      healthIndicator = isNaN;
      break;
  }
  return healthIndicator;
}

export default indicateHealth;

// Здоровье более 50 - зелёный;
// Здоровье от 50 и до 15 - жёлтый;
// Менее 15 - красный.

// {name: 'Маг', health: 90}

// И возвращает ответ в виде одной из строк: healthy, wounded, critical
