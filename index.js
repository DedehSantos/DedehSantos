 const express = require("express");

 const app = express();

 app.get("/", function(req, res){
     res.sendFile(__dirname + "/html/index.html");
 });


app.get("/Sobre", function(req, res){
    res.send("Minhas Pagina sobre");
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu Blog");
})

app.get('/ola/:nome/:cargo/:cor', function(req, res){
    res.send("Ola " + req.params.nome + " Sua cores prexxxxferica é " + req.params.cor);
})



 app.listen(8081, function(){
     console.log("Servidor rodando no http://localhost:8081")
 });