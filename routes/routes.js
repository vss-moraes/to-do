var express = require('express');
var router = express.Router();

let tarefas = []

router.get('/', function(req, res, next) {
  res.render('index', {tarefas: tarefas});
});

router.get('/adicionar', function(req, res, next) {
  res.render('form', {title: 'Adicionar Tarefa'})
})

router.post('/adicionar', function(req, res, next) {
  tarefas.push(req.body.descricao);
  res.redirect('/')
})

router.delete('/deletar', (req, res, next) => {
  if (tarefas.splice(req.body.index, 1)){
    res.sendStatus(200)
  };
  res.sendStatus(500)
})

module.exports = router;
