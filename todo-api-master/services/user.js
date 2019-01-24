var User = require('../models/user')
var Login = require('../models/login')


exports.createUser = async function(details){

    var username = details.username;
    var password = details.password;


        var newUser = new User({
            username: username,
            password: password
        });

        try{
            var savedUser = await newUser.save()
            return savedUser;
        }catch(e){
            throw Error(e)
        }
    
   
}

exports.getDetails = async function(username){

    try{
        var details = await Login.find({
            username: username
        })
        console.log(details)
        return details;
    }catch(e){
        return response.status(400).json({status: 400, message: e.message});
    }
}

exports.login = async function(credentials) {

    var details = {
        username: credentials.username,
        password: credentials.password,
    }

    try{
        var user = await User.find({
            username: details.username,
            password: details.password
        });
        
        if(user.length) {
            var newLogin = new Login({
                username: credentials.username,
                sessionID: (Date.now()).toString(),
                loginTime: new Date()
            });
        
            try{
                var savedLogin = await newLogin.save();
                
                return savedLogin;
            }catch(e){
                throw Error("Error while Login")
            }
        } else {
            return response.status(404).json({status: 404, message: "Invalid Credentials"})
        }

    }catch(e){
        return response.status(400).json({status: 400, message: e})
    }
}

exports.logout = async function(session){

    try{
        var oldSession = await Login.findOneAndUpdate({
            sessionID: session
        }, {
            logoutTime: Date.now()
        });
        console.log(oldSession)
        return oldSession;
    }catch(e){
        console.log(e)
        throw Error("Error occured while logging out")
    }
}
