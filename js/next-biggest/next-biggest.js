function test(n, expected) {
  const actual = nextBigger(n);
  if (actual == expected) {
    console.log(`✅ ${n} => ${actual}`);
  } else {
    console.log(`❌ ${n} => ${actual}, expected ${expected}`);
  }
}

// write array `a` onto array `b` starting at position `p`
function overlay(a, b, p) {
  for (let [i, n] of a.entries()) {
    b[p + i] = n;
  }
  return b;
}

// swap two digits in an integer, (0-indexed from least significant digit)
function swap(num, i1, i2) {
  const d1 = digit(num, i1);
  const d2 = digit(num, i2);
  return num - 10 ** i2 * d2 - 10 ** i1 * d1 + 10 ** i1 * d2 + 10 ** i2 * d1;
}

// swap two digits if the swap would put them in sorted order (min..max),
// otherwise leave them alone.
function sortSwap(num, i1, i2) {
  const d1 = digit(num, i1);
  const d2 = digit(num, i2);
  if (d2 < d1) {
    num = swap(num, i1, i2);
  }
  return num;
}

// count the digits in a 53-bit integer
function countDigits(n) {
  if (n < 10) return 1;
  if (n < 100) return 2;
  if (n < 1000) return 3;
  if (n < 10000) return 4;
  if (n < 100000) return 5;
  if (n < 1000000) return 6;
  if (n < 10000000) return 7;
  if (n < 100000000) return 8;
  if (n < 1000000000) return 9;
  if (n < 10000000000) return 10;
  if (n < 100000000000) return 11;
  if (n < 1000000000000) return 12;
  if (n < 10000000000000) return 13;
  if (n < 100000000000000) return 14;
  if (n < 1000000000000000) return 15;
  /*      9007199254740991 is 2^53-1 - add more ifs as needed
       and adjust this final return as well. */
  return 16;
}

// get the digit from num at position p (0-indexed from least significant digit)
function digit(num, p) {
  return Math.floor((num / 10 ** p) % 10);
}

// get the digits of integer num that are between positions [p1, p2) (p1 inclusive, p2 exclusive, 0-indexed from least significant digit, p1 < p2)
function digits(num, p1, p2) {
  return Math.floor((num / 10 ** p1) % 10 ** (p2 - p1));
}

// sort the digits of an integer n to create the smallest possible number with
// those digits.  in other words, put the smallest digit in the most
// significant position, the next smallest digit in the second most significant
// position, etc.  uses a very efficient 16-digit (to cover 53 bit numbers)
// network sort algorithm.
function sort9(n) {
  if (n < 10) return n;

  n = sortSwap(n, 15, 14);
  n = sortSwap(n, 13, 12);
  n = sortSwap(n, 15, 13);
  n = sortSwap(n, 14, 12);
  n = sortSwap(n, 14, 13);
  n = sortSwap(n, 11, 10);
  n = sortSwap(n, 9, 8);
  n = sortSwap(n, 11, 9);
  n = sortSwap(n, 10, 8);
  n = sortSwap(n, 10, 9);
  n = sortSwap(n, 15, 11);
  n = sortSwap(n, 14, 10);
  n = sortSwap(n, 14, 11);
  n = sortSwap(n, 13, 9);
  n = sortSwap(n, 12, 8);
  n = sortSwap(n, 12, 9);
  n = sortSwap(n, 13, 11);
  n = sortSwap(n, 12, 10);
  n = sortSwap(n, 12, 11);
  n = sortSwap(n, 7, 6);
  n = sortSwap(n, 5, 4);
  n = sortSwap(n, 7, 5);
  n = sortSwap(n, 6, 4);
  n = sortSwap(n, 6, 5);
  n = sortSwap(n, 3, 2);
  n = sortSwap(n, 1, 0);
  n = sortSwap(n, 3, 1);
  n = sortSwap(n, 2, 0);
  n = sortSwap(n, 2, 1);
  n = sortSwap(n, 7, 3);
  n = sortSwap(n, 6, 2);
  n = sortSwap(n, 6, 3);
  n = sortSwap(n, 5, 1);
  n = sortSwap(n, 4, 0);
  n = sortSwap(n, 4, 1);
  n = sortSwap(n, 5, 3);
  n = sortSwap(n, 4, 2);
  n = sortSwap(n, 4, 3);
  n = sortSwap(n, 15, 7);
  n = sortSwap(n, 14, 6);
  n = sortSwap(n, 14, 7);
  n = sortSwap(n, 13, 5);
  n = sortSwap(n, 12, 4);
  n = sortSwap(n, 12, 5);
  n = sortSwap(n, 13, 7);
  n = sortSwap(n, 12, 6);
  n = sortSwap(n, 12, 7);
  n = sortSwap(n, 11, 3);
  n = sortSwap(n, 10, 2);
  n = sortSwap(n, 10, 3);
  n = sortSwap(n, 9, 1);
  n = sortSwap(n, 8, 0);
  n = sortSwap(n, 8, 1);
  n = sortSwap(n, 9, 3);
  n = sortSwap(n, 8, 2);
  n = sortSwap(n, 8, 3);
  n = sortSwap(n, 11, 7);
  n = sortSwap(n, 10, 6);
  n = sortSwap(n, 10, 7);
  n = sortSwap(n, 9, 5);
  n = sortSwap(n, 8, 4);
  n = sortSwap(n, 8, 5);
  n = sortSwap(n, 9, 7);
  n = sortSwap(n, 8, 6);
  n = sortSwap(n, 8, 7);

  return n;
}

/**
 * Algorithm:
 *
 *  - move from right to left, one digit (d) at a time
 *  - for each digit (d), compare it to each digit that follows it (but start again from right and move to the left)
 *    - if any following digit (f) is found that is greater than (d)
 *      - swap digits (d) and (f)
 *      - sort all the digits that come after (f) (which is now in (d)'s original position)
 *      - stop all loops and return
 *  - done!
 */

function nextBigger(n) {
  let orig = n;
  let len = countDigits(n);

  for_each_digit: for (let i = 1; i < len; ++i) {
    let d = digit(n, i);

    for_each_trailing_digit:
    for (let j = 0; j < i; ++j) {
      let f = digit(n, j);

      if (d < f) {
        n = swap(n, i, j);
        let trailing = digits(n, 0, i);
        let sortedTrailing = sort9(trailing);
        n = n - trailing + sortedTrailing;
        break for_each_digit;
      }
    }
  }

  return n == orig ? -1 : n;
}

// console.log(`testing network sort`);
// console.log(sort9(134567890));
// console.log(sort9(54321));
// console.log(sort9(82616582));
// console.log(sort9(123456789));
// console.log(sort9(0));
// console.log(sort9(21));
// console.log(sort9(987654321));
// console.log(sort9(918273645));
// console.log(sort9(564738291));

// console.log(`testing digits`);
// console.log(digits(564738291, 3, 4));

// console.log(`testing nextBigger`);
// test(1111, -1);
// test(12, 21);
// test(513, 531);
// test(1234567890, 1234567908);
// test(1999999999999, 9199999999999);
