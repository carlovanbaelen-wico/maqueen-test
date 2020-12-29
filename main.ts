input.onButtonPressed(Button.A, function () {
    huskylens.writeOSD("Carlo", 150, 120)
})
input.onButtonPressed(Button.B, function () {
    huskylens.clearOSD()
})
let Id = 0
radio.setGroup(2)
DFRobotMaqueenPlus.I2CInit()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    Id = huskylens.readBox_s(Content3.ID)
    if (Id == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
        radio.sendNumber(9)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        radio.sendNumber(11)
        basic.pause(1000)
    } else if (Id == 7) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        radio.sendNumber(15)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        radio.sendNumber(13)
        basic.pause(1000)
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        radio.sendNumber(20)
    }
})
