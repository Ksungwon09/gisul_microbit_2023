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
    basic.pause(100)
    radio.sendNumber(9)
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
    basic.pause(100)
    radio.sendNumber(9)
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
    basic.pause(100)
    radio.sendNumber(9)
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
    basic.pause(100)
    radio.sendNumber(9)
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
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
            basic.pause(1000)
        }
        // 고좌7
        if (input.buttonIsPressed(Button.B)) {
            radio.sendNumber(6)
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
            basic.pause(1000)
        }
        // 종지3
        radio.sendNumber(2)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        radio.sendNumber(4354354)
    }
})
