input.onGesture(Gesture.Shake, function () {
    // A variable is a place where your program can store a value. We need a place to store the result of the roll, so I created a variable called roll.
    //  I have the program generate a random number between 1 and 6, and I assign that value to the roll variable
    roll = randint(1, 6)
    if (roll == 1) {
        basic.showString("Pour Acid On Your Head")
    } else {
        if (roll == 2) {
            basic.showString("Put Your Tongue On The Hot Stove")
        } else {
            if (roll == 3) {
                basic.showString("Pull Out Your Front Teeth")
            } else {
                if (roll == 4) {
                    basic.showString("Kill Your Best Friend")
                } else {
                    if (roll == 5) {
                        basic.showString("Deep Fry Your Fingers And Eat Them")
                    } else {
                        basic.showString("Cut Off Two Toes")
                    }
                }
            }
        }
    }
})
// Code added here will run once when the program starts
let roll = 0
basic.showString("I DARE you to play...")
