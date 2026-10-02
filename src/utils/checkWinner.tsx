import type { Mark } from "../types/game";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(board: Mark[]): Mark {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (
      board[a] !== null &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a];
    }
  }

  return null;
}

export function checkDraw(board: Mark[]): boolean {
  return board.every((cell) => cell !== null);
}