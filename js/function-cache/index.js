function cache(func) {
  const argCache = {};
  return function cachedFunc(...args) {
    if (argCache.hasOwnProperty(args)) {
      return argCache[args];
    }
    const response = func(...args);
    argCache[args] = response;
    return response;
  }
}

const f1 = cache((a,b) => { console.log(`running ${a}+${b}`); return a+b });
console.log(f1(1,2));
console.log(f1(1,2));
console.log(f1(1,2));
console.log(f1(1,2));
console.log(f1(1,2));
console.log(f1(2,3));
