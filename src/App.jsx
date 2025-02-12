import { useState } from 'react'
import './App.css'
import StaticRange from './components/StarRating'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='card'>
      <div>
        <h2 className='heading'>Start rating</h2>
        <StaticRange/>
        </div>
      </div>
    </div>
  )
}

export default App
