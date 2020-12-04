// function solve(arr){
//   let i = 0;

//   while(true) {
//     arr.sort( (a,b) => b-a );
//     if (arr[0] === 1 && arr[1] === 0) return i;
//     i += arr[1];
//     arr[0]-=i;
//     arr[1]-=i;
//   }
// }



function isDone(arr) {
    const sum = arr[0] + arr[1] + arr[2];
    const isEmpty = sum === 0;
    const loneStack = sum === Math.max(...arr);
    return isEmpty || loneStack;
}

// maybe try rebalancing the numbers?  ie so 6,2,4 becomes 4,4,4

function solve(arr){
    let s = 0;

    console.log('SOLVING FOR', arr)

    arr.sort( (a,b) => b-a );

    const c = arr[2];
    arr[2] = Math.max(0, c - arr[0] - arr[1]);
    const cchange = c - arr[2];
    arr[0] -= cchange;
    s = cchange;

    arr.sort( (a,b) => b-a );

    const halfc = Math.floor(arr[2] / 2);
    arr[0] -= halfc - arr[2] % 2;
    arr[1] -= halfc;
    s += arr[2];

    s += Math.min(arr[0], arr[1]);

    console.log('answer is', s)
    return s;
}

console.log(solve([1,1,1]), 1);
console.log(solve([1,2,1]), 2);
console.log(solve([4,1,1]), 2);
console.log(solve([8,2,8]), 9);
console.log(solve([8,1,4]), 5);
console.log(solve([7,4,10]), 10); 
console.log(solve([12,12,12]), 18); 
console.log(solve([1,23,2]), 3);
