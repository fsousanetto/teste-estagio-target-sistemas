// Inverter caracteres de uma string.

const inverterString = (str) => {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
};

const inverted = "Olá, mundo!";
const stringInverted = inverterString(inverted);
console.log(`String original: ${inverted}`);
console.log(`String invertida: ${stringInverted}`);
