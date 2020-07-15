function topThreeWords(text) {
  return text
    .toLowerCase()                                               // lowercase the string
    .replace(/[^a-z'\s]/g, '')                                   // remove chars other than alphas, apostrophe, and whitespace
    .split(/\s+/)                                                // split on chunks of whitespace
    .filter(word => /^[a-z']+$/.test(word) && !/^'$/.test(word)) // remove standalone apostrophes and 
    .sort()                                                      // sort so like words are adjacent
    .reduce((list, word, i, src) => {                            // reduce to [ { word: "foo", count: 3 }, ... ]
      const top = list[list.length-1];                           // get top item from the list
      if (top && word === top.word) {                            // if current word is the top word...
        top.count += 1;                                          // ... bump the count
      } else {                                                   // if current word isn't the top word...
        list.push({ word, count: 1 });                           // ... create a new { word, count: 1 }
      }                                                          //
      return list;                                               //
    }, [])                                                       //
    .sort((w1, w2) => w1.count < w2.count ? 1 : -1)              // sort by count
    .slice(0,3)                                                  // get top 3
    .map(w => w.word)                                            // map from { word } to word
}
