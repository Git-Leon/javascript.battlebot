import { RobotEnvironment } from '../main/RobotEnvironment.mjs';

export function testBattle() {
    // given
    let env = new RobotEnvironment();
    while(!env.isBattleOver()) {

        // when
        env.battle();
    }

    // then
    console.log("Game over.");
    console.log("Hero wins = " + env.isHeroDead())
    console.log("Enemies wins = " + env.isEnemiesDead())
}


testBattle();