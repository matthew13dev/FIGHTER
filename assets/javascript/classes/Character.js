class Character {
    privatename;
    max_Life;
    life = 1;
    attack;
    defense;
    status = "none";
    job;
    

    //Constructor

    constructor(name, maxLIfe, attack, defense, job){
        this.name = name;
        this.max_Life = maxLIfe;
        this.attack = attack;
        this.defense = defense;
        this.life = this.max_Life;
        this.job = job;

        this.status = 
            "Name: " + this.name + "\n" + 
            "Job: " + this.job + "\n" + 
            "Life: " + this.life + "\n" + 
            "Attack: " + this.attack + "\n" + 
            "Defense: " + this.defense + "\n" ;
    }

    //Methods

    

    //Getters and Setters

    getStatus(){
        return this.status;
    }

    getName(){
        return this.name;
    }

    getMaxLife(){
        return this.max_Life;
    }

    setMaxLife(newMaxLife){
        this.max_Life = newMaxLife;
    }

    getLife(){
        return this.life;
    }

    setLife(newLife){
        if(this.getLife < 0 ){
            this.life = 0;
        }
        else {
            this.life = newLife;
        }
    }

    getAttack(){
        return this.attack;
    }

    setAttack(attack){
        this.attack = attack;
    }

    getDefense(){
        return this.defense;
    }

    setDefense(defense){
        this.defense = defense;
    }

}
















