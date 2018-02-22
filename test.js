const dhas = require('./dist/dhas');

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

describe('first parameter', () => {
  test('should accept array', () => {
    expect(dhas([], '0')).toBe(false);
    expect(dhas([0], '0')).toBe(true);
  });

  test('should accept object', () => {
    const inputA = {};
    const inputB = { a: '' };
    const inputC = { a: { b: true } };
    expect(dhas(inputA, 'a')).toBe(false);
    expect(dhas(inputB, 'a')).toBe(true);
    expect(dhas(inputC, 'a.b')).toBe(true);
  });
});

describe('second parameter', () => {
  test('should accept string (delineated by dots)', () => {
    const inputA = { a: '' };
    const inputB = { a: { b: true } };
    expect(dhas(inputA, 'a')).toBe(true);
    expect(dhas(inputB, 'a.b')).toBe(true);
  });

  test('should accept array', () => {
    const inputA = { a: '' };
    const inputB = { a: { b: true } };
    expect(dhas(inputA, ['a'])).toBe(true);
    expect(dhas(inputB, ['a', 'b'])).toBe(true);
  });
});
