const palindromes = function (word) {
    const punctuation = '!';
    const lowerCase = word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
    let rawWord = lowerCase.split("");
    const removePunc = rawWord.filter(letter => {
        return punctuation.indexOf(letter) === - 1;
    });
    rawWord = removePunc.join("");
    const reversecleanword = removePunc.reverse().join("");

    return rawWord === reversecleanword ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
