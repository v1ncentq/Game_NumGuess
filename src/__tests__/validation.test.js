const { validateInput } = require('../script.js');

describe('Валідація вводу', () => {
  test('Коректні цифри', () => {
    expect(validateInput('2,4,3', 2)).toBe(true);
  });

  test('Некоректна кількість цифр', () => {
    expect(validateInput('5', 1)).toEqual({
      isValid: false,
      error: 'Мінімальна кількість цифр — 2'
    });
  });
});