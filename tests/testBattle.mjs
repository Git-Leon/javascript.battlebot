import { ShipEnvironment } from '../ShipEnvironment.mjs';
import { getUserInput } from '../utils.mjs';

export function testBattle() {
    // given
    let userInput = "Continue";
    let env = new ShipEnvironment();
    while(!env.isBattleOver() && "Continue" == userInput) {
        // when
        env.battle();
        userInput = getUserInput("Continue? Retreat?");
    }
    console.log("Game over. User's final input was " + userInput)
}


testBattle();