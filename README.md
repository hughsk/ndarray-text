# ndarray-text #

Takes a 2D ndarray, and converts it to a legible string.

## Installation ##

``` bash
npm install ndarray-text
```

## Usage ##

### `require('ndarray-text')(ndarray, mapper)` ###

Takes a two-dimensional ndarray, and a "mapper" function. This function takes
the value of a cell as its first argument, and should return the character(s)
for that cell.

For example:

``` javascript
var text = require('ndarray-text')
var array = require('cave-automata-2d')(require('zeros')([20, 20]))(10)

var converted = text(array, function(cell) {
  return cell ? '@' : ' '
})

console.log(converted)
```

Should leave you with:

``` javascript
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@  @@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@@@
@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@           @@@@@@
@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@          @@@@@@
@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@        @@@@@@@
@@@@@@@@@@@@       @@@@  @@@@@@@@@@@@      @@@@@@@
@@@@@@@@@@@         @@   @@@@@@@@@@@@@     @@@@@@@
@@@@@@@@@@               @@@@@@@@@@@@@     @@@@@@@
@@@@@                     @@@@@@@@@@@      @@@@@@@
@@@@                                       @@@@@@@
@@@@                                       @@@@@@@
@@@@             @@@@                      @@@@@@@
@@@@            @@@@@@@                    @@@@@@@
@@@@           @@@@@@@@@                  @@@@@@@@
@@@     @@     @@@@@@@@@@                @@@@@@@@@
@@     @@@@     @@@@@@@@@               @@@@@@@@@@
@@     @@@@      @@@@@@@    @@         @@@@@@@@@@@
@@      @@@        @@@@    @@@@       @@@@@@@@@@@@
@@@     @@@               @@@@@       @@@@@@@@@@@@
@@@     @@@     @@        @@@@@@       @@@@@@@@@@@
@@@@    @@@@   @@@@       @@@@@@@@@@      @@@@@@@@
@@@@@  @@@@@   @@@@@@@    @@@@@@@@@@@      @@@@@@@
@@@@@@@@@@@    @@@@@@@@  @@@@@@@@@@@@@     @@@@@@@
@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@
@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
```