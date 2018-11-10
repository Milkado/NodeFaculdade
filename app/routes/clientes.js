module.exports = (app) => {
	app.get('/clientes', (req, res) => {
		app.controllers.clientes.listarClientes(app, req, res)
	})
}

module.exports = (app) => {
	app.post('/clientes/slavar', (req, res) => {
		app.controllers.clientes.salvarClientes(app, req, res)
	})
}