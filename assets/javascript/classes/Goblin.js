class Goblin extends Character {

    constructor(){

        let max_Life = 60;
        let attack = 10;
        let defense = 8;
        const name = CHARACTER.GOBLIN;
        const job = CHARACTER.MONSTER;

        super(name, max_Life, attack,defense, job);
    }
}