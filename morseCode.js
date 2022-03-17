
let menuOption = prompt("Please select an option by entering the menu number:" + "/n" + "1. Encrypt to Morse Code" + "/n" + "2. Decrypt from Morse Code" + "/n" + "0.Exit");

if (menuOption === "1"){
    encodeWord();
} else if (menuOption === "2") {
    decodeWord();

} else {
    close();
}

//function to encode a word into morse code
const encodeWord = () => {
    //store the letters in an object
const mCode = {
    "A" : ".-",
    "B" : "-...",
    "C" : "-.-.",
    "D" : "-..",
    "E" : ".",
    "F" :"..-.",
    "G" :"--.",
    "H" :"....",
    "I" :"..",
    "J" :".---",
    "K" :"-.-",
    "L" :".-..",
    "M" :"--",
    "N" : "-.",
    "O" : "---",
    "P" : ".--.",
    "Q" : "--.-",
    "R" : ".-.",
    "S" : "...",
    "T" : "-",
    "U" : "..-",
    "V" : "...-",
    "W" : ".--",
    "X" : "-..-",
    "Y" : "-.--",
    "Z" : "--..",
    " " : "/",
};
    let word = prompt("Enter a word or phrase");
    word.toUpperCase().split("").map(letter => {
        return mCode[letter] ? mCode[letter] : letter;
    });

    return console.log(word.join(""));
}


//function to decode the morse code
const decodeWord = () => {
    const mCode2 = {
        '.-': 'A',
        '-…': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '….': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '…': 'S',
        '-': 'T',
        '..-': 'U',
        '…-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        ' / ' : ' '
    }

    let mWord = prompt("Enter morse code");
    mWord.toUpperCase().split("").map(letter => {
        return mCode2[letter] ? mCode2[letter] : letter;
    });

    return console.log(mWord.join(""));
}



