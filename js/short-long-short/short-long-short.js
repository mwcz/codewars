// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
//
// Given 2 strings, a and b, return a string of the form short+long+short, with
// the shorter string on the outside and the longer string on the inside. The
// strings will not be the same length, but they may be empty ( length 0 ).

let l = 'length';

function solution(a, b) {
    // const x = [a,b].sort((s,t) => s[l] - t[l]);
    // x.push(x[0]);
    // return x.join('');
console.log((x = [a,b].sort((s,t) => s[l] - t[l])).push(x[0]))
    return ((x = [a,b].sort((s,t) => s[l] - t[l])).push(x[0]) && x.join(''));
}

module.exports = solution;
