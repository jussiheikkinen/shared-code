const PI = require('pi')

exports.printMsg = function() {
  console.log('This is a message from the demo package')
}

exports.myAwesomeCalc = function (param1, param2) {
  console.log(param1, param2)
  return (param1 + param2) * 666
}

exports.pi = function (decimals) {
  return PI(decimals)
}