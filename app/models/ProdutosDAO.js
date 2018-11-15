class ProdutosDAO {

    constructor(connection) {

        this._connection = connection;
    }

    listarTodosProdutos(callback) {

        this._connection.open((error, db) => {

            if (db) {
                db.collection('produtos').find({}).toArray((error, resultado) => {

                    return resultado ? callback(null, resultado) : callback('Não possivel conectar na collection produtos', null)
                })
            } else {
                callback(error, null)
            }
        })
    }

    listaProdutoIndividual(id, callback){
        this._connection.open((error, db) => {

            if (db) {
                db.collection('produtos').find({_id: this._connection.getObjectID(id)}).toArray((error, resultado) => {

                    return resultado ? callback(null, resultado) : callback('Não possivel conectar na collection produtos', null)
                })
            } else {
                callback(error, null)
            }
        })
    }

    salvarProduto(dados, cb){
        this._connection.open((open, db) => {
            if (db) {
                db.collection('produtos').insert(dados)
                cb(null, 'Inclusão com sucesso')
            }else {
                cb('Inclusão com erro', null)
            }
        })
    }

    excluirProduto(id, cb){
        this._connection.open((error, db) => {
            if (db) {
                db.collection('produtos').remove({_id : this._connection.getObjectID(id)}, (error, result) =>{
                    return result ? cb(null, 'Exclusão com sucesso') : cb('Erro na exclusão', null)
                })
                
            }
        })
    }




}

module.exports = () => {
    return ProdutosDAO;
}