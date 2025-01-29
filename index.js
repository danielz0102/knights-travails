const MOVES = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

function knightMoves(start, end) {
  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [square, path] = queue.shift();

    if (square.toString() === end.toString()) {
      return path;
    }

    for (const [dx, dy] of MOVES) {
      const x = square[0] + dx;
      const y = square[1] + dy;
      const newSquare = [x, y];
      const isValid = x >= 0 && x < 8 && y >= 0 && y < 8;
      const key = newSquare.toString();

      if (!isValid || visited.has(key)) continue;

      queue.push([newSquare, [...path, newSquare]]);
      visited.add(key);
    }
  }

  return null;
}

const path = knightMoves([0, 0], [7, 7]);

console.log(`Made in ${path.length - 1} moves\nPath:`);
path.forEach((move) => console.log(move));
