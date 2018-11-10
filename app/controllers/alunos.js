module.exports.listarAlunos = (app, req, res) => {
    const connection = new app.config.DBConnection();
    const alunosDAO = new app.models.AlunosDAO(connection)
    alunosDAO.listarTodosAlunos((error, resultado) => {
        return resultado ? res.render('alunos', {alunos: resultado}) : res.send(error)
    })
}

module.exports.alunosSalvar = (app, req, res) => {
   const dados = req.body;
   const connection = new app.config.DBConnection();
   const alunosDAO = new app.models.AlunosDAO(connection)
  alunosDAO.salvarAlunos(dados, (error, resultado) => {
       return resultado ? res.redirect('/alunos') : res.send(error)
   })
}
