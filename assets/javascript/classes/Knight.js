class Knight extends Character {

    constructor(name){

        let max_Life = 100;
        let attack = 10;
        let defense = 8;
        const job = CHARACTER.KNIGHT;

        super(name, max_Life, attack, defense,job);
        
    }

}