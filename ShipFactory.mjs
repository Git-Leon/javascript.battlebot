import { createRandomNumber } from './utils.mjs';
import { Ship } from './Ship.mjs';

export class ShipFactory {
    createAlien(name) {
        let hull = createRandomNumber(3,6);
        let firePower = createRandomNumber(2,4);
        let accuracy = createRandomNumber(.6,.8);
        let newAlienShip = new Ship(name, hull, firePower, accuracy);
        return newAlienShip;
    }

    createSchwarzeneggar() {
        const name = "USS Schwarzeneggar";
        let hull = 20;
        let firePower = 5;
        let accuracy = .7;
        let myShip = new Ship(name, hull, firePower, accuracy);
        return myShip;
    }
}