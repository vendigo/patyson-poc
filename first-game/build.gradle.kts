import com.soywiz.korge.gradle.*

plugins {
	alias(libs.plugins.korge)
}

korge {
	id = "com.github.vendigo.firstgame"

	targetJvm()
	targetJs()
}
