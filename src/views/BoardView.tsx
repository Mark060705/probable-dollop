import type { Mark } from "../types/game";
import { Cell } from "./CellView";

interface BoardProps {
  board: Mark[];
  onCellClick: (index: number) => void;
}

export function Board({ board, onCellClick }: BoardProps) {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
}