const Sequilize = require('sequelize')
const sequileze = new Sequilize('test','root','',{
    host:'localhost',
    dialect:'mysql'
})

// sequileze.authenticate().then(function(){
//     console.log('OK CONECTADO COM SUCESSO')
// }).catch(function(erro){
//     console.log('ERRO: ' + erro)
// })

const Postagem = sequileze.define('postagens',{
    titulo:{
        type: Sequilize.STRING
    },
    conteudo:{
        type: Sequilize.TEXT
    }
})

const Usuario = sequileze.define('usuarios',{
    nome:{
        type: Sequilize.STRING
    },
    sobrenome:{
        type: Sequilize.STRING
    },
    email:{
        type: Sequilize.STRING
    },
    idade:{
        type: Sequilize.INTEGER
    },
})

// Postagem.sync(force=true)
// Usuario.sync(force=true)

// Postagem.create({
//     titulo: 'PRIMEIRA POSTAGEM',
//     conteudo: 'Conteúdo da primeira postagem Caspirro e Fezes'
// })