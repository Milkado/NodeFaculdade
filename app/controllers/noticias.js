module.exports.todasNoticias = (app, req, res) => {
    const connection = new app.config.DBConnection();
    const noticiasDAO = new app.models.NoticiasDAO(connection)
    noticiasDAO.listarTodasNoticias((error, resultado) => {
        return resultado ? res.render('noticias/noticias', {noticias: resultado}) : res.send(error)
    })
}

module.exports.noticiaIndividual = (app, req, res) => {
    const id = req.query.id
    const connection = new app.config.DBConnection();
    const noticiasDAO = new app.models.NoticiasDAO(connection)
    noticiasDAO.listarNoticiaIndividual(id, (error, resultado) => {
        return resultado ? res.render('noticias/noticia', {noticias: resultado}) : res.send(error)
    })
}

module.exports.noticiasSalvar = (app, req, res) => {
   const dados = req.body;
   const connection = new app.config.DBConnection();
   const noticiasDAO = new app.models.NoticiasDAO(connection)
   noticiasDAO.salvarNoticias(dados, (error, resultado) => {
       return resultado ? res.redirect('/noticias') : res.send(error)
   })
}

module.exports.noticiasExcluir = (app, req, res) => {
    const id = req.query.id
    const connection = new app.config.DBConnection();
    const noticiasDAO = new app.models.NoticiasDAO(connection)
    noticiasDAO.excluirNoticias(id, (error, resultado) => {
        return resultado ? res.redirect('/noticias') : res.send(error)
    })   
}