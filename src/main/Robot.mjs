export class Robot {
    constructor(name, hitpoints, firepower, accuracy) {
        this.name = name;
        this.hitpoints = hitpoints;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(robot) {        
        if(this.hitpoints > 0) {
            console.log("[" + this.name + "] is attacking [" + robot.name  + "] for [" + this.firepower + "] amount of damage.")
            robot.decreaseHull(this.firepower);
        }
    }

    decreaseHull(decreaseAmount) {
        this.hitpoints -= decreaseAmount;
        console.log("[" + this.name + "] was attacked. New Hitpoint amount is [" + this.hitpoints + "]");
    }
}