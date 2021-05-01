import { RobotFactory } from './RobotFactory.mjs';
export class RobotBattleGround {
    constructor() {
        let factory = new RobotFactory();
        this.hero = factory.createGuardian();
        let enemy1 = factory.createEnemy("Alice");
        let enemy2 = factory.createEnemy("Bob");
        let enemy3 = factory.createEnemy("Christine");
        let enemy4 = factory.createEnemy("Douglas");
        let enemy5 = factory.createEnemy("Emily");
        let enemy6 = factory.createEnemy("Fred");
        this.enemies = [enemy1,enemy2,enemy3,enemy4,enemy5,enemy6];
    }

    battle() {
        console.log("A battle has began.")
        this.enemies.forEach(enemy => {
            this.hero.attack(enemy);
            enemy.attack(this.hero);
        });
    }

    isBattleOver() {
        this.enemies = this.enemies.filter(enemy => enemy.hitpoints > 0);
        let isEnemyDead = this.enemies.length == 0;
        let isHeroDead = this.hero.hitpoints <= 0;
        let isOver = isEnemyDead || isHeroDead;
        return isOver;
    }
}