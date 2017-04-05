module.exports = function(app){

	var User = app.models.user;

	var controller = {};

	controller.listaUser = function(req, res){
		User.find(function(error,users){
			if(error){
				console.error(error);
				res.status(500).json(error);
			}
			res.json(users);
		})
	};

	controller.obtemUser= function(req,res){
		var _id = req.params.id;
		USer.findById(_id)
		.then(
			function(user){
				if(!user) throw new Error("User não encontrado");
				res.json(user)
			},
			function(erro){
				console.log(erro);
				res.status(404).json
			}
		);		
	};

	controller.removeUser = function(req,res){
		var _id = req.params.id;
		User.remove({"_id":_id})
		.then(
			function(){
				res.end();
			},
			function(erro){
				return console.error(erro);
			}
		);
	};



	return controller;
}