var text = require('./')

var array = require('cave-automata-2d')(require('zeros')([79, 30]))(10)
var converted = text(array, function(cell) {
  return cell ? '@' : ' '
})

if (process.browser) {
  var pre = document.createElement('pre')
  pre.innerHTML = converted
  document.body.appendChild(pre)
} else {
  console.log(converted)
}
