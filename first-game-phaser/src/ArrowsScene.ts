import Phaser from 'phaser'
import {Slot, SlotState} from "./Slot"

export default class ArrowsScene extends Phaser.Scene {

    private slots: Slot[]

    constructor() {
        super('arrows')
        this.slots = []
    }

    preload() {
        this.load.image('arrow', 'assets/arrow.png')
    }

    create() {
        this.createSlots()

        const restartButton = this.add.text(5, 5, 'Restart', {
            fontSize: "3em",
            color: "000000"
        }).setInteractive();
        restartButton.on('pointerdown', () => {
            this.restart()
        })
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
    }

    restart() {
        for (let i = 0; i < 7; i++) {
            this.slots[i].changeState(this.getInitialSlotState(i))
        }
    }
}
