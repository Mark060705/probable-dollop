import type { GameState } from "../controllers/GameController";

interface GameStatusProps {
  gameState: GameState;
}

export function GameStatus({ gameState }: GameStatusProps) {
  if (gameState.status === "won") {
    return <h2>Winner: {gameState.winner}!</h2>;
  }

  if (gameState.status === "draw") {
    return <h2>It's a draw!</h2>;
  }

  return <h2>Current player: {gameState.currentPlayer}</h2>;
}