import firstAid from '../app';

test('calculate condition with infinity health', () => {
  const input = { name: '...', health: Infinity };
  const expected = 'healthy';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with 99 health', () => {
  const input = { name: '...', health: 99 };
  const expected = 'healthy';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with 51 health', () => {
  const input = { name: '...', health: 51 };
  const expected = 'healthy';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with 50 health', () => {
  const input = { name: '...', health: 50 };
  const expected = 'wounded';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with 49 health', () => {
  const input = { name: '...', health: 49 };
  const expected = 'wounded';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with 33 health', () => {
  const input = { name: '...', health: 33 };
  const expected = 'wounded';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with 16 health', () => {
  const input = { name: '...', health: 16 };
  const expected = 'wounded';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with 15 health', () => {
  const input = { name: '...', health: 15 };
  const expected = 'critical';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with 14 health', () => {
  const input = { name: '...', health: 14 };
  const expected = 'critical';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with 0 health', () => {
  const input = { name: '...', health: 0 };
  const expected = 'critical';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with -1 health', () => {
  const input = { name: '...', health: -1 };
  const expected = 'critical';
  const received = firstAid(input);
  expect(received).toBe(expected);
});

test('calculate condition with minus infinity health', () => {
  const input = { name: '...', health: (-1 * Infinity) };
  const expected = 'critical';
  const received = firstAid(input);
  expect(received).toBe(expected);
});
