input.onButtonPressed(Button.A, function () {
    s += 1
    dfplayermini.playFile(s, dfplayermini.isRepeat.No)
})
input.onButtonPressed(Button.B, function () {
    s += -1
    dfplayermini.playFile(s, dfplayermini.isRepeat.No)
})
let s = 0
s = 1
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.playFile(s, dfplayermini.isRepeat.No)
basic.forever(function () {
    basic.showNumber(s)
})
