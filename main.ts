input.onButtonPressed(Button.A, function () {
    huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
    huskylens.writeOSD("Carlo", 150, 120)
})
DFRobotMaqueenPlus.I2CInit()
