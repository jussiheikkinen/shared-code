import './App.css'
import React, { useEffect, useState } from 'react'
const { myAwesomeCalc, pi } = require('calculations-module')

function App() {
  const [aws, setAws] = useState(null)
  const [anotherPi, setPi] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4001/pi/12')
    .then(response => response.json())
    .then(data => setPi(data))

    fetch('http://localhost:4001/calc/1/2')
    .then(response => response.json())
    .then(data => setAws(data))

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Calculated in front end</h2>
          <div>
            <h5>MyAwesomeCalc</h5>
            {myAwesomeCalc(1, 2)}
            <h5>pi</h5>
            {pi(12)}
          </div>
        </div>
        <div>
          <h2>Calculated in back end</h2>
          <div>
            <h5>MyAwesomeCalc</h5>
            {JSON.stringify(aws)}
            <h5>pi</h5>
            {JSON.stringify(anotherPi)}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
