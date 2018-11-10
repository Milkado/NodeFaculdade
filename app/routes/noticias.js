module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        app.controllers.noticias.todasNoticias(app, req, res)
    })

    app.get('/noticia', (req, res) => {
        app.controllers.noticias.noticiaIndividual(app, req, res)
    })

    app.post('/noticias/salvar', (req, res) => {
        app.controllers.noticias.noticiasSalvar(app, req, res)
    })

    app.get('/noticias/excluir', (req, res) => {
        app.controllers.noticias.noticiasExcluir(app, req, res)
    })
}