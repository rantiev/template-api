var role = require('./appSetupRoles');
var rememberMe = require('./rememberMe');
var createAccessToken = require('./createAccessToken');

module.exports = function (app, express, config) {

	var mainRouter = express.Router();

	var AuthentificationR = require('../api/authentication/authenticationR')(app, mainRouter, role);
	var UserR = require('../api/users/userR')(mainRouter, role);

	app.use('/', mainRouter);
	app.use(role.middleware());

};