var express = require('express');
var router = express.Router();

let tarefas = new Array();

router.get('/', function(req, res, next) {
  res.render('index', {tarefas: tarefas});
});

router.get('/adicionar', function(req, res, next) {
  res.render('form', {title: 'Adicionar Tarefa'})
})

router.post('/adicionar', function(req, res, next) {
  tarefas.push({
    descricao: req.body.descricao,
    prioridade: req.body.prioridade,
    prazo: req.body.prazo
  })
  console.log(tarefas)
  res.redirect('/')
})

module.exports = router;
