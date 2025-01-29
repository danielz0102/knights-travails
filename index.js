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
    const [currentPos, path] = queue.shift();

    if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
      return path;
    }

    for (const [dx, dy] of MOVES) {
      const newX = currentPos[0] + dx;
      const newY = currentPos[1] + dy;
      const newPos = [newX, newY];
      const key = newPos.toString();
      const isValid = newX >= 0 && newX < 8 && newY >= 0 && newY < 8;

      if (isValid && !visited.has(key)) {
        visited.add(key);
        queue.push([newPos, [...path, newPos]]);
      }
    }
  }

  return null;
}

const path = knightMoves([0, 0], [7, 7]);

console.log(`Made in ${path.length - 1} moves\nPath:`);
path.forEach((move) => console.log(move));
