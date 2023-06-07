import './App.css';

const a = 5;

function App2() {
  let a = 6;

  return (
    <div className="App"></div>
  )
}

function App() {
  let a = 6;

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* variables
        if else
        loops
        function - xxxxxxxx */}

        <p>
          Edit <code>src/App.js</code> and save to reload.
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
