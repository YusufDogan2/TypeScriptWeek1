function greetEveryone(greeting: string, participants: string[]): string {
    let message = "";
    participants.forEach((participant) => {
        message += greeting + " " + participant + "\n";
    });
    return message
}

let welcomeText: string = "Willkommen im TypeScript-Kurs";

let participants: string[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];

console.log(greetEveryone(welcomeText, participants));

export { };