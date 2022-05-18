const express = require("express");
const cors = require ("cors");
const app = express();
const mysql = require("mysql2");
const session = require("session");
const path = require('path');
var corsOrgin = {
  origin : "http://localhost:8081"
};

app.use(cors(corsOrgin));

require('dotenv').config();
const hostCripted = process.env.HostDb;
const userCripted = process.env.User_db;
const PwCripted = process.env.Password_db;
const DbCripted = process.env.DataBaseName;



const connection = mysql.createConnection({
	host     : hostCripted,
	user     : userCripted,
	password : PwCripted,
	database : DbCripted
});


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// http://localhost:3000/
app.get('/', function(request, response) {
	// renvoie sur le indexhtml
	response.sendFile(path.join(__dirname + '/index.html'));
});

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// récupère password et user
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// on fait la connection à la db ou on récupère les infos
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, ) {
			if (error) throw error;
			// si le compte existe 
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				// on renvoie sur la page profil
				response.redirect('/home');
			} else {
				response.send('Mot de passe ou utilisateur incorrect !');
			}			
			response.end();
		});
	} else {
		response.send('Veuillez entrer un mot mot de passe');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// on check si le user et log
	if (request.session.loggedin) {
		response.send('Bon retour parmis nous, ' + request.session.username + '!');
	} else {
		// Si pas log
		response.send('Veuillez vous reconnecter');
	}
	response.end();
});

app.get("/", (req, res)=>{
  res.json({message: "test ùessage"})
});

// écoute du port serveur 
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
  console.log(`Le serveur tourne sur le port ${PORT}`)
});

module.exports = app;