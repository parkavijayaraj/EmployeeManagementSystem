import { useState } from 'react'
import Dashboard from "./Page/Dashboard";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <Dashboard />
        
      </div>
      </>
  )
}

export default App
