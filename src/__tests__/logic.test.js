const {
  calculateHiddenDigit,
  calculateSecretNumber,
  validateInput
} = require ('../core/logic');

describe('Бізнес-логіка', () => {
  test('Розрахунок прихованої цифри', () => {
    expect(calculateHiddenDigit([2,4,3], 1, 6)).toBe(7);
  });

  test('Валідація коректного вводу', () => {
    expect(validateInput([1,2], 1, 2)).toEqual([]);
  });

    test('Прихована цифра = 0 → повертає 9', () => {
    expect(calculateHiddenDigit([9,9], 0, 0)).toBe(9);
  });

  test('Секретне число з модифікатором 0', () => {
    expect(calculateSecretNumber(9, 0)).toBe(4); // (9+0)/9*4=4
  });

  test('Валідація максимальної кількості цифр', () => {
    const result = validateInput([1, 2, 3, 4, 5, 6], 1, 6);
    expect(result.errors).toContain('Мінімальна кількість цифр — 2, максимальна -5');
  });
});