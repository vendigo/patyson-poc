import Phaser from 'phaser'
import Sprite = Phaser.GameObjects.Sprite;


export default class ArrowsScene extends Phaser.Scene {
  constructor() {
    super('arrows')
  }

  preload() {
    this.load.image('arrow', 'assets/arrow.png')
  }

  create() {
    this.createSlots(i => {
      console.log(`Slot ${i} clicked`);
    });

    this.createArrows();

  }

  createArrows(): Sprite[] {
    let arrows = [];
    let y = 80;

    for (let i = 0; i < 6; i++, y+= 90) {
      let arrow = this.add.sprite(200, y, 'arrow');
      arrow.scale = 0.20;

      if (i == 2) {
        y+= 90;
      }

      if (i < 3) {
        arrow.setAngle(180)
      }
      arrows.push(arrow);
    }

    return arrows;
  }

  createSlots(slotClicked: (i: number) => void) {
    let y = 80;

    for (let i = 0; i < 7; i++, y += 90) {
      let circle = new Phaser.Geom.Circle(200, y, 40);
      let slot = this.add.graphics({fillStyle: {color: 0xA8DADC}, lineStyle: {color: 0x457B9D, width: 4}})
        .setInteractive(circle, Phaser.Geom.Circle.Contains);
      slot.fillCircleShape(circle);
      slot.strokeCircleShape(circle);

      slot.on('pointerdown', () => {
        slotClicked(i);
      });
    }
  }
}
