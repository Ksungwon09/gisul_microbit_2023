input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("우회전")
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # # #
        . . . . #
        # . # # #
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("좌회전")
    basic.showLeds(`
        . . # . .
        . # # . .
        # . # # #
        . . # . .
        # . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("정지")
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        # . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("하뚜")
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # # #
        . . # . #
        # . # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("후진")
    basic.showLeds(`
        . . # # #
        . . . . #
        . . # # #
        . . . . #
        # . # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("전진")
    basic.showLeds(`
        . . # # #
        . . . . #
        . . # # #
        . . # . .
        # . # # #
        `)
})
radio.setGroup(122)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    . . . . .
    `)
basic.forever(function () {
	
})
