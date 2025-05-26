import '@testing-library/jest-dom';

// Імітація DOM
const html = `
  <input id="digits" />
  <span id="maxPosition">5</span>
  <input id="position" max="5" />
  <div id="result"></div>
  <div id="historyList"></div>
  <span id="historyCount"></span>
`;

beforeEach(() => {
  document.body.innerHTML = html;
});

// Імітація localStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  getItem = (key) => this.store[key] || null;
  setItem = (key, value) => this.store[key] = value;
  clear = () => this.store = {};
}

global.localStorage = new LocalStorageMock();