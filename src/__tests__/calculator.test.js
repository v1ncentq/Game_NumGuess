const { calculateHiddenDigit, calculateSecretNumber } = require('../core/logic.js');
const { JSDOM } = require('jsdom');
const fs = require('fs');

// Створення середовища jsdom
const html = fs.readFileSync('./src/index.html', 'utf-8');
const dom = new JSDOM(html);
global.document = dom.window.document;

describe('Калькулятор чисел', () => {
  test('Розрахунок прихованої цифри', () => {
    const digits = [2, 4, 3];
    const modifier = 6;
    const hiddenIndex = 1;
    expect(calculateHiddenDigit(digits, hiddenIndex, modifier)).toBe(7);
  });

  test('Розрахунок секретного числа', () => {
    expect(calculateSecretNumber(15, 6)).toBe(9);
  });
  test('Секретне число з великим модифікатором', () => {
    expect(calculateSecretNumber(100, 20)).toBe(53); // (100+20)/9*4=120/9*4≈53.33→53
});
});