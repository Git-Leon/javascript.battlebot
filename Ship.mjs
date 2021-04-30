export class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(ship) {        
        if(this.hull > 0) {
            console.log("[" + this.name + "] is attacking [" + ship.name  + "] for [" + this.firepower + "] amount of damage.")
            ship.decreaseHull(this.firepower);
        }
    }

    decreaseHull(decreaseAmount) {
        this.hull -= decreaseAmount;
        console.log("[" + this.name + "] was attacked. New Hull amount is [" + this.hull + "]");
    }
}