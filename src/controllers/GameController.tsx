import { Game } from "../models/Game";
import type { GameStatus, Mark, Player } from "../types/game";

export interface GameState {
  board: Mark[];
  currentPlayer: Player;
  winner: Mark;
  status: GameStatus;
}

export class GameController {
  private game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  public play(index: number) {
    return this.game.makeMove(index);
  }

  public restart(): void {
    this.game.reset();
  }

  public getState(): GameState {
    return {
      board: this.game.getBoard(),
      currentPlayer: this.game.getCurrentPlayer(),
      winner: this.game.getWinner(),
      status: this.game.getStatus(),
    };
  }
}