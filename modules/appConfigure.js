var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);

module.exports = function (app, express, config, mongoose) {

	app.use(cookieParser());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	app.use(function (req, res, next) {

		// Website you wish to allow to connect
		res.setHeader('Access-Control-Allow-Origin', 'http://app.com');

		// Request methods you wish to allow
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

		// Request headers you wish to allow
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Origin, Accept, Cookie');

		// Set to true if you need the website to include cookies in the requests sent
		// to the API (e.g. in case you use sessions)
		res.setHeader('Access-Control-Allow-Credentials', true);

		// Pass to next layer of middleware
		next();
	});

	app.use(function (req, res, next) {
		console.log('coockie is:', req.cookies);
		next();
	});

	app.use(session({
		saveUninitialized: false,
		resave: false,
		secret: config.sessionsSecretToken,
		cookie: {
			secure: false,
			domain: '.app.com',
			path: '/',
			maxAge: 1000 * 60 * 60 * 24
		},
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	}));

	app.use(express.static(path.join(__dirname, '..' , 'public')));

};