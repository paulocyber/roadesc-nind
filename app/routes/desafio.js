module.exports = function(app){
	var controller = app.controllers.desafio;
	app.route('/users')
		.get(controller.listaUser);
	
};