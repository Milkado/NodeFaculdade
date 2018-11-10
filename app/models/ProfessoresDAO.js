class ProfessoresDAO {
	constructor(connection){
		this._connection = connection;
	}

	listarTodosProfessores(callback){
		this._connection.open((error, db) => {
			if(db){
				db.collection('professores').find({}).toArray((error, resultado) => {
					return resultado ? callback(null, resultado) : callback('Não foi possível conectar na collection professores' , null)
				})
			}else{
				callback(error, null)
			}
		})
	}

	salvarProfessores(dados, callback){
		this._connection.open((open, db) => {
            if (db) {
            	db.collection('professores').insert(dados)
            	callback(null, 'Inclusão com sucesso')
            }else{
            	callback('Inclusão com erro', null)
            }	
		})

	}

}

module.exports = (app) => {
	return ProfessoresDAO;
}