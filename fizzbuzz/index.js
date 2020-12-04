/**
 * Print "Fizz" if the number is divisible by 3.
 * Print "Buzz" if the number is divisible by 5.
 * Print "FizzBuzz" if the number is divisible by 3 and 5.
 *
 * Do not use conditional statements or expressions
 */
// const map = {
//   1000: "Fizz",
//   2000: "Buzz",
// };

// function emptify(n = "") {
//   return n;
// }

// function fizzBuzz(n) {
//   return emptify(map[(n % 3) + 1000]) + emptify(map[(n % 5) + 2000]);
// }

// for (let i = 0; i < 20; i++) {
//   console.log(i, fizzBuzz(i));
// }

/**
 * Print "Fizz" if the number is divisible by 3.
 * Print "Buzz" if the number is divisible by 5.
 * Print "FizzBuzz" if the number is divisible by 3 and 5.
 *
 * Do not use conditional statements or expressions
 */
const map = {
  1000: "Fizz",
  2000: "Buzz",
};

function e2(n, out = n) {
  return out;
}

function e1(offset, divisor, n, out = map[(n % divisor) + offset]) {
  console.log();
  console.log("n     ", n);
  console.log("offset", offset);
  console.log("diviso", divisor);
  // console.log("m     ", m);
  console.log("out   ", out);
  console.log("final ", e2(n, out));
  // console.log(typeof out);
  return e2(n, out);
}

function fizzBuzz(n) {
  return e1(1000, 3, n) + e1(2000, 5, n);
  // return e1(n, map[(n % 3) + 1000])
  //     + e1(n, map[(n % 5) + 2000]);
}

for (let i = 0; i < 20; i++) {
  // console.log(fizzBuzz(i));
  fizzBuzz(i);
  // document.write(`${i} ${fizzBuzz(i)}<br>`);
}
