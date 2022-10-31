input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index + 1)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber((index + 1) * 2)
    }
})
basic.forever(function () {
	
})
