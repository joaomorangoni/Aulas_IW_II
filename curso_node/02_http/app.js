// SELECIONAR O MÓDULO http DO NODE
var http = require('http')

//ABRIR UM SERVIDOR HTTP
http.createServer(function(req,res){
    res.end('BRYAN HOMOSSEXUAL')
}).listen(8081)

console.log('Servidor rodando...')