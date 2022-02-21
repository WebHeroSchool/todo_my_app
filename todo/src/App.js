import logo from './logo.svg';
import './App.css';

const word = 'DELL';
const num = 73;
const log = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
          {word}
        </p>
        <p>
          {num}
        </p>
        <p style={{
          fontSize: 54 - 48
        }}>
        Hello Hello
        </p>
        <p>
          {log && 'log is true'}
        </p>
        <p>
          {log ? 'log is true' : 'log is false'}
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
