input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # # #
        . . . . #
        # . # # #
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . # # . .
        # . # # #
        . . # . .
        # . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        # . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(6)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # # #
        . . # . #
        # . # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # # #
        . . . . #
        . . # # #
        . . . . #
        # . # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
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
