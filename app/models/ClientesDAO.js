class ClientesDAO {
	constructor(connection){
		this._connection = connection;
	}

	listarTodosClientes(callback){
		this._connection.open((error, db) => {
			if(db){
				db.collection('clientes').find({}).toArray((error, resultado) => {
					return resultado ? callback (null, resultado) : callback('Não foi possível encontar a collection')
				})
			}else{
				callback(error, null)
			}
		})
	}

	salvarClientes(dados, callback){
		this._connection.open((open, db) => {
            if (db) {
            	db.collection('clientes').insert(dados)
            	callback(null, 'Insclusão com sucesso')
            }else{
            	callback('Insclusão com erro')
            }
	})
}

}

module.exports = (app) => {
	return ClientesDAO;
}