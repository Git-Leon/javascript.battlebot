import { RobotFactory } from './RobotFactory.mjs';
export class RobotEnvironment {
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
        this.enemies.forEach(enemy => {
            this.hero.attack(enemy);
            enemy.attack(this.hero);
        });
    }

    isHeroDead() {
        return this.hero.hitpoints <= 0;
    }
    
    isEnemiesDead() {
        let isEnemiesDead = true;
        this.enemies.forEach(enemy => {
            if(enemy.hitpoints > 0) {
                isEnemiesDead = false;
            }
        });
        return  isEnemiesDead;
    }

    isBattleOver() {
        return this.isHeroDead() || this.isEnemiesDead();
    }
}