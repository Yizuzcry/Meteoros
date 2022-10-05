input.onButtonPressed(Button.A, function () {
    ob1.move(-1)
})
input.onButtonPressed(Button.B, function () {
    ob1.move(1)
})
function mover () {
    basic.pause(100)
    barrera1.move(1)
    barrera1.ifOnEdgeBounce()
    barrera.move(1)
    barrera.ifOnEdgeBounce()
    basic.pause(300)
    ob2.move(1)
    if (b2.isTouching(ob1) || ob1.isTouching(b3)) {
        basic.showIcon(IconNames.No)
        basic.showString(" Tocaste la barrera")
    }
    if (ob2.isTouching(ob1)) {
        basic.showIcon(IconNames.Sad)
        basic.showString(" Game Over")
    }
    if (ob2.isTouchingEdge()) {
        ob2.delete()
        if (cont == 3) {
            cont = 2
        } else {
            if (cont == 2) {
                cont = 1
            } else {
                if (cont == 1) {
                    cont = 3
                } else {
                	
                }
            }
        }
        ob2 = game.createSprite(cont, 0)
        ob2.turn(Direction.Right, 90)
        basic.pause(300)
        ob2.move(1)
    }
}
let cont = 0
let b3: game.LedSprite = null
let b2: game.LedSprite = null
let barrera1: game.LedSprite = null
let barrera: game.LedSprite = null
let ob1: game.LedSprite = null
let ob2: game.LedSprite = null
ob2 = game.createSprite(2, 0)
ob2.turn(Direction.Right, 90)
ob1 = game.createSprite(2, 4)
barrera = game.createSprite(0, 0)
barrera1 = game.createSprite(4, 0)
b2 = game.createSprite(0, 4)
b3 = game.createSprite(4, 4)
barrera.turn(Direction.Right, 90)
barrera1.turn(Direction.Right, 90)
cont = 2
basic.forever(function () {
    mover()
})
