import './App.css'
import React, { useEffect, useState } from 'react'
const { myAwesomeCalc, pi } = require('calculations-module')

function App() {
  const [nodeCalc, setNodeCalc] = useState(null)
  const [phpCalc, setPhpCalc] = useState(null)
  const [nodePi, setNodePi] = useState(null)  
  const [phpPi, setPhpPi] = useState(null)  

  useEffect(() => {
    fetch('http://localhost:4001/pi/12')
    .then(response => response.json())
    .then(data => setNodePi(data))

    fetch('http://localhost:4001/calc/1/2')
    .then(response => response.json())
    .then(data => setNodeCalc(data))

    fetch('http://localhost:8000/pi/12')
    .then(response => response.json())
    .then(data => setPhpPi(data))

    fetch('http://localhost:8000/calc/1/2')
    .then(response => response.json())
    .then(data => setPhpCalc(data))
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
          <h2>Calculated in node</h2>
          <div>
            <h5>MyAwesomeCalc</h5>
            {JSON.stringify(nodeCalc)}
            <h5>pi</h5>
            {JSON.stringify(nodePi)}
          </div>
        </div>
        <div>
          <h2>Calculated in php</h2>
          <div>
            <h5>MyAwesomeCalc</h5>
            {JSON.stringify(phpCalc)}
            <h5>pi</h5>
            {JSON.stringify(phpPi)}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
