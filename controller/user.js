const { response, request } = require("express");

const getHome = ((req, res = response) =>{
   
    res.render('home' , {
    
        titulo: 'Chatbot con node js'
    });

}) 

const postChatbot = ((req = request , res = response) => {

    
  
    if (req.body.queryResult.action == "suma") {
        console.log(req.body.queryResult);
        const {number2 , number1} = req.body.queryResult.parameters;
        const suma = number1 + number2;
       
        res.json({
            "fulfillmentText": 'La suma es: ' + suma
        });
    }

})

module.exports = {

   getHome,
   postChatbot

}