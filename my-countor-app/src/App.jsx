import React, { useState } from "react";
function App() {
    const [count, setCount] = useState(0);
    return (
    <div className="App">
      <h2>Contour:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count * 0)}>Reset</button>
    </div>
    );
}
export default App;

