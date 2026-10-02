import type { Mark } from "../types/game";

interface CellProps {
  value: Mark;
  onClick: () => void;
}

export function Cell({ value, onClick }: CellProps) {
  return (
    <button
      className="cell"
      onClick={onClick}
      disabled={value !== null}
      aria-label={value ? `Cell containing ${value}` : "Empty cell"}
    >
      {value}
    </button>
  );
}