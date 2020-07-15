// prettier-ignore
const board = {
    a: { 1: [0,0], 2: [0,1], 3: [0,2], 4: [0,3], 5: [0,4], 6: [0,5], 7: [0,6], 8: [0,7], },
    b: { 1: [1,0], 2: [1,1], 3: [1,2], 4: [1,3], 5: [1,4], 6: [1,5], 7: [1,6], 8: [1,7], },
    c: { 1: [2,0], 2: [2,1], 3: [2,2], 4: [2,3], 5: [2,4], 6: [2,5], 7: [2,6], 8: [2,7], },
    d: { 1: [3,0], 2: [3,1], 3: [3,2], 4: [3,3], 5: [3,4], 6: [3,5], 7: [3,6], 8: [3,7], },
    e: { 1: [4,0], 2: [4,1], 3: [4,2], 4: [4,3], 5: [4,4], 6: [4,5], 7: [4,6], 8: [4,7], },
    f: { 1: [5,0], 2: [5,1], 3: [5,2], 4: [5,3], 5: [5,4], 6: [5,5], 7: [5,6], 8: [5,7], },
    g: { 1: [6,0], 2: [6,1], 3: [6,2], 4: [6,3], 5: [6,4], 6: [6,5], 7: [6,6], 8: [6,7], },
    h: { 1: [7,0], 2: [7,1], 3: [7,2], 4: [7,3], 5: [7,4], 6: [7,5], 7: [7,6], 8: [7,7], },
}

const visitedCoords = [
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
];

function validXY(xy) {
  return xy[0] >= 0 && xy[1] >= 0 && xy[0] < 8 && xy[1] < 8;
}

function validMoves(xy) {
  // prettier-ignore
  const moves = [
    [ 2,  1],
    [ 2, -1],
    [-2,  1],
    [-2, -1],
    [ 1,  2],
    [-1,  2],
    [ 1, -2],
    [-1, -2],
  ];
  const dests = moves
    .map((transform) => [xy[0] + transform[0], xy[1] + transform[1]])
    .filter(validXY);
  return dests;
}

function A1ToXY(pos) {
  return board[pos[0]][pos[1]];
}

function XYToA1(xy) {
  return "abcdefgh"[xy[0]] + (xy[1] + 1);
}

function visited(xy, set = false) {
  if (set) {
    visitedCoords[xy[0]][xy[1]] = true;
  }
  return visitedCoords[xy[0]][xy[1]];
}

function walk(positions, finish, count = 0) {
  for (let i in positions) {
    let pos = positions[i];
    if (pos[0] === finish[0] && pos[1] === finish[1]) {
      return count;
    }
  }

  const newPositions = positions
    .map(validMoves)
    .flat()
    .filter((xy) => !visited(xy)); // remove visited

  // mark visited
  newPositions.forEach((xy) => visited(xy, true));

  return walk(newPositions, finish, count + 1);
}

function resetVisitedCoords() {
  for (let x in visitedCoords) {
    for (let y in visitedCoords[x]) {
      visitedCoords[x][y] = false;
    }
  }
}

function knight(start, finish) {
  resetVisitedCoords();
  return walk([A1ToXY(start)], A1ToXY(finish));
}

let arr = [
  ["a1", "c1", 2],
  ["a1", "f1", 3],
  ["a1", "f3", 3],
  ["a1", "f4", 4],
  ["a1", "f7", 5],
];

for (let i of arr)
  console.log(
    `${i[0]} => ${i[1]}? expected ${i[2]} found ${(knight(i[0], i[1]), i[2])}`
  );
