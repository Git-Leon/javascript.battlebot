import { RobotBattleGround } from "./RobotBattleGround.mjs";

export class RobotWarGround {
    constructor() {
        this.env = new RobotBattleGround();
    }

    war() {
        console.log("A war has began.")
        while(!this.env.isBattleOver()) {
            this.env.battle();
        }
    }
}