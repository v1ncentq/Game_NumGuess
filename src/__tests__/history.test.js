const { saveToHistory, clearHistory } = require('../script.js');

describe('Історія вгадувань', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Збереження запису', () => {
    saveToHistory([2,4,3], 2, 'first', 5, 12);
    expect(JSON.parse(localStorage.getItem('guessHistory'))).toHaveLength(1);
  });

  test('Обмеження історії 50 записами', () => {
    for(let i = 0; i < 55; i++) {
      saveToHistory([i], 1, 'none', 5, 12);
    }
    expect(JSON.parse(localStorage.getItem('guessHistory'))).toHaveLength(50);
  });
});