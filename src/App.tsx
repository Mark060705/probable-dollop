import { useState } from "react";
import { Game } from "./models/Game";
import { GameController } from "./controllers/GameController";
import { Board } from "./views/BoardView";
import { GameStatus } from "./views/GameStatus";
import { RestartButton } from "./views/RestartButton";

const game = new Game();
const controller = new GameController(game);

export default function App() {
  const [, setVersion] = useState(0);

  const gameState = controller.getState();

  function handleCellClick(index: number) {
    const moveMade = controller.play(index);

    if (moveMade) {
      setVersion((version) => version + 1);
    }
  }

  function handleRestart() {
    controller.restart();
    setVersion((version) => version + 1);
  }

  return (
    <main className="game">
      <h1>Tic-Tac-Toe</h1>

      <GameStatus gameState={gameState} />

      <Board
        board={gameState.board}
        onCellClick={handleCellClick}
      />

      <RestartButton onRestart={handleRestart} />
    </main>
  );
}
