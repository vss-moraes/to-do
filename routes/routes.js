var express = require('express');
var router = express.Router();

var tarefas = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gerenciador de Tarefas' });
});

router.get('/adicionar', function(req, res, next) {
  res.render('form', {title: 'Adicionar Tarefa'})
})

router.post('/adicionar', function(req, res, next) {
  tarefas.push(req.body)
  res.render('index', { title: 'Gerenciador de Tarefas' })
})

module.exports = router;
