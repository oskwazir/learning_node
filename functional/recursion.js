//reduce via recursion
function reduce(wordList,comparer,wordMap){
    if (!wordList.length) return wordMap;
    var currentWord = wordList[0];
    wordMap = comparer(wordMap,currentWord);
    var remainingWords = wordList.slice(1);
    return reduce(remainingWords,comparer,wordMap);        
}

module.exports = reduce;