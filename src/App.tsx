import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounter } from '../store'

function App() {
  
  const count = useCounter((state) => state.count);
  const incrementByOne = useCounter((state) => state.incrementByOne);
  const decrementByOne = useCounter((state) => state.decrementByOne);

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
        <button onClick={() => incrementByOne(count+1)}>increment</button>
        <button>
          count is {count}
        </button>
        <button onClick={() => decrementByOne(count-1)}>decrement</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
