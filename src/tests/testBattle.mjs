import { RobotBattleGround } from '../main/RobotBattleGround.mjs';

export function testBattle() {
    // given
    let env = new RobotBattleGround();
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