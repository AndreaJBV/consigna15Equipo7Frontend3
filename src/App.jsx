import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RandomApi from './components/RandomApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RandomApi/>
    </div>
  )
}

export default App
