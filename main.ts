basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (TPBot.trackLine(TPBot.TrackingState.L_R_line)) {
        TPBot.stopCar()
        TPBot.headlightClose()
    } else {
        TPBot.headlightColor(0xffffff)
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 30)
    }
})
