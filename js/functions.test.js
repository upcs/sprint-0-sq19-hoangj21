const functions = require('./functions');
test('adds 1 + 2 to equal 3', () => {
  expect(functions(1, 2)).toBe(3);
});

test('object assignment', () => {
    expect(functions(1,2)).toEqual(3);
  });
