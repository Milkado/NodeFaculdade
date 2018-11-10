module.exports = (app) => {
    app.get('/formulario_inclusao_noticias', (req, res) => {
        app.controllers.form_inclusao_noticias.formInclusaoNoticias(app, req, res)
    })
}