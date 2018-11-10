module.exports.listarProfessores = (app, req, res) => {
	const connection = new app.config.DBConnection()
	const professoresDAO = new app.models.ProfessoresDAO(connection)
	professoresDAO.listarTodosProfessores((error, resultado) => {
		return resultado ? res.render('professores', {professores: resultado}) : res.send(error)
	})
}

module.exports.professoresSalvar = (app, req, res) => {
	const dados = req.body;
	const connection = new app.config.DBConnection()
	const professoresDAO = new app.models.ProfessoresDAO(connection)
	professoresDao.salvarProfessores(dados, (error, resultado) =>{
		return resultado ? res.redirect('/profesores') : res.send(error)
	})
}