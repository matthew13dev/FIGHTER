class Mage extends Character {
    
    constructor(name){

        let max_Life = 80;
        let attack = 15;
        let defense = 5;
        const job = CHARACTER.MAGE;
        super(name, max_Life, attack, defense, job);
    }
}