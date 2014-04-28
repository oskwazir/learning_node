
function countWords(inputWords){
    return inputWords.reduce(function(wordMap,word){
        if(word in wordMap) { 
            wordMap[word] = wordMap[word] + 1; 
        } else { 
            wordMap[word] = 1;
        }
        return wordMap;
    },{});
};

module.exports = countWords