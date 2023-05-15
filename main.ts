input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . # # . .
        # . # # #
        . . # . .
        # . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # # #
        . . . . #
        # . # # #
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # # #
            . . # . #
            # . # # #
            `)
    }
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(5)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # # #
            . . # . #
            # . # # #
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(6)
        basic.showLeds(`
            . . # # #
            . . # . #
            . . . . #
            . . . . #
            # . . . #
            `)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # # #
        . . . . #
        . . # # #
        . . # . .
        # . # # #
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        # . # . .
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
