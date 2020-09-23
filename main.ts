input.onGesture(Gesture.Shake, function () {
    // A variable is a place where your program can store a value. We need a place to store the result of the roll, so I created a variable called roll.
    //  I have the program generate a random number between 1 and 6, and I assign that value to the roll variable
    roll = randint(1, 6)
    if (roll == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        if (roll == 2) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
        } else {
            if (roll == 3) {
                basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . #
                    `)
            } else {
                if (roll == 4) {
                    basic.showLeds(`
                        # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
                        `)
                } else {
                    if (roll == 5) {
                        basic.showLeds(`
                            # . . . #
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . #
                            `)
                    } else {
                        basic.showLeds(`
                            # . . . #
                            . . . . .
                            # . . . #
                            . . . . .
                            # . . . #
                            `)
                    }
                }
            }
        }
    }
})
// Code added here will run once when the program starts
let roll = 0
basic.showString("Shake to roll the dice")
