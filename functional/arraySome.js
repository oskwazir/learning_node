
function checkUsersValid(goodUsers) {
      return function(submittedUsers) {
        return submittedUsers.every(function checksEveryUser(submittedUser){
            return goodUsers.some(function userExists (validUser) {
                return submittedUser.id === validUser.id;
            });
        });
    };
};
    
module.exports = checkUsersValid;
