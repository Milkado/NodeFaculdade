module.exports = (app) => {
    app.get('/alunos', (req, res) => {
        app.controllers.alunos.listarAlunos(app, req, res)
    })

    app.post('/alunos/salvar', (req, res) => {
        app.controllers.alunos.alunosSalvar(app, req, res)
    })
}