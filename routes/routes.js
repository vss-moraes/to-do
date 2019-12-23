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
  console.log("Chamou no back");
  tarefas = tarefas.splice(req.body.index, 1);
  console.log(tarefas);
  res.sendStatus(200)
})

module.exports = router;
