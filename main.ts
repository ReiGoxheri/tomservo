input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(150)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(30)
    basic.pause(100)
    servos.P1.setAngle(0)
    basic.pause(100)
})
basic.forever(function () {
    servos.P0.setAngle(150)
    basic.pause(100)
    servos.P0.setAngle(0)
    basic.pause(100)
})
