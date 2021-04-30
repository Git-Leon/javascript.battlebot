import { ShipFactory } from './ShipFactory.mjs';
export class ShipEnvironment {
    constructor() {
        let factory = new ShipFactory();
        this.myShip = factory.createSchwarzeneggar();
        let alien1 = factory.createAlien("Bob");
        let alien2 = factory.createAlien("Alice");
        let alien3 = factory.createAlien("Kayla");
        let alien4 = factory.createAlien("Trudy");
        let alien5 = factory.createAlien("Chris");
        let alien6 = factory.createAlien("Asia");
        this.alienShipArray = [alien1,alien2,alien3,alien4,alien5,alien6];
    }

    battle() {
        this.alienShipArray.forEach(alienShip => {
            this.myShip.attack(alienShip);
            alienShip.attack(this.myShip);
        });
    }

    isBattleOver() {
        let isOver = true;
        this.alienShipArray.forEach(alienShip => {
            if(alienShip.hull > 0) {
                isOver = false;
            }
        });
        return isOver;
    }
}