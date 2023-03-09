
// Task 1
function concatenate(str1: string, str2: string): string {
    return str1 + str2;
}

const string1 = "Bleib";
const string2 = "Geschmeidig";
const result = concatenate(string1, string2);
console.log(result);

// Task 2

function toNumber(str: string): number {
    const num = Number(str);
    return isNaN(num) ? NaN : num;
}

const str = "3131";
const num = toNumber(str);
console.log(num);

// Task 3

function repeatString(str: string, x: number): string {
    let result = "";
    for (let i = 0; i < x; i++) {
        result += str;
    }
    return result;
}

const myPup = "Test123";
const x = 4;
const ergebnis = repeatString(myPup, x);
console.log(ergebnis);

// Task 4

function istVokal(char: string): boolean {
    const vokale = ["a", "e", "i", "o", "u"];
    return vokale.includes(char.toLowerCase());
}
const char = "B";
const istCharVokal = istVokal(char);
console.log(istCharVokal);

// Task 5

function multiplyVowels(str: string, count: number): string {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (vowels.includes(char.toLowerCase())) {
            if (char === char.toLowerCase()) {
                result += char.repeat(count);
            } else {
                result += char;
            }
        } else {
            result += char;
        }
    }
    return result;
}

const testen = "Auto";
const count = 2;
const end = multiplyVowels(testen, count);
console.log(end);

// task 6

function dice(): number {
    const min = 1;
    const max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const put = dice();
console.log(put);

// task 7

function diceGame(player1: number, player2: number): string {
    const min = 1;
    const max = 6;

    const player1Roll = (Math.floor(Math.random() * (max - min + 1)) + min) + (Math.floor(Math.random() * (max - min + 1)) + min);
    const player2Roll = (Math.floor(Math.random() * (max - min + 1)) + min) + (Math.floor(Math.random() * (max - min + 1)) + min);

    const player1Diff = Math.abs(player1Roll - player1);
    const player2Diff = Math.abs(player2Roll - player2);

    if (player1Diff === player2Diff) {
        return "It's a tie!";
    } else if (player1Diff < player2Diff) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

const game = diceGame(5, 8);
console.log(game);



