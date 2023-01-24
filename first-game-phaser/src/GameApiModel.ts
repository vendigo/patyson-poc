//data class GameEvent(val gameName: String, val userId: Long, val eventType: EventType, val eventData: String? = null)
//data class GameAward(val experience: Int = 0, val gold: Int = 0)
//data class GameEventResponse(val status: GameStatus, val award: GameAward? = null, val retryTimeout: String? = null)


export enum EventType {
  COMPLETE, ATTEMPT
}

export enum  GameStatus {
  COMPLETED = "COMPLETED",
  ATTEMPTED = "ATTEMPTED"
}

export class GameEvent {
  gameName: string;
  userId: number;
  eventType: EventType;
  eventData?: string;

  constructor(gameName: string, userId: number, eventType: EventType) {
    this.gameName = gameName;
    this.userId = userId;
    this.eventType = eventType;
  }
}

export class GameAward {
  experience?: number;
  gold?: number;
}

export class GameEventResponse {
  status?: GameStatus;
  award?: GameAward;
}