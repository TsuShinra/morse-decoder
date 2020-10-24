"use strict";

var MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  var arr = [];
  var exp = expr;

  for (var i = 0; i < exp.length; i += 10) {
    var letter = exp.substring(i, i + 10);
    arr.push(letter);
  }

  for (var _i = 0; _i < arr.length; _i++) {
    if (arr[_i][0] == '0') {
      var from = arr[_i].search('1');

      var cut = arr[_i].substring(from);

      arr[_i] = cut;
    }
  }

  for (var _i2 = 0; _i2 < arr.length; _i2++) {
    var dot = /10/gi;
    var lin = /11/gi;
    arr[_i2] = arr[_i2].replace(dot, '.');
    arr[_i2] = arr[_i2].replace(lin, '-');
  }

  var result = '';

  for (var _i3 = 0; _i3 < arr.length; _i3++) {
    if (arr[_i3][0] === '*') {
      result = result + ' ';
      continue;
    }

    result = result + MORSE_TABLE[arr[_i3]];
  }

  console.log(result);
  return result;
}

module.exports = {
  decode: decode
};