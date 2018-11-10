module.exports = (app) => {
	app.get('/professores', (req, res) => {
		app.controllers.professores.listarProfessores(app, req, res)
	})
}

module.exports = (app) => {
	app.post('/professores/salvar', (req, res) => {
		app.controllers.professores.professoresSalvar(app, req, res)
	})
}