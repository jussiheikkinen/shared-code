const express = require('express')
const { myAwesomeCalc, pi } = require('calculations-module')
const cors = require('cors')

const app = express()
const port = 4001

app.use(cors())

/**
 yarn add ../calculations-module 
 yarn remove calculations-module
 */

app.get('/pi/:decimals', (req, res) => {
  const { decimals } = req.params
  console.log(`calculating pi. Decimals: `, decimals)
  
  res.send({result: pi(decimals)})
})

app.get('/calc/:p1/:p2', (req, res) => {
  const { p1, p2 } = req.params

  res.status(200).json({result: myAwesomeCalc(p1, p2)})
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})