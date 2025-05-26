
const calculateHiddenDigit = (digits, hiddenIndex, modifier) => {
  const knownSum = digits.filter((_, i) => i !== hiddenIndex).reduce((a, b) => a + b, 0);
  const total = knownSum + modifier;
  const nextMultiple = Math.ceil(total / 9) * 9;
  const hiddenDigit = nextMultiple - total;
  return hiddenDigit === 0 ? 9 : hiddenDigit; // Повертаємо коректне значення
};

const calculateSecretNumber = (allDigitsSum, modifier) => {
  return Math.floor((allDigitsSum + modifier) / 9 * 4);
};

const validateInput = (digits, position, maxPosition) => {
  const errors = [];
  
  if (digits.length < 2 || digits.length > 5) {
    errors.push('Мінімальна кількість цифр — 2, максимальна -5');
  }
  
  if (digits.some(d => isNaN(d) || d < 0 || d > 9)) {
    errors.push('Цифри повинні бути від 0 до 9');
  }
  
  if (isNaN(position) || position < 1 || position > maxPosition) {
    errors.push('Невірний розряд прихованої цифри');
  }
  
  return errors;

};

  module.exports = {
  calculateHiddenDigit,
  calculateSecretNumber,
  validateInput
};