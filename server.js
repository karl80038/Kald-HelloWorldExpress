const express = require('express');
const { response } = require('express');
const app = express();

app.get("/", function(request, response){
    response.send('<h1>Hi World</h1>');
});

app.get("/about", function(req, res){
    res.send('?????????????????????');
})

app.get("/contact", function(req, res){
    res.send('nomailplease@nomail.no');
})

app.listen(3000, function(){
    console.log("Server is running on Port 3000.");
});
