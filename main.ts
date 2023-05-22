// 우회전4
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
// 좌회전5
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
// 후진2
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
// 전진1
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
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
    if (input.isGesture(Gesture.ScreenUp)) {
        // 고우6
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
        // 고좌7
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
        // 종지3
        radio.sendNumber(2)
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # # #
            . . . . #
            # . # # #
            `)
    }
})
