var cwise = require('cwise')

module.exports = text

function text(array, fn) {
  return toText(array, fn).join('\n')
}

var toText = cwise({
  args: ['array', 'scalar', 'index', 'shape'],
  pre: function(value, fn, idx, shape) {
    this.lines = []
    this.width = shape[0]
    this.height = shape[1]
    if (shape.length !== 2) throw new Error(
      'Only 2D ndarrays are supported, sorry!'
    )

    for (var i = 0; i < this.height; i += 1) {
      this.lines[i] = ''
    }
  },
  body: function(value, fn, idx, shape) {
    this.lines[idx[1]] += fn(value)
  },
  post: function() {
    return this.lines
  }
})
