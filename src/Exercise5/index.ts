// SLOT MACHINE

class slotMachine {
    public coinCount: number = 0;

    Play = () : void => {

        const wheel1: boolean = randomBoolean();
        const wheel2: boolean = randomBoolean();
        const wheel3: boolean = randomBoolean();

    
        if (wheel1 === wheel2 === wheel3)
        {
            console.log('Congratulations!!!. You won ' + this.coinCount + ' coins!!');
            this.coinCount = 0;
        }
        else
        {
            console.log('Good luck next time!!');
            this.coinCount++;
        }
    }
}

const randomBoolean = () : boolean => Math.random() < 0.5;

const machine1 = new slotMachine();

machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()
machine1.Play()