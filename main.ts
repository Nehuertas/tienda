let Num_Personas = 0
basic.forever(function () {
    basic.showNumber(Num_Personas)
    if (input.buttonIsPressed(Button.AB)) {
        Num_Personas = 0
    } else if (input.buttonIsPressed(Button.B)) {
        Num_Personas += 1
    } else if (input.buttonIsPressed(Button.A)) {
        if (Num_Personas > 0) {
            Num_Personas += -1
        } else {
            basic.showIcon(IconNames.Confused)
        }
    } else {
    	
    }
})
