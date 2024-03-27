const CHARACTERS = Object.freeze({
    KNIGHT: "KNIGHT",
    WIZARD: "WIZARD",
    RANGER: "RANGER",
    DEFAULT: "DEFAULT"

});

const KNIGHT = Object.freeze({
    LIFE: 90,
    ATTACK: 10,
    DEFENSE: 10
})

const WIZARD = Object.freeze({
    LIFE: 70,
    ATTACK: 15,
    DEFENSE: 5
})

const RANGER = Object.freeze({
    LIFE: 70,
    ATTACK: 12,
    DEFENSE: 8
})

const Default_Character = {
    name: "",
    maxLife: 1,
    life: 1,
    job: CHARACTERS.DEFAULT,
    attack: 0,
    defense: 0,
}

const create_Knight = function (name) {
    return {
        ...Default_Character,
        name,
        maxLife: KNIGHT.LIFE,
        life: KNIGHT.LIFE,
        job: CHARACTERS.KNIGHT,
        attack: KNIGHT.ATTACK,
        defense: KNIGHT.DEFENSE
    }
}

const create_Wizard = function (name) {
    return {
        ...Default_Character,
        name,
        maxLife: WIZARD.LIFE,
        life: WIZARD.LIFE,
        job: CHARACTERS.WIZARD,
        attack: WIZARD.ATTACK,
        defense: WIZARD.DEFENSE
    }
}

const create_Ranger = function (name) {
    return {
        ...Default_Character,
        name,
        maxLife: RANGER.LIFE,
        life: RANGER.LIFE,
        job: CHARACTERS.RANGER,
        attack: RANGER.ATTACK,
        defense: RANGER.DEFENSE
    }
}

const stage = {

    char01: null,
    char02: null,
    char01_Element: null,
    char02_Element: null,

    start(char01, char02, char01_Element, char02_Element) {
        this.char01 = char01;
        this.char02 = char02;
        this.char01_Element = char01_Element;
        this.char02_Element = char02_Element;

        this.char01_Element.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.char01, this.char02));
        this.char02_Element.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.char02, this.char01));

        this.update();
    },

    update() {

        // Character 01

        let char01_Name_Element = this.char01_Element.querySelector(".name");
        let char01_Name_Text = this.char01.name + ": " + this.char01.life + "HP";

        char01_Name_Element.innerHTML = char01_Name_Text;

        let char01_Life_Element = this.char01_Element.querySelector(".life");
        let char01_Life_Value = (this.char01.life / this.char01.maxLife) * 100;

        char01_Life_Element.style.width = char01_Life_Value + "%";


        // Character 02

        let char02_Name_Element = this.char02_Element.querySelector(".name");
        let char02_Name_text = this.char02.name + ": " + this.char02.life + "HP";

        char02_Name_Element.innerHTML = char02_Name_text;

        let char02_Life_Element = this.char02_Element.querySelector(".life");
        let char02_Life_Value = (this.char02.life / this.char02.maxLife) * 100;

        char02_Life_Element.style.width = char02_Life_Value + "%";
    },

    doAttack(aggressor, assault) {

        let dice01 = 21;
        let dice02 = 13

        let aggressor_Dice = Math.floor(Math.random() * dice01);
        let assault_Dice = Math.floor(Math.random() * dice02);


        let real_Attack = aggressor.attack + aggressor_Dice;
        let real_Defense = assault.defense + assault_Dice;

        let damage = real_Attack - real_Defense;
        let contra_Attack = assault.attack;


        validation = aggressor.life <= 0 || assault.life <= 0;
        if (validation) {

            if (aggressor.life == 0) {
                log.addMenssage("Morto não ataca kkkkk");
            }

            if (assault.life == 0) {
                log.addMenssage("atacando cachorro morto kkkkk");
            }


        }
        else {

            let title = aggressor.name + " Dice: " + aggressor_Dice + " | " + assault.name + " Dice: " + assault_Dice;

            if (damage > 0) {

                if (damage >= assault.life) {
                    assault.life = 0;
                }
                else {
                    assault.life = assault.life - damage;
                }


                log.addMenssage(aggressor.name + " atacou " + assault.name + ": " + damage + " ATK - " + title);
            }
            else {

                if (contra_Attack >= aggressor.life) {
                    aggressor.life = 0;
                }
                else {
                    aggressor.life = aggressor.life - contra_Attack;
                }

                log.addMenssage(assault.name + " contra atacou " + aggressor.name + ": " + contra_Attack + " ATK - " + title);
            }
        }



        this.update();
    }
}

const log = {

    list: [],
    addMenssage(mensage) {
        this.list.push(mensage);
        this.render();
    },
    render() {
        let list_Element = document.querySelector(".log ul");
        list_Element.innerHTML = "";

        for (let i = 0; i < this.list.length; i++) {

            let newItem = "<li>" + this.list[i] + "</li>";
            list_Element.innerHTML = list_Element.innerHTML + newItem;
        }
    }
}