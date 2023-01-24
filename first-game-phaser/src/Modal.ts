import Phaser from "phaser"
import Graphics = Phaser.GameObjects.Graphics;
import Text = Phaser.GameObjects.Text;

const X = 50
const Y = 200
const TEXT_SHIFT = 10
const WIDTH = 300
const HEIGHT = 140
const CORNER_RADIUS = 5
const ALPHA = 0.8
const STROKE_COLOR = 0x457B9D

export class Modal extends Phaser.GameObjects.Container {

  private modal: Graphics
  private text: Text

  constructor(scene: Phaser.Scene, text: string) {
    super(scene, X, Y)

    this.modal = scene.add.graphics({fillStyle: {color: 0xA8DADC, alpha: ALPHA}, lineStyle: {color: STROKE_COLOR, width: 4, alpha: ALPHA}})
    this.modal.fillRoundedRect(X, Y, WIDTH, HEIGHT, CORNER_RADIUS)
    this.modal.strokeRoundedRect(X, Y, WIDTH, HEIGHT, CORNER_RADIUS)
    this.text = scene.add.text(X + TEXT_SHIFT, Y + TEXT_SHIFT, text, {
      fontSize: "3em",
      fontFamily: "Arial",
      color: "#1D3557"
    })
    this.hide()
  }

  hide() {
    this.modal.visible = false
    this.text.visible = false
  }

  show() {
    this.modal.visible = true
    this.text.visible = true
  }
}