module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        app.controllers.produtos.todosProdutos(app, req, res)
    })

    app.get('/produto', (req, res) => {
        app.controllers.produtos.produtoIndividual(app, req, res)
    })

    app.get('/cadastro_produtos', (req, res) => {
        app.controllers.produtos.cadastroProdutos(app, req, res)
    })
}