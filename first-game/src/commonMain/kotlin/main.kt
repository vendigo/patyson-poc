import com.soywiz.korge.*
import com.soywiz.korge.scene.*
import com.soywiz.korge.view.*
import com.soywiz.korim.color.*

suspend fun main() = Korge(width = 500, height = 900, bgcolor = Colors["#ffffff"]) {
    val sceneContainer = sceneContainer()

    sceneContainer.changeTo({ MainScene() })
}

class MainScene : Scene() {
    override suspend fun SContainer.sceneMain() {
        for (y in setOf(100, 220, 340, 460)) {
            circle(radius = 50.0, fill = Colors.ORANGE, stroke = Colors.ORANGERED, strokeThickness = 5.0).xy(200.0, y.toDouble())
        }
    }
}
