const { JSDOM } = require('jsdom');
const { saveToHistory, clearHistory } = require('../script.js');

const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <div id="historyList"></div>
      <span id="historyCount"></span>
      <button id="clearHistoryButton"></button>
    </body>
  </html>
`);
global.document = dom.window.document;
global.localStorage = dom.window.localStorage;

describe('Історія вгадувань', () => {
  beforeEach(() => {
    localStorage.clear();
    document.getElementById('historyList').innerHTML = '';
  });

  test('Збереження запису', () => {
    saveToHistory([2, 4, 3], 2, 'first', 5, 12);
    const history = JSON.parse(localStorage.getItem('guessHistory'));
    expect(history).toHaveLength(1);
  });
  
    test('Очищення історії', () => {
    saveToHistory([1, 2, 3], 1, 'none', 4, 8);
    clearHistory();
    expect(localStorage.getItem('guessHistory')).toBeNull();
  });
});