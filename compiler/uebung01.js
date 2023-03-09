"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetEveryone(greeting, participants) {
    let message = "";
    participants.forEach((participant) => {
        message += greeting + " " + participant + "\n";
    });
    return message;
}
let welcomeText = "Willkommen im TypeScript-Kurs";
let participants = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];
console.log(greetEveryone(welcomeText, participants));
//# sourceMappingURL=uebung01.js.map