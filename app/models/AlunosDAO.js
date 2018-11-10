class AlunosDAO {

    constructor(connection) {

        this._connection = connection;
    }

    listarTodosAlunos(callback) {

        this._connection.open((error, db) => {

            if (db) {
                db.collection('alunos').find({}).toArray((error, resultado) => {

                    return resultado ? callback(null, resultado) : callback('Não possivel conectar na collection alunos', null)
                })
            } else {
                callback(error, null)
            }
        })
    }

    salvarAlunos(dados, cb){
        this._connection.open((open, db) => {
            if (db) {
                db.collection('alunos').insert(dados)
                cb(null, 'Inclusão com sucesso')
            }else {
                cb('Inclusão com erro', null)
            }
        })
    }
}

module.exports = () => {
    return AlunosDAO;
}