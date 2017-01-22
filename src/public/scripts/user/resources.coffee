util = require('common').util
ajaxUtil = require('common').ajaxUtil

###
# Load all users
# @param callback function à executer après le chargment
###
loadUsers = (callback) -> 
    ajaxUtil.toSend 
        url: window.getAllUsersUrl,
        success: (obj) -> (resp = if (util.isObject obj) then obj.data else []);callback?(resp)


###
# Save an user
# @param user
# @param callback function à executer après le chargment
###
saveUser = (user, callback) -> 
    util.notObjectExcption user, "user must be an object value."

    data = user: JSON.stringify user

    ajaxUtil.toSend 
        url: window.saveUserUrl,
        data: data,
        success: (obj) -> (resp = if (util.isObject obj) then obj.data else null);callback?(resp)
        

###
# Remove users selected
# @param listIdUsers
# @param callback function à executer après la supression
###
removeUser = (listIdUsers, callback) -> 
    util.notArrayException listIdUsers, "listIdUser must be an array value."
    
    data = idUsers : JSON.stringify listIdUsers
    ajaxUtil.toSend 
        url: window.removeUserUrl,
        data: data,
        success: (obj) -> (resp = if (util.isObject obj) then obj.data else null);callback?(resp)


module.exports.loadUsers = loadUsers
module.exports.saveUser = saveUser
module.exports.removeUser = removeUser