export type Mark = "X" | "O" | null;

export type Player = Exclude<Mark, null>;

export type GameStatus = "playing" | "won" | "draw";