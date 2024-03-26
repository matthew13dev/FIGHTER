const CHARACTER = Object.freeze({
    KNIGHT: "Knight",
    WIZARD: "Wizard",
    RANGER: "Ranger"
});


class Character {
    name;
    max_Life;
    life = 1;
    attack;
    defense;
    status = "none";
    job;


    //Constructor

    constructor(name, maxLIfe, attack, defense, job) {
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
            "Defense: " + this.defense + "\n";

    }


    //Getters and Setters

    getStatus() {
        return this.status;
    }

    getName() {
        return this.name;
    }

    getMaxLife() {
        return this.max_Life;
    }

    setMaxLife(newMaxLife) {
        this.max_Life = newMaxLife;
    }

    getLife() {
        return this.life;
    }

    setLife(newLife) {
        if (this.getLife < 0) {
            this.life = 0;
        }
        else {
            this.life = newLife;
        }
    }

    getAttack() {
        return this.attack;
    }

    setAttack(attack) {
        this.attack = attack;
    }

    getDefense() {
        return this.defense;
    }

    setDefense(defense) {
        this.defense = defense;
    }

    getJob() {
        return this.job;
    }

}

class Knight extends Character {

    constructor(name) {

        let max_Life = 100;
        let attack = 10;
        let defense = 8;
        const job = CHARACTER.KNIGHT;

        super(name, max_Life, attack, defense, job);

    }
}

class Wizard extends Character {

    constructor(name) {

        let max_Life = 80;
        let attack = 15;
        let defense = 5;
        const job = CHARACTER.WIZARD;
        super(name, max_Life, attack, defense, job);
    }
}

class Ranger extends Character {

    constructor(name) {

        let max_Life = 80;
        let attack = 15;
        let defense = 5;
        const job = CHARACTER.RANGER;
        super(name, max_Life, attack, defense, job);
    }
}



class Stage {

    player01_Element = document.getElementById("character01");
    player02_Element = document.getElementById("character02");

    player01 = new Knight("suco de fruta");
    player02 = new Wizard("meckLovem");L
    log = new Log();
    

    getPlayer01() {
        return this.player01;
    }

    getPlayer02() {
        return this.player02;
    }

    getElement01() {
        return this.player01_Element;
    }

    getElement02() {
        return this.player02_Element;
    }


    start() {
        this.update();
        this.control_Attack();
    }

    relife(){
        this.player01.setLife(this.player01.getMaxLife());
        this.player02.setLife(this.player01.getMaxLife());
        this.log.clear();
        this.update();
    }

    update() {

        // Character01

        let char01_Name_Element = this.player01_Element.querySelector(".name");
        char01_Name_Element.innerHTML = this.player01.getName() + " - HP: " + this.player01.getLife();

        let char01_Life_Element = document.querySelector(".life");

        let char01_Life_Percent = (this.player01.getLife() / this.player01.getMaxLife()) * 100;

        char01_Life_Element.style.width = char01_Life_Percent + "%";


        // Character02

        let name02 = this.player02_Element.querySelector(".name");
        name02.innerHTML = this.player02.getName() + " - HP: " + this.player02.getLife();;

        let life02 = this.player02_Element.querySelector('.life');

        let life_Percent02 = (this.player02.getLife() / this.player02.getMaxLife()) * 100;

        life02.style.width = life_Percent02 + "%";


    }


    control_Attack() {
        let char01 = this.player01;
        let char02 = this.player02;

        let element01 = this.player01_Element.querySelector(".attackButton");
        let element02 = this.player02_Element.querySelector(".attackButton");

        element01.addEventListener("click", () => this.doAttack(char01, char02));
        element02.addEventListener("click", () => this.doAttack(char02, char01));


    }

    doAttack(aggressor, assault) {

        let validation = aggressor.getLife() <= 0 || assault.getLife() <= 0;
        if (validation) {
            this.log.addMensage("atacando cachorro morto.");
            return this.relife();
        }

        const dice_face = 20 + 1
        const AGRESSOR_DICE = Math.floor(Math.random() * dice_face);
        const ASSAULT_DICE = Math.floor(Math.random() * dice_face);

        let final_Attack = (aggressor.getAttack() + AGRESSOR_DICE);
        let final_Defense = (assault.getDefense() + ASSAULT_DICE);
        let damage = final_Attack - final_Defense;
        let contraAttack = 0;

        validation = damage > 0;
        if (validation) {
            let assault_Final_Life = assault.getLife() - damage;
            assault.setLife(assault_Final_Life);

            this.log.addMensage(aggressor.getName() + " atacou " + assault.getName() + " - Damage: " + damage);
            
        }
        else {

            contraAttack = 5;
            aggressor.setLife(aggressor.getLife() - contraAttack);

            this.log.addMensage(assault.getName() + " se defendeu e atacou " + aggressor.getName() + " - Contra attack: " + contraAttack);
            
        }

        this.update();
    }

}

class Log {
    element_List = document.querySelector(".log ul");
    
    list = [];

    addMensage(newMensage) {
        this.list.push(newMensage);
        this.render();
    }

    render() {

        this.clear();

        for(let item of this.list){
            this.element_List.innerHTML += "<li>" + item + "</li>";
        }
        
    }
    clear(){
        this.element_List.innerHTML = "";
    }
}














