var User = require('../services/user')

exports.addUser = async function(request, response, next){

    var details = {
        username: request.body.username,
        password: request.body.password,
    }
    
    try{
        var user = await User.createUser(details)
        return response.status(201).json({status: 201, data: user})
          
    }catch(e){
        return response.status(400).json({status: 400, message: e})
    }
}

exports.login = async function(request, response, next) {

    var details = {
        username: request.body.username,
        password: request.body.password,
    }

    try {
        var newLogin = await User.login(details);
        return response.status(201).json({status: 201, data: newLogin, message: "Successfully created"})
    }catch(e){
        return response.status(400).json({status: 400, message: e})
    }

}

exports.logout = async function(request, response, next) {

    var session = request.body.session;
    
    try {
        var old = await User.logout(session);
        return response.status(200).json({status: 201, data: old, message: "Successful Logout"})
    }catch(e){
        return response.status(400).json({status: 400, message: e})
    }
    
}

exports.details = async function(request, response, next) {
 
    var username = request.body.username;

    try {
        console.log(username)
        var details = await User.getDetails(username);
        return response.status(200).json({status: 201, data:details ,message: "Successful Retrieved"})
    }catch(e){
        return response.status(400).json({status: 400, message: e})
    }
}