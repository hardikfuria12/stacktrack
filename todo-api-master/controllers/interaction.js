var Interaction = require('../services/interaction')

exports.add = async function(request, response, next){

    var data = {
        class: request.body.class,
        text: request.body.text,
        username: request.body.username
    }
    
    try{
        var interaction = await Interaction.add(data)
        return response.status(201).json({status: 201, data: interaction})
          
    }catch(e){
        return response.status(400).json({status: 400, message: e})
    }
}


exports.details = async function(request, response, next) {
 
    var username = request.body.username;

    try {
        console.log(username)
        var details = await Interaction.get(username);
        return response.status(200).json({status: 201, data:details ,message: "Successful Retrieved"})
    }catch(e){
        return response.status(400).json({status: 400, message: e})
    }
}