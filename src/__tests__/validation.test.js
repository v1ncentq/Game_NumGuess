const { validateInput } = require('../core/logic.js');

describe('Валідація вводу', () => {
  test('Коректні цифри', () => {
    const result = validateInput([2, 4, 3], 1, 3);
    expect(result.isValid).toBe(true);
  });

  test('Некоректна кількість цифр (1)', () => {
    const result = validateInput([5], 1, 1);
    expect(result.errors).toContain('Мінімальна кількість цифр — 2, максимальна -5');
  });

  test('Некоректні значення (10)', () => {
    const result = validateInput([10, 2], 1, 2);
    expect(result.errors).toContain('Цифри повинні бути від 0 до 9');
  });
});