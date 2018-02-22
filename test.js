const dhas = require('./dist/deepdhas');

test('should consider `undefined` a value', () => {
  const inputA = { a: undefined };
  const inputB = { a: { b: undefined } };
  expect(dhas(inputA, 'a')).toBe(true);
  expect(dhas(inputB, 'a.b')).toBe(true);
});

test('should consider `false` a value', () => {
  const inputA = { a: false };
  const inputB = { a: { b: false } };
  expect(dhas(inputA, 'a')).toBe(true);
  expect(dhas(inputB, 'a.b')).toBe(true);
});

test('should consider `null` a value', () => {
  const inputA = { a: null };
  const inputB = { a: { b: null } };
  expect(dhas(inputA, 'a')).toBe(true);
  expect(dhas(inputB, 'a.b')).toBe(true);
});

test('should accept array as first argument', () => {
  expect(dhas([], '0')).toBe(false);
  expect(dhas([0], '0')).toBe(true);
});

test('should accept object as first argument', () => {
  const inputA = {};
  const inputB = { a: '' };
  const inputC = { a: { b: true } };
  expect(dhas(inputA, 'a')).toBe(false);
  expect(dhas(inputB, 'a')).toBe(true);
  expect(dhas(inputC, 'a.b')).toBe(true);
});

test('should accept dot-delineated string as second argument', () => {
  const inputA = { a: '' };
  const inputB = { a: { b: true } };
  expect(dhas(inputA, 'a')).toBe(true);
  expect(dhas(inputB, 'a.b')).toBe(true);
});

test('should accept array as second argument', () => {
  const inputA = { a: '' };
  const inputB = { a: { b: true } };
  expect(dhas(inputA, ['a'])).toBe(true);
  expect(dhas(inputB, ['a', 'b'])).toBe(true);
});
