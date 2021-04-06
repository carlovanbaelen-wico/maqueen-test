input.onButtonPressed(Button.A, function () {
    huskylens.writeOSD("Carlo", 150, 120)
})
input.onButtonPressed(Button.B, function () {
    huskylens.clearOSD()
})
let Id = 0
DFRobotMaqueenPlus.I2CInit()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    Id = huskylens.readBox_s(Content3.ID)
    if (Id == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(1000)
    } else if (Id == 7) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(1000)
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
})
