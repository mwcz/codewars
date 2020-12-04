function loneliest(str) {
  const sums = [];
  let letter;
  let max = -1;
  let maxLetters = [];
  let pendingSum = 0;
  let c;
  let lastSum;
  for (c of str) {
    lastSum = sums[sums.length - 1];
    if (c === " ") {
      if (letter) {
        pendingSum += 1;
        lastSum[1] += 1;
        console.log(`space, ${letter} + 1 -> ${pendingSum}`);
      }
    } else {
      // update maximums for the letter whose run is being concluded
      if (letter) { 
        console.log(`${letter} concluded with ${lastSum[1]}`);
        if (lastSum[1] === max) {
          maxLetters.push(letter);
        } else if (lastSum[1] > max) {
          max = lastSum[1];
          maxLetters = [letter];
        }
      }
      
      // letter found, update `letter`, add pendingSum to the new letter, and reset pendingSum
      console.log(`${letter} concluded with ${lastSum && lastSum[1]}, ${c} beginning with ${pendingSum} pending`);
      letter = c;
      sums.push([letter, pendingSum]);
      pendingSum = 0;
      console.log({maxLetters,sums})
    }
  }
  
  // handle final character
  if (c !== " ") {
    lastSum = sums[sums.length - 1];
    if (lastSum[1] === max) {
      maxLetters.push(letter);
    } else if (lastSum[1] > max) {
      max = lastSum[1];
      maxLetters = [letter];
    }
    lastSum = [letter, pendingSum]
    sums.push(lastSum);
    console.log({sums})
  }
  
  // we're at the end of the string, subtract any trailing spaces (represented by current value of pendingSum from the last letter's sum)
  lastSum[1] -= pendingSum;
  
  console.log({str,sums, maxLetters, max})
  
  return maxLetters;
}