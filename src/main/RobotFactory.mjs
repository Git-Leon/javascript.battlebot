import { createRandomNumber } from './utils.mjs';
import { Robot } from './Robot.mjs';

export class RobotFactory {
    createEnemy(name) {
        let hitpoints = createRandomNumber(3,15);
        let firePower = createRandomNumber(2,4);
        let accuracy = createRandomNumber(.6,.8);
        let newEnemy = new Robot(name, hitpoints, firePower, accuracy);
        return newEnemy;
    }

    createGuardian() {
        const name = "Guardian";
        let hitpoints = 20;
        let firePower = 5;
        let accuracy = .7;
        let myShip = new Robot(name, hitpoints, firePower, accuracy);
        return myShip;
    }
}