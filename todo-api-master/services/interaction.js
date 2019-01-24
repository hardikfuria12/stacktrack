var Interaction = require('../models/interaction')

exports.add = async function(details){

    var className = details.class;
    var text = details.text;
    var username = details.username;


        var interaction = new Interaction({
            text: text,
            class: className,
            username:username,
        });

        try{
            var d = await interaction.save()
            return d;
        }catch(e){
            throw Error(e)
        }
    
   
}

exports.get = async function(username){

    try{
        var details = await Interaction.find({
            username: username
        })
        console.log(details)
        return details;
    }catch(e){
        return response.status(400).json({status: 400, message: e.message});
    }
}