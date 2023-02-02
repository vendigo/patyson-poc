export enum  GameStatus {
  FIRST_COMPLETION = "FIRST_COMPLETION",
  NEXT_COMPLETION = "NEXT_COMPLETION",
  ERROR = "ERROR"
}

export class Reward {
  experience?: number;
  gold?: number;
}

export class GameEventResponse {
  status?: GameStatus;
  reward?: Reward;
}