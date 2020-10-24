const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let exp = expr;
    for (let i = 0; i < exp.length; i+= 10) {
        let letter = exp.substring(i, (i + 10));
        arr.push(letter);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == '0') {
            let from = arr[i].search('1');
            let cut = arr[i].substring(from);
            arr[i] = cut;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let dot = /10/gi;
        let lin = /11/gi;
        arr[i] = arr[i].replace(dot, '.');
        arr[i] = arr[i].replace(lin, '-');
           
    }
    
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === '*') {
            result = result + ' ';
            continue;
        }
        result = result + MORSE_TABLE[arr[i]];
    }
    console.log(result);
    return result;
}

module.exports = {
    decode
}