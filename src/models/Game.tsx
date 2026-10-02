import type { GameStatus, Mark, Player } from "../types/game";
import { checkDraw, checkWinner } from "../utils/checkWinner";

export class Game {
  private board: Mark[] = Array(9).fill(null);
  private currentPlayer: Player = "X";
  private winner: Mark = null;
  private status: GameStatus = "playing";

  public makeMove(index: number) {
    // Don't allow moves after the game has ended
    if (this.status !== "playing") {
      return false;
    }

    // Don't allow invalid positions
    if (index < 0 || index >= this.board.length) {
      return false;
    }

    // Don't allow overwriting a cell
    if (this.board[index] !== null) {
      return false;
    }

    this.board[index] = this.currentPlayer;
  }

  public reset(): void {
    this.board = Array(9).fill(null);
    this.currentPlayer = "X";
    this.winner = null;
    this.status = "playing";
  }

  public getBoard(): Mark[] {
    return [...this.board];
  }

  public getCurrentPlayer(): Player {
    return this.currentPlayer;
  }

  public getWinner(): Mark {
    return this.winner;
  }

  public getStatus(): GameStatus {
    return this.status;
  }

}