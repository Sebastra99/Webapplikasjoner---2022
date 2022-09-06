function findLongestWord(text) {
    const arrayOfWords = text.split(" ");
    let currentLongestWord = arrayOfWords[0];
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (currentLongestWord.length < arrayOfWords[i].length) {
            currentLongestWord = arrayOfWords[i];
        }
    }
    return currentLongestWord;
}

let testText = "Some random words which the incredible fuction down below will figure out the longest word in";
console.log(findLongestWord(testText));