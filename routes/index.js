var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gerenciador de Tarefas' });
});

router.get('/adicionar', function(req, res, next) {
  res.render('form', {title: 'Adicionar Tarefa'})
})

module.exports = router;
