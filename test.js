const has = require('./dist/deephas');

test('should consider `undefined` a value', () => {
  const inputA = { a: undefined };
  const inputB = { a: { b: undefined } };
  expect(has(inputA, 'a')).toBe(true);
  expect(has(inputB, 'a.b')).toBe(true);
});

test('should consider `false` a value', () => {
  const inputA = { a: false };
  const inputB = { a: { b: false } };
  expect(has(inputA, 'a')).toBe(true);
  expect(has(inputB, 'a.b')).toBe(true);
});

test('should consider `null` a value', () => {
  const inputA = { a: null };
  const inputB = { a: { b: null } };
  expect(has(inputA, 'a')).toBe(true);
  expect(has(inputB, 'a.b')).toBe(true);
});

test('should accept array as first argument', () => {
  expect(has([], '0')).toBe(false);
  expect(has([0], '0')).toBe(true);
});

test('should accept object as first argument', () => {
  const inputA = {};
  const inputB = { a: '' };
  const inputC = { a: { b: true } };
  expect(has(inputA, 'a')).toBe(false);
  expect(has(inputB, 'a')).toBe(true);
  expect(has(inputC, 'a.b')).toBe(true);
});

test('should accept dot-delineated string as second argument', () => {
  const inputA = { a: '' };
  const inputB = { a: { b: true } };
  expect(has(inputA, 'a')).toBe(true);
  expect(has(inputB, 'a.b')).toBe(true);
});

test('should accept array as second argument', () => {
  const inputA = { a: '' };
  const inputB = { a: { b: true } };
  expect(has(inputA, ['a'])).toBe(true);
  expect(has(inputB, ['a', 'b'])).toBe(true);
});
