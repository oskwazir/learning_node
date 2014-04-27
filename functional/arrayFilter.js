
function getShortMessages(messages) {
   return messages.filter(function isShortEnough(item){
    return item.message.length < 50
   }).map(function getMessage(item){
    return item.message;
   });
};
    
module.exports = getShortMessages