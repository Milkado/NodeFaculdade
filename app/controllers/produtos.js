module.exports.todosProdutos = (app, req, res) => {
    const connection = new app.config.DBConnection();
    const produtosDAO = new app.models.ProdutosDAO(connection)
    produtosDAO.listarTodosProdutos((error, resultado) => {
        return resultado ? res.render('produtos/produtos', {protudos: resultado}) : res.send(error)
    })
}

module.exports.produtoIndividual = (app, req, res) => {
    const id = req.query.id
    const connection = new app.config.DBConnection();
    const produtosDAO = new app.models.ProdutosDAO(connection)
    produtosDAO.listarNoticiaIndividual(id, (error, resultado) => {
        return resultado ? res.render('produtos/produto', {noticias: resultado}) : res.send(error)
    })

}

module.exports.cadastroProdutos = (app, req, res) => {
   res.render('produtos/cadastro_produtos')
 }
