import { ShipFactory } from '../ShipFactory.mjs';

export function testAttack() {
    // given
    let factory = new ShipFactory();
    let myShip = factory.createSchwarzeneggar();
    let alien1 = factory.createAlien("Bob");
    let alien2 = factory.createAlien("Alice");
    let alien3 = factory.createAlien("Kayla");
    let alien4 = factory.createAlien("Trudy");
    let alien5 = factory.createAlien("Chris");
    let alien6 = factory.createAlien("Asia");
    let alienShipArray = [alien1,alien2,alien3,alien4,alien5,alien6];

    
    // when
    alienShipArray.forEach(alienShip => {
        myShip.attack(alienShip);
        alienShip.attack(myShip);
    })
}

testAttack();