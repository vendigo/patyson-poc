import Phaser from 'phaser'

import ArrowsScene from './ArrowsScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 400,
	height: 700,
	backgroundColor: "F1FAEE",
	scene: [ArrowsScene],
}

export default new Phaser.Game(config)
