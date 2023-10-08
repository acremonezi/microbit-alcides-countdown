images.iconImage(IconNames.SmallDiamond).showImage(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index <= 3; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.showNumber(3 - index)
        }
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
        images.iconImage(IconNames.SmallDiamond).showImage(0)
        images.iconImage(IconNames.Diamond).showImage(0)
        images.iconImage(IconNames.SmallDiamond).showImage(0)
        images.iconImage(IconNames.Diamond).showImage(0)
        images.iconImage(IconNames.SmallDiamond).showImage(0)
    }
})
