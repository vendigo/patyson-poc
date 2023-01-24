import Phaser from "phaser"

const BUTTON_SHIFT = 5

export class Button extends Phaser.GameObjects.Container {

  constructor(scene: Phaser.Scene, x: number, y: number, size: number, imageName: string, onClick: () => void) {
    super(scene, x, y)
    const button = scene.add.sprite(x, y, imageName)
    button.displayWidth = size
    button.displayHeight = size

    button.setInteractive()

    button.on('pointerdown', () => {
      button.y = button.y + BUTTON_SHIFT
      onClick()
    })

    button.on('pointerout', () => {
      button.y = y
    })

    button.on('pointerup', () => {
      button.y = y
    })
  }
}