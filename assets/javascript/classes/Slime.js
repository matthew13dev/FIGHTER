class Slime extends Character {
    
    constructor(){

        let max_Life = 40;
        let attack = 10;
        let defense = 8
        const name = CHARACTER.SLIME;
        const job = CHARACTER.MONSTER;
        super(name, max_Life, attack, defense, job);
    }
}
