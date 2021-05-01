import { Robot } from "../main/Robot.mjs";

export function testRobotConstructor() {
    // given
    let hitpoints = createRandomNumber(3,10);
    let firePower = createRandomNumber(2,4);
    let accuracy = createRandomNumber(.6,.8);

    // when 
    let newEnemy = new Robot(name, hitpoints, firePower, accuracy);

    // then
    console.log(newEnemy);
}
