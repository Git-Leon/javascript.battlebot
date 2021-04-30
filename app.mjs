import { RobotEnvironment } from './src/main/RobotEnvironment.mjs';

function main() {
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

main();