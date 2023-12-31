import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import counter from "./services/counter";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchCount = async () => {
      const res = await counter.getCount();
      setCount(res.count);
      console.log(res);
    };
    fetchCount();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            counter.updateCount(count);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={counter.getCount}>getCount</button>
    </>
  );
}

export default App;