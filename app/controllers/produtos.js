module.exports.todosProdutos = (app, req, res) => {
    const connection = new app.config.DBConnection();
    const produtosDAO = new app.models.ProdutosDAO(connection)
    produtosDAO.listarTodosProdutos((error, resultado) => {
        return resultado ? res.render('produtos', {produtos: resultado}) : res.send(error)
    })
}

module.exports.produtoIndividual = (app, req, res) => {
    const id = req.query.id
    const connection = new app.config.DBConnection();
    const produtosDAO = new app.models.ProdutosDAO(connection)
    produtosDAO.listaProdutoIndividual(id, (error, resultado) => {
        return resultado ? res.render('produto', {produtos: resultado}) : res.send(error)
    })

}

module.exports.produtosSalvar = (app, req, res) => {
    const dados = req.body;
    const connection = new app.config.DBConnection();
    const produtosDAO = new app.models.ProdutosDAO(connection)
    produtosDAO.salvarProduto(dados, (error, resultado) => {
        return resultado ? res.redirect('/produtos') : res.send(error)
    })
 }
 
 module.exports.produtosExcluir = (app, req, res) => {
     const id = req.query.id
     const connection = new app.config.DBConnection();
     const produtosDAO = new app.models.ProdutosDAO(connection)
     produtosDAO.excluirProduto(id, (error, resultado) => {
         return resultado ? res.redirect('/produtos') : res.send(error)
     })
}

module.exports.cadastroProdutos = (app, req, res) => {
   res.render('cadastro_produtos')
 }
