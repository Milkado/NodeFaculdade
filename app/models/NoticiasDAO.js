class NoticiasDAO {

    constructor(connection) {

        this._connection = connection;
    }

    listarTodasNoticias(callback) {

        this._connection.open((error, db) => {

            if (db) {
                db.collection('noticias').find({}).toArray((error, resultado) => {

                    return resultado ? callback(null, resultado) : callback('Nãoi possivel conectar na collection noticias', null)
                })
            } else {
                callback(error, null)
            }
        })
    }


    listarNoticiaIndividual(id, callback) {

        this._connection.open((error, db) => {

            if (db) {
                db.collection('noticias').find({_id: this._connection.getObjectID(id)}).toArray((error, resultado) => {

                    return resultado ? callback(null, resultado) : callback('Nãoi possivel conectar na collection noticias', null)
                })
            } else {
                callback(error, null)
            }
        })
    }

    salvarNoticias(dados, cb){
        this._connection.open((open, db) => {
            if (db) {
                db.collection('noticias').insert(dados)
                cb(null, 'Inclusão com sucesso')
            }else {
                cb('Inclusão com erro', null)
            }
        })
    }

    excluirNoticias(id, cb){
        this._connection.open((error, db) => {
            if (db) {
                db.collection('noticias').remove({_id : this._connection.getObjectID(id)}, (error, result) =>{
                    return result ? cb(null, 'Exclusão com sucesso') : cb('Erro na exclusão', null)
                })
                
            }
        })
    }
}

module.exports = () => {
    return NoticiasDAO;
}