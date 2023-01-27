//data class GameEvent(val gameName: String, val userId: Long, val eventType: EventType, val eventData: String? = null)
//data class GameAward(val experience: Int = 0, val gold: Int = 0)
//data class GameEventResponse(val status: GameStatus, val award: GameAward? = null, val retryTimeout: String? = null)


export enum EventType {
  COMPLETE, ATTEMPT
}

export enum  GameStatus {
  FIRST_COMPLETION = "FIRST_COMPLETION",
  NEXT_COMPLETION = "NEXT_COMPLETION",
  WRONG_ANSWER = "WRONG_ANSWER",
  ERROR = "ERROR"
}

export class GameEvent {
  gameName: string;
  eventType: EventType;
  eventData?: string;

  constructor(gameName: string, eventType: EventType) {
    this.gameName = gameName;
    this.eventType = eventType;
  }
}

export class Reward {
  experience?: number;
  gold?: number;
}

export class GameEventResponse {
  status?: GameStatus;
  reward?: Reward;
}