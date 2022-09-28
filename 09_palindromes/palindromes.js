const palindromes = function (word) {
    const punctuation = '!,." "'; // regex
    let rawWord = "";

    // Loop to change all the words to lowercase

    for (let i = 0; i < word.length; i++){
        if(word[i].toUpperCase()) rawWord += word[i].toLowerCase();
        }
    rawWord = rawWord.split(""); // Convert the string to an array

    // Remove any punctuation in rawWord array

    const removePunc = rawWord.filter(letter => {
        return punctuation.indexOf(letter) === - 1;
    });

    rawWord = removePunc.join(""); // Finalise word (convert from an array to a string) after changing and removing to lowercase and punctuation respectively.
    const reverseWord = removePunc.reverse().join(""); // Same as ^, but in a reverse manner

    // console.log(removePunc);
    // console.log(rawWord)
    // console.log(reversecleanword)

    // Comparison to return boolean
    return rawWord === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
