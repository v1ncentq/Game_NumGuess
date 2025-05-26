import {
  calculateHiddenDigit,
  calculateSecretNumber,
  validateInput
} from '../core/logic.js';

describe('Бізнес-логіка', () => {
  test('Розрахунок прихованої цифри', () => {
    expect(calculateHiddenDigit([2,4,3], 1, 6)).toBe(7);
  });

  test('Валідація коректного вводу', () => {
    expect(validateInput([1,2], 1, 2)).toEqual([]);
  });
});