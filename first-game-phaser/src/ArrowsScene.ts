import Phaser from 'phaser'
import {Slot, SlotState} from './Slot'
import {Button} from './Button'
import {EventType, GameEvent, GameEventResponse, GameStatus} from "./GameApiModel";
import {Modal} from "./Modal";

const GAME_NAME = 'arrows'
const PLAYER_ID = 1000000001

export default class ArrowsScene extends Phaser.Scene {

  private slots: Slot[]
  //@ts-ignore
  private winModal: Modal
  //@ts-ignore
  private restartButton: Button

  constructor() {
    super('arrows')
    this.slots = []
  }

  preload() {
    this.load.image('arrow', 'assets/arrow.png')
    this.load.image('restart', 'assets/restart.png')
  }

  create() {
    this.createSlots()
    this.restartButton = new Button(this, 30, 30, 50, 'restart', () => this.restart())
    this.winModal = new Modal(this)

    //@ts-ignore
    //TODO: Remove this button
    const winButton = new Button(this, 100, 30, 50, 'restart', () => this.reportWin())
  }

  createSlots() {
    let y = 80
    this.slots = []

    for (let i = 0; i < 7; i++, y += 90) {
      this.slots.push(new Slot(this, 200, y, this.getInitialSlotState(i), () => {
        this.makeMove(i)
      }))
    }
  }

  getInitialSlotState(i: number): SlotState {
    if (i < 3) {
      return SlotState.DOWN
    } else if (i == 3) {
      return SlotState.EMPTY
    }
    return SlotState.UP
  }

  makeMove(i: number) {
    const slot = this.slots[i];
    if (slot.slotState == SlotState.EMPTY) {
      return
    }

    if (slot.slotState == SlotState.DOWN) {
      if (i < 6 && this.slots[i + 1].slotState == SlotState.EMPTY) {
        this.move(SlotState.DOWN, i, i + 1)
        return
      }
      if (i < 5 && this.slots[i + 2].slotState == SlotState.EMPTY) {
        this.move(SlotState.DOWN, i, i + 2)
        return
      }
    }

    if (slot.slotState == SlotState.UP) {
      if (i > 0 && this.slots[i - 1].slotState == SlotState.EMPTY) {
        this.move(SlotState.UP, i, i - 1)
        return
      }
      if (i > 1 && this.slots[i - 2].slotState == SlotState.EMPTY) {
        this.move(SlotState.UP, i, i - 2)
        return
      }
    }
  }

  move(direction: SlotState, from: number, to: number) {
    this.slots[from].changeState(SlotState.EMPTY)
    this.slots[to].changeState(direction)
    if (this.isWin()) {
      this.reportWin()
    }
  }

  restart() {
    this.winModal.hide()
    for (let i = 0; i < 7; i++) {
      this.slots[i].changeState(this.getInitialSlotState(i))
    }
  }

  reportWin() {
    const gameEvent = new GameEvent(GAME_NAME, EventType.COMPLETE);

    fetch(`/api/user/${PLAYER_ID}/game`, {
      method: 'POST',
      body: JSON.stringify(gameEvent),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(response => response.json())
      .then((response: GameEventResponse) => {
        if (response.status == GameStatus.FIRST_COMPLETION || response.status == GameStatus.NEXT_COMPLETION) {
          this.winModal.show(response.reward)
        }
      });
  }

  isWin(): boolean {
    return this.slots.every((slot, pos) => this.isCorrectState(slot.slotState, pos))
  }

  isCorrectState(actualState: SlotState, pos: number): boolean {
    if (pos < 3) {
      return actualState == SlotState.UP
    } else if (pos == 3) {
      return actualState == SlotState.EMPTY
    }
    return actualState == SlotState.DOWN
  }
}
