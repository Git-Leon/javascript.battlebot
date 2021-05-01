import { RobotFactory } from '../main/RobotFactory.mjs';

export function testAttack() {
    // given
    let factory = new RobotFactory();
    let hero = factory.createGuardian();
    let enemy1 = factory.createEnemy("Bob");
    let enemy2 = factory.createEnemy("Alice");
    let enemy3 = factory.createEnemy("Kayla");
    let enemy4 = factory.createEnemy("Trudy");
    let enemy5 = factory.createEnemy("Chris");
    let enemy6 = factory.createEnemy("Asia");
    let enemyArray = [enemy1,enemy2,enemy3,enemy4,enemy5,enemy6];
    
    // when
    enemyArray.forEach(enemy => {
        hero.attack(enemy);
        enemy.attack(hero);
    })

    // then
    console.log(hero);
    console.log(enemyArray);
}

testAttack();