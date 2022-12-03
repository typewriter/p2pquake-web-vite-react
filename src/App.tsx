import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { APIView } from "./APIView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h3>P2PQuake JSON API (v2)</h3>
      <div className="card">
        <ErrorBoundary fallback={<p>エラーが発生しました</p>}>
          <Suspense fallback={<p>ロードしています...</p>}>
            <APIView />
          </Suspense>
        </ErrorBoundary>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
