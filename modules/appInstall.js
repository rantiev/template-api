//Create admin user
var bcrypt = require('bcrypt-nodejs');
var UserM = require('../api/users/userM');
var adminPass = bcrypt.hashSync('123123123', bcrypt.genSaltSync());


UserM.find({role: 'admin'}, function (err, admin) {

	if (err || admin.length) {
		return;
	}

	UserM.create({
		email: 'admin@gmail.com',
		fname: 'Admin',
		lname: 'Adminov',
		role: 'admin',
		image: 'john_doe.jpg',
		password: adminPass
	}, function (err, settings) {
		if (err) {
			console.log('Admin hasn\'t been created!');
			return;
		}
		console.log('Admin has been created!');
	});

});

module.exports = {};