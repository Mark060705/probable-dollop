interface RestartButtonProps {
  onRestart: () => void;
}

export function RestartButton({ onRestart }: RestartButtonProps) {
  return (
    <button className="restart-button" onClick={onRestart}>
      Restart Game
    </button>
  );
}