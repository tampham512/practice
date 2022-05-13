import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/style-guide">Click button-style-guide</Link>
      <br></br>
      <Link to="/input-style-guide">Click input-style-guide</Link>
      <br></br>
      <Link to="/select-style-guide">Click select-style-guide</Link>
    </div>
  );
}

export default App;
