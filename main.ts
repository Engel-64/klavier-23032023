input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    music.playTone(349, music.beat(BeatFraction.Quarter))
    basic.setLedColor(0xffff00)
    basic.showString("F")
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.setLedColor(0xff0000)
    basic.showString("C")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    music.playTone(587, music.beat(BeatFraction.Half))
    basic.showString("D")
    basic.setLedColor(0x00ff00)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    music.playTone(880, music.beat(BeatFraction.Whole))
    basic.showString("A")
    basic.setLedColor(0x0000ff)
})
