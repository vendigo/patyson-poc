import Phaser from "phaser"
import Sprite = Phaser.GameObjects.Sprite

export enum SlotState {
    EMPTY, UP, DOWN
}

export class Slot extends Phaser.GameObjects.Container {

    arrow: Sprite
    slotState: SlotState

    constructor(scene: Phaser.Scene, x: number, y: number, initialState: SlotState,
                slotClicked: () => void) {
        super(scene, x, y)

        const circle = new Phaser.Geom.Circle(200, y, 40)
        const slot = scene.add.graphics({fillStyle: {color: 0xA8DADC}, lineStyle: {color: 0x457B9D, width: 4}})
            .setInteractive(circle, Phaser.Geom.Circle.Contains)
        slot.fillCircleShape(circle)
        slot.strokeCircleShape(circle)

        slot.on('pointerdown', () => {
            slotClicked()
        })

        this.arrow = scene.add.sprite(200, y, 'arrow')
        this.arrow.scale = 0.20
        this.slotState = initialState
        this.changeState(initialState)
    }

    changeState(state: SlotState) {
        this.slotState = state
        if (state == SlotState.EMPTY) {
            this.arrow.visible = false
            return
        }

        this.arrow.visible = true
        if (state == SlotState.DOWN) {
            this.arrow.setAngle(180)
            return
        }
        this.arrow.setAngle(0)
    }
}