import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState([[]]);

  const handleSubmit = () => {};

  return (
    <div className="dfj">
      <input type="text" placeholder="Enter here"></input>
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
