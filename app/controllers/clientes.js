module.exports.listarClientes = (app, req, res) => {
	const connection = new app.config.DBConnection();
	const clientesDAO = new app.models.ClientesDAO(connection)
	clientesDAO.listarTodosClientes((error, resutlado) => {
		return resutlado ? res.render('clientes', {clientes: resutlado}) : res.send(error)
	})
}

module.exports.clientesSalvar = (app, req, res) => {
	const dados = req.body;
	const connection = new app.config.DBConnection();
	const clientesDAO = new app.models.ClientesDAO(connection)
	clientesDAO.salvarClientes(dados, (error, resultado) => {
		return resultado ? res.redirect('/clientes') : res.send(error)
	})
}