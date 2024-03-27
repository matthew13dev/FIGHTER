let player1 = "Matheus";
let player2 = "Lucas";

const char01 = create_Knight(player1);
const char02 = create_Wizard(player2);

const char01_Element = document.querySelector("#character01");
const char02_Element = document.querySelector("#character02");

stage.start(char01, char02, char01_Element, char02_Element);
